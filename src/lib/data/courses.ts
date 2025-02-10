export const courses = [
  {
    id: 1,
    name: "Introduction to React Native",
    instructor: "John Doe",
    description: "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "/course1.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "React fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started with React Native",
        content: "Setup development environment, basic components, styling"
      },
      {
        week: 2,
        topic: "Navigation and Routing",
        content: "React Navigation, stack navigator, tab navigator"
      }
    ]
  },
  // Add more courses...
] 