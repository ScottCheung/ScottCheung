/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx'; // 导入 Layout 组件
import Info from './pages/Info.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Home from './pages/Home.jsx';
import Certificate from './pages/Certificate.jsx';
import SingleDegree from './pages/SingleDegree.jsx';
import Contact from './pages/ContactPage.jsx';
import Degrees from './pages/Degree.jsx';
import Scholarship from './pages/Scholarship.jsx';
import Life from './pages/life.jsx';
import SingleWhyme from './pages/SingleWhyme.jsx';
import SingleWork from './pages/SingleWork.jsx';
import Gallery from './pages/Gallery.jsx';
import Resume from './pages/Resume/Resume.jsx';
import AutoText from './pages/AutoText/AutoText.jsx';
import Navbar from './conponent/NavBar/Navbar.jsx';
import Resumecheck from './pages/Resume/Resumecheck.jsx';
import Project from './pages/project.jsx';
import TikTok from './pages/Empty.jsx';
import Gobelldesign from './pages/projects/gobelldesign.jsx';
import Work from './pages/work.jsx';
import Igrapher from './pages/projects/igrapher.jsx';
import Design from './pages/projects/design.jsx';
import Story from './pages/story/story.jsx';
import PP from './pages/pp.jsx';
import Music from './pages/Music';

// const router = createBrowserRouter();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/info', element: <Info /> },
      { path: '/home', element: <Home /> },
      { path: '/life', element: <Life /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/gallery/:gallery', element: <Gallery /> },
      { path: '*', element: <Errorpage /> },
      { path: '/major/:major', element: <SingleDegree /> },
      { path: '/whyme/:whyme', element: <SingleWhyme /> },
      { path: '/work', element: <Work /> },
      { path: '/work/:work', element: <SingleWork /> },
      { path: '/degree', element: <Degrees /> },
      { path: '/award', element: <Certificate /> },
      { path: '/scholarship', element: <Scholarship /> },
      { path: '/contact', element: <Contact /> },
      { path: '/resume', element: <Resume /> },
      { path: '/resume/:resume', element: <Resume print={true} /> },
      { path: '/at', element: <AutoText /> },
      { path: '/resumecheck/:version', element: <Resumecheck /> },
      { path: '/cvcheck/:version', element: <Resumecheck /> },
      { path: '/project', element: <Project /> },
      { path: '/tiktok', element: <TikTok /> },
      { path: '/gobelldesign', element: <Gobelldesign /> },
      { path: '/design', element: <Design /> },
      { path: '/igrapher', element: <Igrapher /> },
      { path: '/story', element: <Story nav={true} /> },
      { path: '/pp', element: <PP /> },
      { path: '/music', element: <Music /> },
    ],
  },
]);

export default router;
