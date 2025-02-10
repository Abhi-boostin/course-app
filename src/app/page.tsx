import { CourseAccordion } from "@/components/courses/CourseAccordion"
import { BackgroundPaths } from "@/components/ui/background-paths"

export default function Home() {
  return (
    <main className="relative min-h-screen py-8">
      <BackgroundPaths />
      <div className="container relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          Available Courses
        </h1>
        <CourseAccordion />
      </div>
    </main>
  )
}
