# Course App Component Structure

## Overview
This document outlines the improved component structure and organization of the Course App, designed for better maintainability, reusability, and code readability.

## Component Architecture

### 1. Core Components (`src/components/`)

#### Course Components (`src/components/courses/`)
- **CourseAccordion**: Main accordion view for courses (uses CourseAccordionList)
- **CourseAccordionItem**: Individual accordion item for a course
- **CourseAccordionList**: Container for accordion-style course display
- **CourseCard**: Reusable card component for displaying course information
- **CourseDetails**: Detailed course information display
- **CourseDrawer**: Modal drawer for course details
- **CourseEnrollmentButton**: Handles course enrollment logic
- **CourseList**: Grid layout for displaying courses
- **CourseProgress**: Progress indicator component
- **CourseSearch**: Search functionality for courses

#### Dashboard Components (`src/components/dashboard/`)
- **DashboardLayout**: Main layout wrapper with navigation
- **EnrolledCourses**: Displays user's enrolled courses

#### UI Components (`src/components/ui/`)
- **Accordion**: Collapsible content sections
- **Badge**: Status indicators
- **Button**: Interactive buttons
- **Card**: Content containers
- **Drawer**: Modal side panels
- **Input**: Form input fields
- **Progress**: Progress bars
- **ScrollArea**: Scrollable content areas

### 2. Component Relationships

```
CourseAccordion
├── CourseAccordionList
    ├── CourseSearch
    └── CourseAccordionItem
        └── CourseDrawer
            ├── CourseDetails
            └── CourseEnrollmentButton

CourseList
├── CourseSearch
└── CourseCard
    └── CourseProgress (optional)

EnrolledCourses
└── CourseList (with progress data)
```

### 3. Key Benefits of New Structure

#### Separation of Concerns
- Each component has a single responsibility
- Logic is separated from presentation
- Reusable components can be used in different contexts

#### Improved Maintainability
- Smaller, focused components are easier to debug
- Changes to one component don't affect others
- Clear component boundaries

#### Better Reusability
- Components can be used in different layouts
- Props allow for customization
- Consistent interface across the app

#### Enhanced Readability
- Clear component names
- Logical file organization
- Consistent import patterns

### 4. Import Structure

#### Before (Old Structure)
```typescript
import { CourseDrawer } from "@/components/courses/CourseDrawer"
import { Button } from "@/components/ui/button"
```

#### After (New Structure)
```typescript
import { CourseDrawer, Button } from "@/components"
// or
import { CourseDrawer } from "@/components/courses"
import { Button } from "@/components/ui"
```

### 5. Component Props and Customization

#### CourseCard
- `showEnrollmentStatus`: Toggle enrollment status display
- `showProgress`: Toggle progress bar display
- `progressValue`: Custom progress percentage
- `progressText`: Custom progress description

#### CourseList
- `showSearch`: Toggle search functionality
- `showEnrollmentStatus`: Toggle enrollment status
- `showProgress`: Toggle progress display
- `progressData`: Custom progress data for each course

#### CourseDrawer
- `showPrerequisites`: Toggle prerequisites section
- `showSyllabus`: Toggle syllabus section
- `showStudents`: Toggle enrolled students section

### 6. State Management

- Redux store manages course data and enrollment state
- Components use selectors to access state
- Actions are dispatched through component handlers
- Local state is used for UI interactions (search, filters)

### 7. Styling and Theming

- Tailwind CSS for styling
- Consistent spacing and typography
- Dark mode support through theme provider
- Responsive design patterns

### 8. Future Enhancements

- Add loading states for async operations
- Implement error boundaries
- Add accessibility improvements
- Create more specialized course components
- Add animation and transition effects

## Usage Examples

### Basic Course List
```typescript
import { CourseList } from "@/components/courses"

<CourseList 
  courses={courses}
  showSearch={true}
  showEnrollmentStatus={true}
/>
```

### Course with Progress
```typescript
import { CourseCard } from "@/components/courses"

<CourseCard
  course={course}
  showProgress={true}
  progressValue={75}
  progressText="3 of 4 modules completed"
/>
```

### Detailed Course View
```typescript
import { CourseDrawer } from "@/components/courses"

<CourseDrawer
  course={course}
  showPrerequisites={true}
  showSyllabus={true}
  showStudents={false}
/>
```

This structure provides a solid foundation for scaling the application while maintaining code quality and developer experience. 