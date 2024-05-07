import InstructionsPage from "../pages/InstructionsPage";
import LessonsPage from "../pages/LessonsPage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Root from "./Root";
import SignupPage from "../pages/SignupPage";
import TaskPage from "../pages/TaskPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LessonsPage />,
      },
      {
        path: "/instructions",
        element: <InstructionsPage />,
      },
      {
        path: "/lessons/:lessonId",
        element: <TaskPage />,
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute unauthorizedOnly={true}>
            <SignupPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute unauthorizedOnly={true}>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
