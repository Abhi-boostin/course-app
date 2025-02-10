import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { CourseAccordion } from "@/components/courses/CourseAccordion"

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <CourseAccordion />
      </div>
    </DashboardLayout>
  )
}
