"use client"

import { Progress } from "@/components/ui"

interface CourseProgressProps {
  value: number
  text?: string
  showPercentage?: boolean
  className?: string
}

export function CourseProgress({ 
  value, 
  text, 
  showPercentage = true,
  className = ""
}: CourseProgressProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="text-sm font-medium">Course Progress</div>
      <Progress value={value} className="w-full" />
      <div className="text-xs text-muted-foreground">
        {text || (showPercentage ? `${value}% completed` : `${value} modules completed`)}
      </div>
    </div>
  )
} 