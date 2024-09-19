import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import adminimg from '../../images/Admin.png'; // Adjust the path as needed

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const navigateOwner = () => {
    navigate("/Dashboard");
  };

  const navigateUser = () => {
    navigate("/FirstPage");
  };

  const navigateLogin = () => {
    navigate("/LoginPage");
  };

  const handleDropdownAction = (action) => {
    setIsDropdownVisible(false);
    switch (action) {
      case 'user':
        navigateUser();
        break;
      case 'owner':
        navigateOwner();
        break;
      case 'logout':
        navigateLogin(); // Assuming logout takes you to the login page
        break;
      default:
        break;
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="brand-name">Hostel Finder</h1>
        </div>
        <div className="nav-middle">
          <input
            type="text"
            placeholder="Enter your location or hostel name"
            className={`search-bar ${isMenuVisible ? 'hidden' : ''}`}
            aria-label="Search"
          />
          <button
            className={`search-button ${isMenuVisible ? 'hidden' : ''}`}
            aria-label="Search Button"
          >
            Search
          </button>
        </div>
        <div className="nav-right">
          <button
            className="menu-toggle"
            onClick={() => setIsMenuVisible((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span className="menu-icon">☰</span>
          </button>
          <div
            ref={menuRef}
            className={`desktop-menu ${isMenuVisible ? 'hidden' : 'flex'}`}
          >
            <ul className="nav-items">
              <li>
                <NavLink to="/FirstPage" className="nav-item">Home</NavLink>
              </li>
              <li>
                <NavLink to="/LoginPage" className="nav-item">Login</NavLink>
              </li>
              <li>
                <NavLink to="/SignupPage" className="nav-item">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/Aboutus" className="nav-item">About Us</NavLink>
              </li>
              <li>
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="profile-link"
                    onClick={toggleDropdown}
                    aria-label="Profile Dropdown"
                  >
                    <img
                      src={adminimg}
                      alt="Profile"
                      className="profile-icon"
                    />
                  </button>
                  {isDropdownVisible && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <ul className="py-1">
                        <li
                          onClick={() => handleDropdownAction('user')}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          User
                        </li>
                        <li
                          onClick={() => handleDropdownAction('owner')}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Owner
                        </li>
                        <li
                          onClick={() => handleDropdownAction('logout')}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Logout
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuVisible && (
        <div ref={menuRef} className="mobile-menu">
          <ul className="mobile-menu-items">
            <li>
              <NavLink
                to="/FirstPage"
                className="mobile-menu-item"
                onClick={() => setIsMenuVisible(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/LoginPage"
                className="mobile-menu-item"
                onClick={() => setIsMenuVisible(false)}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SignupPage"
                className="mobile-menu-item"
                onClick={() => setIsMenuVisible(false)}
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Aboutus"
                className="mobile-menu-item"
                onClick={() => setIsMenuVisible(false)}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
