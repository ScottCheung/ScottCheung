import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Certificate from "./pages/Certificate.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import SingleDegree from "./pages/SingleDegree.jsx";
import Contact from "./pages/ContactPage.jsx";
import Degrees from "./pages/Degree.jsx";
import Info from "./pages/Info.jsx";
import Scholarship from "./pages/Scholarship.jsx";
import Life from "./pages/life.jsx";
import SingleWhyme from "./pages/SingleWhyme.jsx";
import SingleWork from "./pages/SingleWork.jsx";
import Gallery from "./pages/Gallery.jsx";
import { AppContextProvider } from "./help/ContextManager";
import Resume from "./pages/Resume.jsx";
import AutoText from "./pages/AutoText/AutoText.jsx";
import Login from "./pages/AutoText/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/life",
    element: <Life />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/gallery/:gallery",
    element: <Gallery />,
  },

  {
    path: "*",
    element: <Errorpage />,
  },
  {
    path: "/major/:major",
    element: <SingleDegree />,
  },
  {
    path: "/whyme/:whyme",
    element: <SingleWhyme />,
  },
  {
    path: "/work/:work",
    element: <SingleWork />,
  },
  {
    path: "/Degrees",
    element: <Degrees />,
  },
  {
    path: "/certificates",
    element: <Certificate />,
  },
  {
    path: "/scholarships",
    element: <Scholarship />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/resume/:resume",
    element: <Resume />,
  },
  { path: "/at", element: <AutoText /> },
]);

function Router() {
  return (
    <AppContextProvider>
      <div>
        <RouterProvider router={router} />
      </div>
    </AppContextProvider>
  );
}

export default Router;
