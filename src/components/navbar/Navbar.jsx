import { useState, useEffect } from "react";
import { BiCamera, BiCameraOff } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
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

  return (
    <nav className="fixed left-0 top-0 w-full backdrop-blur-sm bg-white/30 border border-white/20 rounded-lg px-8 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <img src={logo} className="w-12 h-12" alt="logo" />
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`text-gray-800 hover:text-gray-600 ${
              activeLink === "/" ? "text-white" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`text-gray-800 hover:text-gray-600 ${
              activeLink === "/services" ? "text-white" : ""
            }`}
            onClick={() => handleLinkClick("/services")}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-gray-800 hover:text-gray-600 ${
              activeLink === "/about" ? "text-white" : ""
            }`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-gray-800 hover:text-gray-600 ${
              activeLink === "/contact" ? "text-white" : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-gray-600 flex items-center justify-center"
          >
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "-rotate-12" : "rotate-12"
              }`}
            >
              {isOpen ? (
                <BiCameraOff className="text-2xl" />
              ) : (
                <BiCamera className="text-2xl" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col space-y-2 mt-2 ${
          isOpen ? "slide-in" : "slide-out"
        }`}
      >
        {isOpen && (
          <>
            <Link
              href="/"
              className={`text-gray-800 hover:text-gray-600 ${
                activeLink === "/" ? "text-white" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-gray-800 hover:text-gray-600 ${
                activeLink === "/services" ? "text-white" : ""
              }`}
              onClick={() => handleLinkClick("/services")}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-gray-800 hover:text-gray-600 ${
                activeLink === "/about" ? "text-white" : ""
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-gray-800 hover:text-gray-600 ${
                activeLink === "/contact" ? "text-white" : ""
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
