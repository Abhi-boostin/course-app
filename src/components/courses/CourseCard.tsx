"use client"

import { Course } from "@/lib/types/course"
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/components/ui"

interface CourseCardProps {
  course: Course
  showEnrollmentStatus?: boolean
  showProgress?: boolean
  progressValue?: number
  progressText?: string
}

export function CourseCard({ 
  course, 
  showEnrollmentStatus = true, 
  showProgress = false,
  progressValue,
  progressText
}: CourseCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Closed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-2 text-lg">{course.name}</CardTitle>
          {showEnrollmentStatus && (
            <Badge className={getStatusColor(course.enrollmentStatus)}>
              {course.enrollmentStatus}
            </Badge>
          )}
        </div>
        <div className="text-sm text-muted-foreground">
          Instructor: {course.instructor}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {course.description}
          </p>
          
          {showProgress && progressValue !== undefined && (
            <div className="space-y-2">
              <div className="text-sm font-medium">Course Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progressValue}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground">
                {progressText || `${progressValue}% completed`}
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <strong>Duration:</strong> {course.duration}
            </div>
            <div>
              <strong>Schedule:</strong> {course.schedule}
            </div>
            <div>
              <strong>Location:</strong> {course.location}
            </div>
            {course.prerequisites.length > 0 && (
              <div className="col-span-2">
                <strong>Prerequisites:</strong> {course.prerequisites.join(', ')}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 