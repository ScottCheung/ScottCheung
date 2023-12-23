import React from 'react';
import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Certificate from './pages/Certificate.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Material from './pages/Material.jsx';
import Gallery from './pages/Gallery.jsx';
import AI from './pages/AI.jsx';
import Contact from './pages/ContactPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Home',
    element: <Home />,
  },
  {
    path: '/picture',
    element: <Home />,
  },
  {
    path: '/life',
    element: <Home />,
  },
  {
    path: '*',
    element: <Errorpage />,
  },
  {
    path: '/Bacholor-FunctionalMaterial',
    element: <Material />,
  },
  {
    path: '/Master-ArtificalInteliigence',
    element: <AI />,
  },
  {
    path: '/certificates',
    element: <Certificate />,
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