"use client"

import { Course } from "@/lib/types/course"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui"
import { CourseDrawer } from "@/components/courses"

interface CourseAccordionItemProps {
  course: Course
}

export function CourseAccordionItem({ course }: CourseAccordionItemProps) {
  return (
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
  )
} 