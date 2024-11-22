import { useState, useEffect } from "react";
import { BiCamera, BiCameraOff, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/Asset-1.ico";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  return (
    <nav className="fixed left-0 top-0 w-full bg-zinc-900 border border-zinc-800 px-2 py-4 shadow-lg z-30">
      <div className="flex justify-between items-center px-4 md:px-8">
        <img src={logo} className="hidden md:block w-auto h-9" alt="logo" />
        <div className="md:hidden relative">
          <button
            onClick={handleDropdownClick}
            className="text-gray-100 hover:text-gray-600"
          >
            <BiUser className="text-2xl" />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5"
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
                  to="/"
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
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 ${
              activeLink === "/" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeLink === "/" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/work"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 ${
              activeLink === "/work" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/work")}
          >
            Work
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeLink === "/work" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/about"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 ${
              activeLink === "/about" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/about")}
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeLink === "/about" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>

          <Link
            to="/contact"
            className={`text-gray-100 hover:text-gray-400 relative pb-1 ${
              activeLink === "/contact" ? "active-link" : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                activeLink === "/contact" ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </Link>
        </div>
        <div className="hidden md:block relative">
          <button
            onClick={handleDropdownClick}
            className="text-gray-100 hover:text-gray-600"
          >
            <BiUser className="text-2xl" />
          </button>

          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5"
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
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col items-center space-y-4 px-2 pt-2 pb-3">
            <Link
              to="/"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                activeLink === "/" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => {
                handleLinkClick("/");
                setIsOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                activeLink === "/work" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => {
                handleLinkClick("/work");
                setIsOpen(false);
              }}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                activeLink === "/about" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => {
                handleLinkClick("/about");
                setIsOpen(false);
              }}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-gray-100 hover:text-gray-400 w-full text-center py-2 ${
                activeLink === "/contact" ? "border-b-2 border-white" : ""
              }`}
              onClick={() => {
                handleLinkClick("/contact");
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

export default Navbar;
