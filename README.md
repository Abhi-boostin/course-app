# Course Management App

A modern course management platform built with Next.js 15 and TypeScript. Features an intuitive interface for browsing and enrolling in courses, with dark/light mode support and responsive design. Built using Redux for state management, Tailwind CSS for styling, and shadcn/ui components.

🚀 **Live Demo**: [https://course-app-ecru.vercel.app/](https://course-app-ecru.vercel.app/)

## Quick Start
```bash
npm install
npm run dev
```

## Tech Stack
- Next.js 15
- Redux Toolkit
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI

## Features
- 📚 Browse available courses with detailed information
- ✨ Interactive course details with expandable accordion views
- 🎨 Modern UI with dark/light mode support
- 📱 Fully responsive design for all devices
- 💫 Smooth animations and transitions
- 🔄 Real-time course enrollment status

## Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to view the application.

## Project Structure

- `src/`: Contains the main application code.
  - `components/`: Reusable React components.
  - `lib/`: Utility functions and data management.
  - `redux/`: Redux store and slices for state management.
  - `app/`: Next.js application routes and pages.
  - `ui/`: UI components built with Radix UI.

## Usage

- Users can browse available courses on the home page.
- Enroll in courses by clicking the "Enroll in Course" button or view more details using the "View Details" button.
- Access the student dashboard to see enrolled courses and track progress.

## Future Enhancements

- Implement real-time updates for course enrollment using WebSocket or Firebase.
- Add user authentication to manage user sessions.
- Enhance the dashboard with additional statistics and insights.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- [Next.js](https://nextjs.org) for the framework.
- [React](https://reactjs.org) for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org) for state management.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [Radix UI](https://www.radix-ui.com) for accessible UI components.
- Shadcn/ui (<https://ui.shadcn.com) for UI library Component
