/** @format */

import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './help/ContextManager';

// Keep each route out of the initial bundle until it is requested.
const Home = React.lazy(() => import('./pages/Home.jsx'));
const Certificate = React.lazy(() => import('./pages/Certificate.jsx'));
const Errorpage = React.lazy(() => import('./pages/Errorpage.jsx'));
const SingleDegree = React.lazy(() => import('./pages/SingleDegree.jsx'));
const Contact = React.lazy(() => import('./pages/ContactPage.jsx'));
const Degrees = React.lazy(() => import('./pages/Degree.jsx'));
const Info = React.lazy(() => import('./pages/Info.jsx'));
const Scholarship = React.lazy(() => import('./pages/Scholarship.jsx'));
const Life = React.lazy(() => import('./pages/life.jsx'));
const SingleWhyme = React.lazy(() => import('./pages/SingleWhyme.jsx'));
const SingleWork = React.lazy(() => import('./pages/SingleWork.jsx'));
const Gallery = React.lazy(() => import('./pages/Gallery.jsx'));
const Resume = React.lazy(() => import('./pages/Resume/Resume.jsx'));
const AutoText = React.lazy(() => import('./pages/AutoText/AutoText.jsx'));
const Navbar = React.lazy(() => import('./conponent/Navbar/Navbar.jsx'));
const Resumecheck = React.lazy(() => import('./pages/Resume/Resumecheck.jsx'));
const Project = React.lazy(() => import('./pages/project.jsx'));
const TikTok = React.lazy(() => import('./pages/Empty.jsx'));
const Gobelldesign = React.lazy(() =>
  import('./pages/projects/gobelldesign.jsx'),
);
const Work = React.lazy(() => import('./pages/work.jsx'));
const Igrapher = React.lazy(() => import('./pages/projects/igrapher.jsx'));
const Design = React.lazy(() => import('./pages/projects/design.jsx'));
const Story = React.lazy(() => import('./pages/story/story.jsx'));
const PP = React.lazy(() => import('./pages/pp.jsx'));
const Music = React.lazy(() => import('./pages/Music.jsx'));

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
    path: '/cvcheck/:version',
    element: <Resumecheck />,
  },
  {
    path: '/project',
    element: <Project />,
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
    path: '/design',
    element: <Design />,
  },
  {
    path: '/igrapher',
    element: <Igrapher />,
  },
  {
    path: '/story',
    element: <Story nav={true} />,
  },
  {
    path: '/pp',
    element: <PP />,
  },
  {
    path: '/music',
    element: <Music />,
  },
]);

function Router() {
  return (
    <AppContextProvider>
      <div>
        {/* <Navbar /> */}
        <React.Suspense fallback={null}>
          <RouterProvider router={router} />
        </React.Suspense>
      </div>
    </AppContextProvider>
  );
}

export default Router;
