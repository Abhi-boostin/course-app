"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/types/course"

interface CourseDrawerProps {
  course: Course
}

export function CourseDrawer({ course }: CourseDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-sm text-primary hover:underline">
          View full details →
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
          <div className="p-4 space-y-4">
            <div className="text-sm space-y-2">
              <h3 className="font-semibold">About this Course</h3>
              <p className="text-muted-foreground">{course.about}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong>Duration:</strong> {course.duration}
              </div>
              <div>
                <strong>Location:</strong> {course.location}
              </div>
              <div>
                <strong>Schedule:</strong> {course.schedule}
              </div>
              <div>
                <strong>Status:</strong> {course.enrollmentStatus}
              </div>
            </div>
            <div className="text-sm space-y-2">
              <h3 className="font-semibold">Prerequisites</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>
          <DrawerFooter>
            <Button>Add to My Courses</Button>
            <DrawerClose asChild>
              <Button variant="outline">Go back</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 