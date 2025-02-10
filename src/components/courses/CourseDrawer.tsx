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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useDispatch, useSelector } from 'react-redux'
import { enrollInCourse, unenrollFromCourse } from '@/lib/redux/slices/courseSlice'
import type { RootState } from '@/lib/redux/store'

interface CourseDrawerProps {
  course: Course
}

export function CourseDrawer({ course }: CourseDrawerProps) {
  const dispatch = useDispatch()
  const enrolledCourses = useSelector((state: RootState) => state.courses.enrolledCourses)
  const isEnrolled = enrolledCourses.includes(course.id)

  const handleEnrollment = () => {
    if (isEnrolled) {
      dispatch(unenrollFromCourse(course.id))
    } else {
      dispatch(enrollInCourse(course.id))
    }
  }

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
          <div className="p-4 space-y-6">
            <div className="text-sm space-y-2">
              <h3 className="font-semibold">About this Course</h3>
              <p className="text-muted-foreground">{course.description}</p>
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
                <strong>Status:</strong> 
                <span className={`ml-1 ${
                  course.enrollmentStatus === 'Open' ? 'text-green-600 dark:text-green-400' :
                  course.enrollmentStatus === 'Closed' ? 'text-red-600 dark:text-red-400' :
                  'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {course.enrollmentStatus}
                </span>
              </div>
            </div>
          </div>
          <DrawerFooter className="flex-row justify-between">
            <Button onClick={handleEnrollment} className="flex-1 mr-2">
              {isEnrolled ? 'Unenroll from Course' : 'Enroll in Course'}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="flex-1">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}