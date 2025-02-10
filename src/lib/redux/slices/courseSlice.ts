import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { courses } from '@/lib/data/courses'

interface CourseState {
  courses: Course[]
  enrolledCourses: number[] // Array of course IDs
  loading: boolean
  error: string | null
}

const initialState: CourseState = {
  courses: courses,
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
    }
  }
})

export const { enrollInCourse, unenrollFromCourse } = courseSlice.actions
export default courseSlice.reducer 