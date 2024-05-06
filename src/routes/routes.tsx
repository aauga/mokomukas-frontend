import InstructionsPage from "../pages/InstructionsPage";
import LearningPage from "../pages/LearningPage";
import LessonsPage from "../pages/LessonsPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Root from "./Root";
import SignupPage from "../pages/SignupPage";
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
        path: "/lessons/1",
        element: <LearningPage />,
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute unauthorizedOnly={true}>
            <SignupPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
