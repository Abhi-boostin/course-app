"use client"

import { Course } from "@/lib/types/course"

interface CourseDetailsProps {
  course: Course
  showPrerequisites?: boolean
  showSyllabus?: boolean
  showStudents?: boolean
}

export function CourseDetails({ 
  course, 
  showPrerequisites = false, 
  showSyllabus = false, 
  showStudents = false 
}: CourseDetailsProps) {
  return (
    <div className="space-y-6">
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

      {showPrerequisites && course.prerequisites.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold">Prerequisites</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            {course.prerequisites.map((prereq, index) => (
              <li key={index}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}

      {showSyllabus && course.syllabus.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold">Course Syllabus</h4>
          <div className="space-y-2">
            {course.syllabus.map((week, index) => (
              <div key={index} className="text-sm border-l-2 border-primary pl-3">
                <div className="font-medium">Week {week.week}: {week.topic}</div>
                <div className="text-muted-foreground">{week.content}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showStudents && course.students.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-semibold">Enrolled Students ({course.students.length})</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {course.students.map((student) => (
              <div key={student.id} className="text-sm p-2 bg-muted rounded">
                <div className="font-medium">{student.name}</div>
                <div className="text-muted-foreground">{student.email}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 