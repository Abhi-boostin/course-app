"use client"

import { Button } from "@/components/ui"
import { useDispatch, useSelector } from 'react-redux'
import { enrollInCourse, unenrollFromCourse } from '@/lib/redux/slices/courseSlice'
import type { RootState } from '@/lib/redux/store'
import { Course } from '@/lib/types/course'

interface CourseEnrollmentButtonProps {
  course: Course
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function CourseEnrollmentButton({ 
  course, 
  className = "",
  variant = "default",
  size = "default"
}: CourseEnrollmentButtonProps) {
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

  const buttonText = isEnrolled ? 'Unenroll from Course' : 'Enroll in Course'
  const buttonVariant = isEnrolled ? "destructive" : variant

  return (
    <Button 
      onClick={handleEnrollment} 
      variant={buttonVariant}
      size={size}
      className={className}
    >
      {buttonText}
    </Button>
  )
} 