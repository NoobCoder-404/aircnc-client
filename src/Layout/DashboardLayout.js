import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getRole } from '../api/user';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRole(user?.email).then((data) => {
      console.log(data);
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  return (
    <div className="md:flex min-h-screen relative">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="lg:w-64">
            <Sidebar role={role} />
          </div>
          <div className="flex-1 ">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
