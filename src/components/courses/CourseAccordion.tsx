"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCourses } from "@/lib/redux/slices/courseSlice"
import { RootState } from "@/lib/redux/store"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { CourseDrawer } from "./CourseDrawer"

export function CourseAccordion() {
  const dispatch = useDispatch()
  const courses = useSelector((state: RootState) => state.courses.courses)
  const [searchQuery, setSearchQuery] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("https://mocki.io/v1/68c63d24-6b6b-4156-8c24-a3118bacd02e")
        if (!response.ok) {
          throw new Error('Failed to fetch courses')
        }
        const data = await response.json()
        if (data.courses && Array.isArray(data.courses)) {
          dispatch(setCourses(data.courses))
        } else {
          throw new Error("Invalid data format")
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred')
        console.error("Error fetching courses:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCourses()
  }, [dispatch])

  const filteredCourses = Array.isArray(courses) ? courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  ) : []

  if (isLoading) {
    return <div>Loading courses...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      <Input
        placeholder="Search courses or instructors..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md mx-auto"
      />
      <ScrollArea className="h-[600px] rounded-md border p-4">
        <Accordion type="single" collapsible className="w-full">
          {filteredCourses.map((course) => (
            <AccordionItem key={course.id} value={`item-${course.id}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col items-start">
                  <div className="text-lg font-semibold">{course.name}</div>
                  <div className="text-sm text-muted-foreground">
                    Instructor: {course.instructor}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Duration:</strong> {course.duration}
                    </div>
                    <div>
                      <strong>Schedule:</strong> {course.schedule}
                    </div>
                    <div>
                      <strong>Location:</strong> {course.location}
                    </div>
                    <div>
                      <strong>Status:</strong> {course.enrollmentStatus}
                    </div>
                  </div>
                  <CourseDrawer course={course} />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  )
} 