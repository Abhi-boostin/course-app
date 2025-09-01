"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCourses } from "@/lib/redux/slices/courseSlice"
import { RootState } from "@/lib/redux/store"
import { courses } from "@/lib/types/course"
import { CourseList } from "@/components/courses"

export default function CoursesPage() {
  const dispatch = useDispatch()
  const coursesFromStore = useSelector((state: RootState) => state.courses.courses)

  useEffect(() => {
    dispatch(setCourses(courses))
  }, [dispatch])

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
        <p className="text-xl text-muted-foreground">
          Discover and enroll in our comprehensive course offerings
        </p>
      </div>
      
      <CourseList 
        courses={courses}
        showSearch={true}
        showEnrollmentStatus={true}
        showProgress={false}
      />
    </div>
  )
} 