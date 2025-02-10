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
  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Sarah Smith",
    description: "Deep dive into advanced JavaScript concepts including closures, prototypes, and async programming.",
    enrollmentStatus: "In Progress",
    thumbnail: "/course2.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scope",
        content: "Understanding lexical scope, closures, and practical applications"
      },
      {
        week: 2,
        topic: "Prototypal Inheritance",
        content: "JavaScript prototypes, inheritance patterns, and the prototype chain"
      }
    ]
  },
  {
    id: 3,
    name: "Full Stack Web Development",
    instructor: "Michael Chen",
    description: "Build complete web applications using modern technologies like Next.js, Node.js, and MongoDB.",
    enrollmentStatus: "Open",
    thumbnail: "/course3.jpg",
    duration: "12 weeks",
    schedule: "Weekends, 10:00 AM - 2:00 PM",
    location: "Hybrid",
    prerequisites: ["Basic web development", "JavaScript fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "Modern Frontend Development",
        content: "Next.js, React, and TypeScript fundamentals"
      },
      {
        week: 2,
        topic: "Backend Development",
        content: "Node.js, Express, and RESTful APIs"
      }
    ]
  },
  {
    id: 4,
    name: "UI/UX Design Fundamentals",
    instructor: "Emma Wilson",
    description: "Learn the principles of user interface and user experience design for digital products.",
    enrollmentStatus: "Closed",
    thumbnail: "/course4.jpg",
    duration: "6 weeks",
    schedule: "Fridays, 5:00 PM - 8:00 PM",
    location: "In-Person",
    prerequisites: ["Basic design knowledge", "Familiarity with design tools"],
    syllabus: [
      {
        week: 1,
        topic: "Design Principles",
        content: "Color theory, typography, and layout basics"
      },
      {
        week: 2,
        topic: "User Research",
        content: "User personas, journey mapping, and usability testing"
      }
    ]
  },
  {
    id: 5,
    name: "Cloud Computing with AWS",
    instructor: "David Kumar",
    description: "Master cloud computing concepts and AWS services for modern application deployment.",
    enrollmentStatus: "Open",
    thumbnail: "/course5.jpg",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic Linux administration", "Programming fundamentals"],
    syllabus: [
      {
        week: 1,
        topic: "AWS Fundamentals",
        content: "IAM, EC2, S3, and basic AWS services"
      },
      {
        week: 2,
        topic: "Serverless Architecture",
        content: "Lambda functions, API Gateway, and DynamoDB"
      }
    ]
  }
] 