import App from "../App";
import InstructionsPage from "../pages/InstructionsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/instructions",
        element: <InstructionsPage />,
      },
    ],
  },
]);
