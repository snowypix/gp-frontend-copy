import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { jwtDecode } from 'jwt-decode';
import { useCookies } from 'react-cookie';

const Header2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cookies] = useCookies(['token']);
  console.log(cookies)
  if (!cookies.token) {
    // If not, redirect to /login
    return <Navigate to="/login" />;
  }
  const decodedToken = jwtDecode(cookies.token);
  // Function to handle opening the sidebar
  const toggleSidebar = (e) => {
    e.stopPropagation(); // Prevents click from immediately closing the sidebar
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Effect to add event listener to close the sidebar when clicking outside of it
  useEffect(() => {
    const closeSidebar = (event) => {
      if (event.target.closest('.sidebar') === null) {
        setIsSidebarOpen(false);
      }
    };

    // Add when the sidebar is open and remove when it is closed
    if (isSidebarOpen) {
      window.addEventListener('click', closeSidebar);
    }

    // Cleanup the event listener
    return () => {
      window.removeEventListener('click', closeSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <header className="bg-black text-white w-full flex justify-between items-center py-2 px-4 md:px-8 lg:px-16 relative">
      <Link to='/' className="text-2xl lg:text-3xl font-bold text-white">Forum Name</Link>
      <div className="flex items-center gap-3 lg:gap-5">
        <img className="w-8 h-8 lg:w-15 lg:h-10" src="/frame-6@2x.png" alt="Notifications" />
        <Link to={`/profile/${decodedToken.id}`}>
          <img
            className="w-13 h-10"
            alt=""
            src="/frame-5@2x.png"
          />
        </Link>
        <img className="w-8 h-8 lg:w-15 lg:h-10 cursor-pointer z-20" src="/line-1@2x.png" alt="Menu" onClick={toggleSidebar} />
        {isSidebarOpen && <div className="sidebar"><SideBar /></div>}
      </div>

    </header>
  );
};

export default Header2;
