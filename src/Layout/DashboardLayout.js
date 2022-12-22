import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="md:flex min-h-screen relative">
      <div className="lg:w-64">
        <Sidebar />
      </div>
      <div className="flex-1 ">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
