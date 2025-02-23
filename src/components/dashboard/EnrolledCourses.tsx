"use client"

import { useSelector } from "react-redux"
import type { RootState } from "@/lib/redux/store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function EnrolledCourses() {
  const enrolledCourseIds = useSelector((state: RootState) => state.courses.enrolledCourses)
  const courses = useSelector((state: RootState) => state.courses.courses)
  const enrolledCourses = courses.filter(course => enrolledCourseIds.includes(course.id))

  if (enrolledCourses.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        <p>You haven&apos;t enrolled in any courses yet.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {enrolledCourses.map((course) => (
        <Card key={course.id}>
          <CardHeader>
            <CardTitle className="line-clamp-1">{course.name}</CardTitle>
            <div className="text-sm text-muted-foreground">
              Instructor: {course.instructor}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Course Progress</div>
                <Progress value={33} />
                <div className="text-xs text-muted-foreground">
                  2 of 6 modules completed
                </div>
              </div>
              <div className="text-sm">
                <div><strong>Schedule:</strong> {course.schedule}</div>
                <div><strong>Duration:</strong> {course.duration}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 