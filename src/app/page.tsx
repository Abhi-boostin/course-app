import { lazy, Suspense } from "react"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const CourseAccordion = lazy(() => import("@/components/courses/CourseAccordion"))

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Available Courses</h1>
        <Suspense fallback={<div>Loading courses...</div>}>
          <CourseAccordion />
        </Suspense>
      </div>
    </DashboardLayout>
  )
}
