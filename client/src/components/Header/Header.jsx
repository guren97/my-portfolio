import logo_dark from "../../assets/logo_dark.png";
import logo_light from "../../assets/logo_light.png";
import { IoMenu, IoSunny, IoMoon } from "react-icons/io5";
import gsap from "gsap";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ children }) => {
  return (
    <>
      <Link
        id="nav_link"
        className="text-xs font-medium text-slate-950 dark:text-slate-100 tracking-wide"
      >
        {children}
      </Link>
    </>
  );
};

const SideNavLinks = ({ children }) => {
  return (
    <>
      <div className="flex justify-start items-center w-full p-2 transition duration-2 hover:bg-slate-200 rounded-sm">
        <Link
          id="sidenav_link"
          className="text-xs font-medium text-slate-950 dark:text-slate-100 tracking-wide  "
        >
          {children}
        </Link>
      </div>
    </>
  );
};

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const darkModeHandler = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  const handlerShowSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      <header className="h-12 w-full px-4 sm:px-24 sm:py-8 relative flex justify-between items-center transition duration-200 dark:bg-slate-950 border-b border-slate-600  shadow-sm">
        <button id="showSideNavButton" className="lg:hidden md:hidden">
          <IoMenu className="dark:text-slate-50 text-2xl" />
        </button>

        <div>
          {isDark ? (
            <img className="h-10 w-10" src={logo_light} alt="ogo" />
          ) : (
            <img className="h-10 w-10" src={logo_dark} alt="ogo" />
          )}
        </div>

        <nav className="hidden sm:flex sm:justify-center items-center sm:gap-0 lg:gap-10 md:gap-10">
          <button onClick={handlerShowSideNav}>show side nav</button>
          <ul className="flex gap-5">
            <NavLinks to="#">About</NavLinks>

            <NavLinks to="#">Services</NavLinks>

            <NavLinks to="#">Recent Projects</NavLinks>

            <NavLinks to="#">Resume</NavLinks>

            <NavLinks to="#">Let's Talk</NavLinks>
          </ul>
          <button
            className="sm:hidden md:inline-block lg:inline-block"
            onClick={darkModeHandler}
          >
            {isDark ? (
              <div className="w-8 h-8 flex items-center justify-center align-middle hover:bg-slate-700 rounded-lg transition duration-200">
                <IoSunny className="dark:text-slate-100 text-2xl" />
              </div>
            ) : (
              <div className="w-8 h-8 flex items-center justify-center align-middle hover:bg-slate-300 rounded-lg transition duration-200">
                <IoMoon className="dark:text-slate-50 text-2xl" />
              </div>
            )}
          </button>
        </nav>
      </header>

      {isSideNavOpen ? (
        <nav id="sidenav" className="bg-red-300 w-2/12 absolute p-4 hidden">
          <ul className="flex flex-col gap-2">
            <SideNavLinks to="#">About</SideNavLinks>

            <SideNavLinks to="#">Services</SideNavLinks>

            <SideNavLinks to="#">Recent Projects</SideNavLinks>

            <SideNavLinks to="#">Resume</SideNavLinks>

            <SideNavLinks to="#">Let's Talk</SideNavLinks>
          </ul>
        </nav>
      ) : (
        <nav className="bg-red-300 w-2/12 absolute p-4">
          <ul className="flex flex-col gap-2">
            <SideNavLinks to="#">About</SideNavLinks>

            <SideNavLinks to="#">Services</SideNavLinks>

            <SideNavLinks to="#">Recent Projects</SideNavLinks>

            <SideNavLinks to="#">Resume</SideNavLinks>

            <SideNavLinks to="#">Let's Talk</SideNavLinks>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
