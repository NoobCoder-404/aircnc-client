import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="md:flex min-h-screen relative">
      <div className="lg:w-64">
        <Sidebar />
      </div>
      <div className="bg-red-500 flex-1">
        <div>content</div>
      </div>
    </div>
  );
};

export default Dashboard;
