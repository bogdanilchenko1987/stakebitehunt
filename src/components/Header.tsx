import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-black text-red-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold flex items-center space-x-2">
          <img src={logo} alt="Vampire Hunters Logo" className="w-16 h-16" />
          <span className="font-uncial">Vampire Hunters</span>
        </Link>

        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link
            to="/"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            About Game
          </Link>
          <Link
            to="/#heroes"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Heroes
          </Link>
          <Link
            to="/#gameplay"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            GamePlay
          </Link>
          <Link
            to="/#whatsnew"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            What's new
          </Link>
          <Link
            to="/contacts"
            className="text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Contacts
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black text-white py-4 px-6 space-y-4">
          <Link
            to="/"
            className="block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            About Game
          </Link>
          <Link
            to="/#heroes"
            className=" block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Heroes
          </Link>
          <Link
            to="/#gameplay"
            className="block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            GamePlay
          </Link>
          <Link
            to="/#whatsnew"
            className="block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            What's new
          </Link>
          <Link
            to="/contacts"
            className="block text-red-600 hover:opacity-80 transition-opacity duration-300"
            onClick={closeMenu}
          >
            Contacts
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
