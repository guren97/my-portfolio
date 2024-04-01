import logo_dark from "../../assets/logo_dark.png";
import logo_light from "../../assets/logo_light.png";
import { IoMenu, IoSunny, IoMoon } from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar.jsx";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ children }) => {
  return (
    <button className="p-2 px-2 rounded-lg flex justify-center align-middle text-center transition duration-200 hover:bg-slate-200 dark:hover:bg-slate-800">
      <Link
        id="nav_link"
        className="text-xs font-medium text-slate-950 dark:text-slate-100 dark:font-normal tracking-wide"
      >
        {children}
      </Link>
    </button>
  );
};

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const darkModeHandler = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <header className="h-12 w-full  px-24 sm:py-8 relative flex justify-between items-center align-middle transition duration-200 dark:bg-black border-b border-slate-600 shadow-sm">
        <Link to="/" className="h-10 w-10 shadow-lg">
          {isDark ? (
            <img src={logo_light} alt="logo" />
          ) : (
            <img src={logo_dark} alt="logo" />
          )}
        </Link>

        <nav className="hidden sm:flex sm:justify-center items-center sm:gap-0 lg:gap-8 md:gap-8">
          <ul className="flex gap-5">
            <NavLinks to="#">About</NavLinks>
            <NavLinks to="#">Services</NavLinks>
            <NavLinks to="#">Projects</NavLinks>
            <NavLinks to="#">Resume</NavLinks>
            <NavLinks to="#">Contact</NavLinks>
          </ul>
          <button
            className="sm:hidden md:inline-block lg:inline-block"
            onClick={darkModeHandler}
          >
            {isDark ? (
              <div className="w-8 h-8 mr-4 flex items-center justify-center align-middle hover:bg-slate-700 rounded-lg transition duration-200 ">
                <IoSunny className="dark:text-slate-100 text-2xl" />
              </div>
            ) : (
              <div className="w-8 h-8 mr-4 flex items-center justify-center align-middle hover:bg-slate-300 rounded-lg transition duration-200 ">
                <IoMoon className="dark:text-slate-50 text-2xl" />
              </div>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
