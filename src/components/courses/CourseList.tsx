"use client"

import { Course } from "@/lib/types/course"
import { CourseCard, CourseSearch } from "@/components/courses"
import { useState, useMemo } from "react"

interface CourseListProps {
  courses: Course[]
  showSearch?: boolean
  showEnrollmentStatus?: boolean
  showProgress?: boolean
  progressData?: Record<number, { value: number; text: string }>
  className?: string
}

export function CourseList({ 
  courses, 
  showSearch = true, 
  showEnrollmentStatus = true,
  showProgress = false,
  progressData = {},
  className = ""
}: CourseListProps) {
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
    <div className={`space-y-6 ${className}`}>
      {showSearch && (
        <CourseSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search courses, instructors, or descriptions..."
        />
      )}
      
      {filteredCourses.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          <p>No courses match your search criteria.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              showEnrollmentStatus={showEnrollmentStatus}
              showProgress={showProgress}
              progressValue={progressData[course.id]?.value}
              progressText={progressData[course.id]?.text}
            />
          ))}
        </div>
      )}
    </div>
  )
} 