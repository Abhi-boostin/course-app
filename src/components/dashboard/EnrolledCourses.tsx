"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/lib/redux/store"
import { CourseList } from "@/components/courses"

export function EnrolledCourses() {
  const enrolledCourseIds = useSelector((state: RootState) => state.courses.enrolledCourses)
  const courses = useSelector((state: RootState) => state.courses.courses)
  const enrolledCourses = courses.filter(course => enrolledCourseIds.includes(course.id))

  if (enrolledCourses.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <p>You haven&apos;t enrolled in any courses yet.</p>
        <p className="text-sm mt-2">Browse available courses to get started!</p>
      </div>
    )
  }

  // Mock progress data - in a real app, this would come from the backend
  const progressData: Record<number, { value: number; text: string }> = {}
  enrolledCourses.forEach(course => {
    progressData[course.id] = {
      value: Math.floor(Math.random() * 100),
      text: `${Math.floor(Math.random() * 6) + 1} of ${course.syllabus.length} modules completed`
    }
  })

  return (
    <CourseList
      courses={enrolledCourses}
      showSearch={true}
      showEnrollmentStatus={false}
      showProgress={true}
      progressData={progressData}
    />
  )
} 