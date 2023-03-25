import { createBrowserRouter } from "react-router-dom";
import Header from "../common/components/Header/Header";
import AboutPage from "../pages/About/About";
import Landing from "../pages/Landing/Landing";
import ProjectPage from "../pages/Project/Project";
import ProjectDetail from "../pages/Project/ProjectDetail";
import UserProfile from "../pages/UserProfile/UserProfile";
import VolunteerPage from "../pages/Volunteer/Volunteer";
import YourCause from "../pages/YourCause/YourCause";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "",
          element: <Landing />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "project",
          element: <ProjectPage />,
        },
        {
          path: "volunteer",
          element: <VolunteerPage />,
        },
        {
          path: "userProfile",
          element: <UserProfile />
        },
        {
          path: "yourCause",
          element: <YourCause />
        },
        {
          path: "/projects/:id",
          element: <ProjectDetail />
        }

      ]
    },
]);

export default router;