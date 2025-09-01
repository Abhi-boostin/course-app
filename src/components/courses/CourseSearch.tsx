"use client"

import { Input } from "@/components/ui"
import { Search } from "lucide-react"

interface CourseSearchProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  placeholder?: string
  className?: string
}

export function CourseSearch({ 
  searchQuery, 
  onSearchChange, 
  placeholder = "Search courses or instructors...",
  className = ""
}: CourseSearchProps) {
  return (
    <div className={`relative ${className}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 max-w-md mx-auto"
      />
    </div>
  )
} 