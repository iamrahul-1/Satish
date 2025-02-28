// src/components/navbar/Navbar.jsx

// Import necessary hooks and components from React and other libraries
import { useState, useEffect } from "react";
import { BiCamera, BiCameraOff, BiUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logomain.png";
import { FaBars, FaTimes } from "react-icons/fa";

// Define the Navbar functional component
const Navbar = () => {
  // Get the current location from the router
  const location = useLocation();
  // State to manage the open/closed state of the navbar and dropdown
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle dropdown click events
  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Effect to close the navbar on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to close the dropdown when clicking outside of it
  useEffect(() => {
    const closeDropdown = (e) => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [isDropdownOpen]);

  // Render the navbar
  return (
    <nav className="fixed left-0 top-0 w-full bg-opacity-50 backdrop-blur-lg shadow-lg z-30 h-16">
      <div className="flex justify-between h-full items-center px-4 md:px-8">
        {/* Mobile dropdown button */}
        <div className="md:hidden relative">
          <button
            onClick={handleDropdownClick}
            className="text-gray-100 hover:text-gray-600"
          >
            <BiUser className="text-2xl" />
          </button>
        </div>

        {/* Logo section */}
        <img
          src={logo}
          className="md:ml-0 w-auto md:h-16 h-12 p-2 mx-auto"
          alt="logo"
        />

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-gray-600"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        {/* Desktop navigation links */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 text-lg ${
              location.pathname === "/" ? "active-link" : ""
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white transition-transform duration-300 ${
                location.pathname === "/" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/work"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 text-lg ${
              location.pathname === "/work" ? "active-link" : ""
            }`}
          >
            Work
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white transition-transform duration-300 ${
                location.pathname === "/work" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/about"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 text-lg ${
              location.pathname === "/about" ? "active-link" : ""
            }`}
          >
            About
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white transition-transform duration-300 ${
                location.pathname === "/about" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/contact"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 text-lg ${
              location.pathname === "/contact" ? "active-link" : ""
            }`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-white transition-transform duration-300 ${
                location.pathname === "/contact" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
        </div>
        {/* Dropdown button for desktop */}
        <div className="hidden md:block relative">
          <button
            onClick={handleDropdownClick}
            className="text-gray-100 hover:text-gray-600"
          >
            <BiUser className="text-2xl" />
          </button>

          {/* Dropdown menu for desktop */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="py-1" role="menu">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-zinc-700"
                  role="menuitem"
                >
                  Chat
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-zinc-700"
                  role="menuitem"
                >
                  Images
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-zinc-700"
                  role="menuitem"
                >
                  Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-zinc-700"
                  role="menuitem"
                >
                  Sign out
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile navigation links */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="flex flex-col items-center space-y-4 px-2 pt-4 pb-3">
            <Link
              to="/"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                location.pathname === "/" ? "md:border-b-2 border-white" : ""
              }`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                location.pathname === "/work"
                  ? "md:border-b-2 border-white"
                  : ""
              }`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                location.pathname === "/about"
                  ? "md:border-b-2 border-white"
                  : ""
              }`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                location.pathname === "/contact"
                  ? "md:border-b-2 border-white"
                  : ""
              }`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Export the Navbar component for use in other parts of the application
export default Navbar;
