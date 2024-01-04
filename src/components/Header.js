import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = (e) => {
    e.stopPropagation();
    console.log('Toggling sidebar, current state:', !isSidebarOpen);
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
    console.log('Sidebar should be:', isSidebarOpen ? 'open' : 'closed');
    // Cleanup the event listener
    return () => {
      window.removeEventListener('click', closeSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <header>
      <div className="bg-black text-white w-full flex justify-between items-center py-2 px-4 md:px-8 lg:px-16 relative">
        <Link to='/' className="text-white">Forum Name</Link>
        <div className="flex items-center gap-4">
          <Link to="/register" className="text-white text-base no-underline">Sign up</Link>
          <div className="bg-salmon flex items-center justify-center py-2 px-4 text-black">
            <Link to="/login" className="no-underline text-base">
              Login
            </Link>
          </div>
          {/* <Link to={`/profile/${decodedToken.id}`}>
            <img
              className="w-24 h-auto"
              alt=""
              src="/frame-5@2x.png"
            />
          </Link> */}
          <img
            className="w-12 h-auto cursor-pointer"
            alt="Menu icon"
            src="/line-1@2x.png"
            onClick={toggleSidebar}
          />
        </div>
        {isSidebarOpen && <SideBar />}
      </div>
    </header>
  )
};

export default Header;
