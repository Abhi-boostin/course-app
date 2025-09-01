"use client"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCourses } from "@/lib/redux/slices/courseSlice"
import { RootState } from "@/lib/redux/store"
import { courses } from "@/lib/types/course"
import { CourseAccordionList } from "@/components/courses"

export function CourseAccordion() {
  const dispatch = useDispatch()
  const coursesFromStore = useSelector((state: RootState) => state.courses.courses)

  useEffect(() => {
    // Directly set the hardcoded courses
    dispatch(setCourses(courses))
  }, [dispatch])

  return <CourseAccordionList courses={courses} />
}
