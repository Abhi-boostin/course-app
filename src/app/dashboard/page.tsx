import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { EnrolledCourses } from "@/components/dashboard/EnrolledCourses"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">My Enrolled Courses</h1>
        <EnrolledCourses />
      </div>
    </DashboardLayout>
  )
} 