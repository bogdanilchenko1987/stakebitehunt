import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-evenly items-center">
          <div className="mb-4 sm:mb-0 flex flex-col items-center space-x-2">
            {" "}
            <Link
              to="/"
              className="text-xl font-bold flex items-center space-x-2 mb-2"
            >
              <img
                src={logo}
                alt="Vampire Hunters Logo"
                className="w-[80px] h-[80px]"
              />
            </Link>
            <span className="font-uncial hover:text-red-600">
              Vampire Hunters
            </span>
          </div>
          <div className="mb-4 sm:mb-0">
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-red-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-red-600 transition">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4 sm:mb-0 text-center">
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-red-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-red-600 transition">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-red-600 transition">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-4 text-red-600">
          <p>© 2025 stakebitehunt.site. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
