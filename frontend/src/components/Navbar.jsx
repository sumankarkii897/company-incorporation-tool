import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "New Company" },
    { path: "/shareholders", label: "Shareholders" },
    { path: "/admin", label: "Admin" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-xl hover:text-blue-200 transition"
          >
          
            <span>Company Logo</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition duration-200 font-medium ${
                  isActive(link.path)
                    ? "bg-blue-500 text-white"
                    : "text-blue-100 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden flex flex-col space-y-1 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-1 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md transition duration-200 font-medium ${
                  isActive(link.path)
                    ? "bg-blue-500 text-white"
                    : "text-blue-100 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
