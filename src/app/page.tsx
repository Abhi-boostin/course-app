import { CourseAccordion } from "@/components/courses/CourseAccordion"

export default function Home() {
  return (
    <main className="min-h-screen py-8">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8">
          Available Courses
        </h1>
        <CourseAccordion />
      </div>
    </main>
  )
}
