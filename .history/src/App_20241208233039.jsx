/** @format */

import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Certificate from './pages/Certificate.jsx';
import Errorpage from './pages/Errorpage.jsx';
import SingleDegree from './pages/SingleDegree.jsx';
import Contact from './pages/ContactPage.jsx';
import Degrees from './pages/Degree.jsx';
import Info from './pages/Info.jsx';
import Scholarship from './pages/Scholarship.jsx';
import Life from './pages/life.jsx';
import SingleWhyme from './pages/SingleWhyme.jsx';
import SingleWork from './pages/SingleWork.jsx';
import Gallery from './pages/Gallery.jsx';
import { AppContextProvider } from './help/ContextManager';
import Resume from './pages/Resume/Resume.jsx';
import AutoText from './pages/AutoText/AutoText.jsx';
import Navbar from './conponent/NavBar/Navbar.jsx';
import Resumecheck from './pages/Resume/Resumecheck.jsx';
import Project from './pages/project.jsx';
import Tool from './pages/tool/Tools.jsx';
import Coverletter from './pages/CoverLetter/coverletter.tsx';
import TikTok from './pages/Empty.jsx';
import Gobelldesign from './pages/projects/gobelldesign.jsx';
import Work from './pages/work.jsx';
import Igrapher from './pages/projects/igrapher.jsx';

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
  {
    path: '/life',
    element: <Life />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/gallery/:gallery',
    element: <Gallery />,
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
    path: '/work',
    element: <Work />,
  },
  {
    path: '/work/:work',
    element: <SingleWork />,
  },
  {
    path: '/degree',
    element: <Degrees />,
  },
  {
    path: '/award',
    element: <Certificate />,
  },
  {
    path: '/scholarship',
    element: <Scholarship />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
  {
    path: '/coverletter',
    element: <Coverletter />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
  {
    path: '/resume/:resume',
    element: <Resume print={true} />,
  },
  { path: '/at', element: <AutoText /> },
  {
    path: '/test',
    element: <Navbar />,
  },
  {
    path: '/resumecheck/:version',
    element: <Resumecheck />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/tool',
    element: <Tool />,
  },

  {
    path: '/TikTok',
    element: <TikTok />,
  },
  {
    path: '/gobelldesign',
    element: <Gobelldesign />,
  },
  {
    path: '/igrapher',
    element: <Igrapher />,
  },
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
