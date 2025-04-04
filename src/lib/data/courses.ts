export const courses = [
  {
    id: 1,
    name: "Advanced Full Stack Development",
    instructor: "Priya Sharma",
    description: "Master MERN stack development with real-world projects. Learn modern web development practices including React, Node.js, Express, and MongoDB.",
    enrollmentStatus: "Open",
    duration: "12 weeks",
    schedule: "Saturday, Sunday 9:00 AM - 11:00 AM",
    location: "Online",
    prerequisites: ["Basic JavaScript", "HTML & CSS", "Basic React knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Frontend Architecture",
        content: "React components, Hooks, State Management"
      },
      {
        week: 2,
        topic: "Backend Development",
        content: "Node.js, Express, REST APIs"
      }
    ]
  },
  {
    id: 2,
    name: "Data Science Fundamentals",
    instructor: "Rahul Verma",
    description: "Learn data analysis, visualization, and machine learning basics using Python. Perfect for aspiring data scientists.",
    enrollmentStatus: "In Progress",
    duration: "8 weeks",
    schedule: "Monday, Wednesday 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic Python", "Mathematics", "Statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Python for Data Science",
        content: "NumPy, Pandas, Data Manipulation"
      },
      {
        week: 2,
        topic: "Data Visualization",
        content: "Matplotlib, Seaborn, Interactive Visualizations"
      }
    ]
  },
  {
    id: 3,
    name: "DevOps Engineering",
    instructor: "Arjun Nair",
    description: "Learn modern DevOps practices including CI/CD, containerization, and cloud deployment using AWS and Docker.",
    enrollmentStatus: "Open",
    duration: "10 weeks",
    schedule: "Tuesday, Thursday 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Linux Basics", "Basic Programming", "Git"],
    syllabus: [
      {
        week: 1,
        topic: "Docker & Containerization",
        content: "Docker basics, Container orchestration"
      },
      {
        week: 2,
        topic: "CI/CD Pipeline",
        content: "Jenkins, GitHub Actions, Automated Testing"
      }
    ]
  }
];

// Add TypeScript interface for better type safety
export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: "Open" | "In Progress" | "Closed";
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
}