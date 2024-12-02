import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Sinara
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Links */}
        <div
          className={`absolute md:relative top-16 left-0 right-0 bg-black md:bg-transparent md:top-0 md:flex md:items-center md:space-x-8 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            to="/courses"
            className="block md:inline-block text-white/90 hover:text-white transition-colors py-2 px-4"
          >
            Courses
          </Link>
          <Link
            to="/age-groups"
            className="block md:inline-block text-white/90 hover:text-white transition-colors py-2 px-4"
          >
            Age Groups
          </Link>
          <Link
            to="/parents"
            className="block md:inline-block text-white/90 hover:text-white transition-colors py-2 px-4"
          >
            For Parents
          </Link>
          <Link
            to="/question"
            className="block md:inline-block text-white/90 hover:text-white transition-colors py-2 px-4"
          >
            FAQ
          </Link>
          <Link to="/contact"
            className="block md:inline-block text-white/90 hover:text-white transition-colors py-2 px-4"
          >
            Contact Us
          </Link>
          {/* <Button className="block md:inline-block bg-mint hover:bg-mint/90 text-forest font-medium py-2 px-4">
            Get Started
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
