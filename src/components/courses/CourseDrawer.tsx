"use client"

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, Button } from "@/components/ui"
import { Course } from "@/lib/types/course"
import { CourseDetails } from "./CourseDetails"
import { CourseEnrollmentButton } from "./CourseEnrollmentButton"

interface CourseDrawerProps {
  course: Course
  showPrerequisites?: boolean
  showSyllabus?: boolean
  showStudents?: boolean
}

export function CourseDrawer({ 
  course, 
  showPrerequisites = true, 
  showSyllabus = true, 
  showStudents = false 
}: CourseDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" className="mr-2">
          View Details
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader>
            <DrawerTitle>{course.name}</DrawerTitle>
            <DrawerDescription>
              Instructor: {course.instructor}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <CourseDetails 
              course={course}
              showPrerequisites={showPrerequisites}
              showSyllabus={showSyllabus}
              showStudents={showStudents}
            />
          </div>
          <DrawerFooter className="flex-row justify-between">
            <CourseEnrollmentButton course={course} className="flex-1 mr-2" />
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}