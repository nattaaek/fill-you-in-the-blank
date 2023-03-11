import { createBrowserRouter } from "react-router-dom";
import Header from "../common/components/Header/Header";
import AboutPage from "../pages/About/About";
import Landing from "../pages/Landing/Landing";
import ProjectPage from "../pages/Project/Project";
import VolunteerPage from "../pages/Volunteer/Volunteer";

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
      ]
    },
]);

export default router;