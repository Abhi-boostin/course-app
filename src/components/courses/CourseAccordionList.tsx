"use client"

import { Course } from "@/lib/types/course"
import { CourseSearch, CourseAccordionItem } from "@/components/courses"
import { ScrollArea, Accordion } from "@/components/ui"
import { useState, useMemo } from "react"

interface CourseAccordionListProps {
  courses: Course[]
  showSearch?: boolean
  maxHeight?: string
  className?: string
}

export function CourseAccordionList({ 
  courses, 
  showSearch = true, 
  maxHeight = "600px",
  className = ""
}: CourseAccordionListProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = useMemo(() => {
    if (!searchQuery.trim()) return courses
    
    return courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [courses, searchQuery])

  if (courses.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>No courses available.</p>
      </div>
    )
  }

  return (
    <div className={`w-full max-w-3xl mx-auto p-4 space-y-4 ${className}`}>
      {showSearch && (
        <CourseSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search courses or instructors..."
        />
      )}
      
      {filteredCourses.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          <p>No courses match your search criteria.</p>
        </div>
      ) : (
        <ScrollArea className={`rounded-md border p-4`} style={{ height: maxHeight }}>
          <Accordion type="single" collapsible className="w-full">
            {filteredCourses.map((course) => (
              <CourseAccordionItem key={course.id} course={course} />
            ))}
          </Accordion>
        </ScrollArea>
      )}
    </div>
  )
} 