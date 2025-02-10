# Course Management Application

This is a Course Management Application built with Next.js, React, and Redux. The application allows users to view available courses, enroll in them, and track their progress. It also features a student dashboard that displays the courses a user is enrolled in, along with their progress.

## Features

- **Course Listing**: Users can view a list of available courses with details such as name, instructor, duration, schedule, and enrollment status.
- **Enrollment Management**: Users can enroll in or unenroll from courses, with real-time updates reflecting their enrollment status.
- **Student Dashboard**: A dedicated dashboard for students to view their enrolled courses, including progress tracking.
- **Search Functionality**: Users can search for courses or instructors using a search bar.
- **Responsive Design**: The application is designed to be responsive and works well on various screen sizes.

## Technologies Used

- **Frontend**: 
  - Next.js for server-side rendering and routing
  - React for building user interfaces
  - Redux Toolkit for state management
  - Tailwind CSS for styling
  - Radix UI for accessible UI components

- **Backend**: 
  - Firebase (or a custom Node.js/Express server) for real-time data management and WebSocket support (if implemented).

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd course-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/`: Contains the main application code.
  - `components/`: Reusable React components.
  - `lib/`: Utility functions and data management.
  - `redux/`: Redux store and slices for state management.
  - `app/`: Next.js application routes and pages.
  - `ui/`: UI components built with Radix UI.

## Usage

- Users can browse available courses on the home page.
- Enroll in courses by clicking the "Quick Enroll" button or view more details using the "View Details" button.
- Access the student dashboard to see enrolled courses and track progress.

## Future Enhancements

- Implement real-time likes for courses using WebSocket or Firebase.
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
