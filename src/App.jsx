import React from 'react';
import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Certificate from './pages/Certificate.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Gallery from './pages/Project.jsx';
import SingleDegree from './pages/SingleDegree.jsx';
import Contact from './pages/ContactPage.jsx';
import Degrees from './pages/Degree.jsx';
import Info from './pages/Info.jsx';
import Scholarship from './pages/Scholarship.jsx';
import Life from './pages/life.jsx';
import SingleWhyme from './pages/SingleWhyme.jsx';
import SingleWork from './pages/SingleWork.jsx';
import Project from './pages/Project.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/info',
    element: <Info />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  // {
  //   path: '/project',
  //   element: <Project />,
  // },
  {
    path: '/life',
    element: <Life />,
  },
  {
    path: '*',
    element: <Errorpage />,
  },
  {
    path: '/major/:major',
    element: <SingleDegree />,
  },
  {
    path: '/whyme/:whyme',
    element: <SingleWhyme />,
  },
  {
    path: '/work/:work',
    element: <SingleWork />,
  },
  {
    path: '/Degrees',
    element: <Degrees />,
  },
  {
    path: '/certificates',
    element: <Certificate />,
  },
  {
    path: '/scholarships',
    element: <Scholarship />,
  },
  {
    path: '/Gallery',
    element: <Gallery />,
  },
  {
    path: '/ContactMe',
    element: <Contact />,
  }
]);

function Router () {
    return (

        <RouterProvider router={router} />

    );
    }

export default Router;