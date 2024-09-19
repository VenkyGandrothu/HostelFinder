import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dropdown() {
  const navigate = useNavigate();
  
  const navigateOwner = () => {
    navigate("/Dashboard");
  };

  const navigateUser = () => {
    navigate("/FirstPage");
  };

  const navigateLogin = () => {
    navigate("/LoginPage");
  };

  return (
    <div className="relative">
      <button className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <img src="/path/to/profile-icon.png" alt="Profile" className="w-6 h-6 inline mr-2" />
        Profile
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
        <ul className="py-1">
          <li
            onClick={navigateUser}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            User
          </li>
          <li
            onClick={navigateOwner}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Owner
          </li>
          <li
            onClick={navigateLogin}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
