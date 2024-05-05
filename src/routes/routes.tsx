import InstructionsPage from "../pages/InstructionsPage";
import Root from "./Root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/instructions",
        element: <InstructionsPage />,
      },
    ],
  },
]);
