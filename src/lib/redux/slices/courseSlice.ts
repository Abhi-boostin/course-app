import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Course } from '@/lib/types/course'

interface CourseState {
  courses: Course[] // Initialize as an empty array
  enrolledCourses: number[] // Array of course IDs
  loading: boolean
  error: string | null
}

const initialState: CourseState = {
  courses: [], // Start with an empty array
  enrolledCourses: [],
  loading: false,
  error: null
}

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    enrollInCourse: (state, action: PayloadAction<number>) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload)
      }
    },
    unenrollFromCourse: (state, action: PayloadAction<number>) => {
      state.enrolledCourses = state.enrolledCourses.filter(id => id !== action.payload)
    },
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload; // Add a reducer to set courses from the API
    }
  }
})

export const { enrollInCourse, unenrollFromCourse, setCourses } = courseSlice.actions
export default courseSlice.reducer 