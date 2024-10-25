import { useState, useEffect } from "react";
import { BiCamera, BiCameraOff } from "react-icons/bi";
import { Link } from "react-router-dom";
// import logo from "./../../assets/logo.png";
import logo from "../../assets/Asset-1.ico";

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
    <nav className="fixed left-0 top-0 w-full backdrop-blur-sm bg-black/30 border border-black/20 rounded-lg px-2 py-4 shadow-lg">
      <div className="flex justify-between items-center pr-8">
        <img src={logo} className="w-auto h-9 ml-8" alt="logo" />
        <div className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`text-gray-100 hover:text-gray-600 ${
              activeLink === "/" ? "text-gray-500" : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={`text-gray-100 hover:text-gray-600 ${
              activeLink === "/services" ? "text-gray-500" : ""
            }`}
            onClick={() => handleLinkClick("/services")}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-gray-100 hover:text-gray-600 ${
              activeLink === "/about" ? "text-gray-500" : ""
            }`}
            onClick={() => handleLinkClick("/about")}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-gray-100 hover:text-gray-600 ${
              activeLink === "/contact" ? "text-gray-500" : ""
            }`}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-gray-600 flex items-center justify-center"
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
        className={`md:hidden flex flex-col space-y-2 mt-2 pl-8 ${
          isOpen ? "slide-in" : "slide-out"
        }`}
      >
        {isOpen && (
          <>
            <Link
              href="/"
              className={`text-gray-100 hover:text-gray-600 ${
                activeLink === "/" ? "text-gray-500" : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`text-gray-100 hover:text-gray-600 ${
                activeLink === "/services" ? "text-gray-500" : ""
              }`}
              onClick={() => handleLinkClick("/services")}
            >
              Work
            </Link>
            <Link
              href="/about"
              className={`text-gray-100 hover:text-gray-600 ${
                activeLink === "/about" ? "text-gray-500" : ""
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`text-gray-100 hover:text-gray-600 ${
                activeLink === "/contact" ? "text-gray-500" : ""
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
