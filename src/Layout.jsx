/** @format */

import React from 'react';
import Navbar from './conponent/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
