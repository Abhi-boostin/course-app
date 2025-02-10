"use client"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Course } from "@/lib/types/course"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface CourseDrawerProps {
  course: Course
}

export function CourseDrawer({ course }: CourseDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="text-sm text-primary hover:underline">
          View full details →
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader>
            <DrawerTitle>{course.name}</DrawerTitle>
            <DrawerDescription>
              Instructor: {course.instructor}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-6">
            <div className="text-sm space-y-2">
              <h3 className="font-semibold">About this Course</h3>
              <p className="text-muted-foreground">{course.about || course.description}</p>
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

            <div className="text-sm space-y-2">
              <h3 className="font-semibold">Prerequisites</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold mb-2">Syllabus</h3>
              <Accordion type="single" collapsible className="w-full">
                {course.syllabus.map((item, index) => (
                  <AccordionItem key={index} value={`week-${index + 1}`}>
                    <AccordionTrigger className="text-sm">
                      Week {item.week}: {item.topic}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <DrawerFooter>
            <Button>Add to My Courses</Button>
            <DrawerClose asChild>
              <Button variant="outline">Go back</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
} 