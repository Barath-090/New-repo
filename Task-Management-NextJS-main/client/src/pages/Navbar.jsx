import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [showNavItems, setShowNavItems] = useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  return (
<nav className="bg-gray-800 text-white py-4 font-bold fixed w-full top-0 z-10 shadow-md">
  <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
    <div>
      <Link to="/" className="flex items-center space-x-3 absolute left-0 ml-9 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5m14-3V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4m16 0H3m16 0a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-2a2 2 0 0 0-2 2v1" />
        </svg>
        <div className="flex">
  <span className="font-bold text-3xl mr-9">T a s k m a n</span>
</div>
      </Link>
    </div>
    <div className="hidden md:block">
      <div className="flex gap-5">
        <Link to="/" className="text-white text-2xl hover:text-blue-600 transition duration-300 mr-40">All Tasks</Link>
        <Link to="/completed" className="text-white text-2xl hover:text-blue-600 transition duration-300 mr-40">Completed</Link>
        <Link to="/incomplete" className="text-white text-2xl hover:text-blue-600 transition duration-300">Incomplete</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard" className="text-white text-2xl hover:text-blue-600 transition duration-300 ml-20">Dashboard</Link>
      </div>
    </div>
    <div className="flex items-center gap-4 ">
      <div className="flex absolute right-70">
      <Link to="/profile" className="text-white hover:text-blue-600 transition duration-300 ">
        {user?.first_name} {user?.last_name}
      </Link>
      </div>
      <span
        onClick={handleLogout}
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer transition duration-300 flex items-center space-x-3 absolute right-0 mr-9 top-1/2 transform -translate-y-1/2"
      >
        Logout
      </span>
    </div>
    <div className="md:hidden">
      {showNavItems ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowNavItems(!showNavItems)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowNavItems(!showNavItems)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      )}
    </div>
  </div>
  {showNavItems && (
    <div className="md:hidden absolute top-16 right-0 bg-gray-800 text-white w-full">
      <ul className="p-4">

        <li>
          <Link to="/" className="text-white hover:text-gray-200 transition duration-300">All Tasks</Link>
        </li>
        <li>
          <Link to="/completed" className="text-white hover:text-gray-200 transition duration-300">Completed</Link>
        </li>
        <li>
          <Link to="/incomplete" className="text-white hover:text-gray-200 transition duration-300">Incomplete</Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white hover:text-gray-200 transition duration-300">Dashboard</Link>
        </li>
       
      </ul>
     
    </div>
  )}
</nav>

  
  );
};

export default Navbar;
