import InstructionsPage from "../pages/InstructionsPage";
import LearningPage from "../pages/LearningPage";
import LessonsPage from "../pages/LessonsPage";
import Root from "./Root";
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
    ],
  },
]);
