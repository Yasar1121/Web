import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import NewFlow from "./sections/NewFlow.jsx";
import Coffee from "./sections/Coffee.jsx";
import Feedback from "./sections/Feedback.jsx";
import PostGradPlan from "./sections/PostGradPlan.jsx";
import LaunchPlan from "./sections/LaunchPlan.jsx";
import Victoria from "./sections/Victoria.jsx";
import Advait from "./sections/Advait.jsx";
import Danny from "./sections/Danny.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/add", element: <NewFlow /> },
      { path: "/coffee", element: <Coffee /> },
      { path: "/feedback", element: <Feedback /> },
      { path: "/postgrad", element: <PostGradPlan /> },
      { path: "/launchplan", element: <LaunchPlan /> },
      { path: "/victoria", element: <Victoria /> },
      { path: "/advait", element: <Advait /> },
      { path: "/danny", element: <Danny /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
