export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "In Progress" | "Closed";
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
  students: {
    id: number;
    name: string;
    email: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "Emily Johnson",
    description: "Learn the fundamentals of React Native development and build cross-platform mobile applications.",
    enrollmentStatus: "Open" as const,
    thumbnail: "/images/react-native-course.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "React fundamentals"],
    syllabus: [
      { week: 1, topic: "Introduction to React Native", content: "Setting up development environment" },
      { week: 2, topic: "Components and JSX", content: "Building your first components" },
      { week: 3, topic: "Navigation", content: "React Navigation basics" },
      { week: 4, topic: "State Management", content: "Using hooks and context" },
      { week: 5, topic: "Styling", content: "StyleSheet and Flexbox" },
      { week: 6, topic: "APIs and Networking", content: "Fetch data from APIs" },
      { week: 7, topic: "Device Features", content: "Camera, GPS, and sensors" },
      { week: 8, topic: "Publishing", content: "App store deployment" }
    ],
    students: [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" }
    ]
  },
  {
    id: 2,
    name: "Advanced JavaScript",
    instructor: "Michael Chen",
    description: "Deep dive into advanced JavaScript concepts and modern ES6+ features.",
    enrollmentStatus: "In Progress" as const,
    thumbnail: "/images/javascript-course.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Room 101",
    prerequisites: ["Basic JavaScript"],
    syllabus: [
      { week: 1, topic: "ES6+ Features", content: "Arrow functions, destructuring, modules" },
      { week: 2, topic: "Async Programming", content: "Promises, async/await" },
      { week: 3, topic: "Closures and Scope", content: "Understanding JavaScript scope" },
      { week: 4, topic: "Prototypes", content: "Prototype chain and inheritance" },
      { week: 5, topic: "Error Handling", content: "Try-catch and error patterns" }
    ],
    students: [
      { id: 3, name: "Bob Wilson", email: "bob@example.com" },
      { id: 4, name: "Alice Brown", email: "alice@example.com" },
      { id: 5, name: "Charlie Davis", email: "charlie@example.com" }
    ]
  },
  {
    id: 3,
    name: "Python for Data Science",
    instructor: "Sarah Martinez",
    description: "Learn Python programming with focus on data analysis and machine learning applications.",
    enrollmentStatus: "Closed" as const,
    thumbnail: "/images/python-course.jpg",
    duration: "12 weeks",
    schedule: "Saturdays, 10:00 AM - 1:00 PM",
    location: "Lab 205",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      { week: 1, topic: "Python Basics", content: "Syntax, variables, and data types" },
      { week: 2, topic: "Data Structures", content: "Lists, dictionaries, and sets" },
      { week: 3, topic: "NumPy", content: "Numerical computing with arrays" },
      { week: 4, topic: "Pandas", content: "Data manipulation and analysis" },
      { week: 5, topic: "Matplotlib", content: "Data visualization" },
      { week: 6, topic: "Machine Learning Intro", content: "Scikit-learn basics" }
    ],
    students: [
      { id: 6, name: "David Lee", email: "david@example.com" }
    ]
  }
];
