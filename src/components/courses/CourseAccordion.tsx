"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { courses } from "@/lib/data/courses"
import Link from "next/link"
import { CourseDrawer } from "./CourseDrawer"
import { Button } from "@/components/ui/button"

export function CourseAccordion() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                  <div className="flex items-center space-x-2">
                    <CourseDrawer course={course} />
                    <Button variant="link" className="text-sm text-primary hover:underline">
                      Quick Enroll →
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  )
} 