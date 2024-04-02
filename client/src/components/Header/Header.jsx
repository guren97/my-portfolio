import logo_dark from "../../assets/logo_dark.png";
import logo_light from "../../assets/logo_light.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";
import NavLinks from "../custom_ui/Navlinks.jsx";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const [nav, setNav] = useState(false);

  const darkModeHandler = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <header className="h-12 px-4 py-8 lg:py-8 sm:py-8 sm:px-8 md:px-24 md:py-8   mx-auto relative flex justify-between items-center align-middle transition duration-200 dark:bg-slate-900">
        {/* Mobile Navigation */}
        <div className="sm:hidden ">
          <div onClick={() => setNav(!nav)} className="cursor-pointer ">
            <AiOutlineMenu
              size={30}
              className="text-slate-950 dark:text-slate-100 "
            />
          </div>
        </div>
        <Link to="/" className="h-10 w-10 ">
          <img src={isDark ? logo_light : logo_dark} alt="logo" />
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
            <div className="w-8 h-8 mr-4 flex items-center justify-center align-middle hover:bg-slate-300  dark:hover:bg-slate-600 rounded-lg transition duration-200 ">
              {isDark ? (
                <IoSunny className="dark:text-yellow-500 text-2xl" />
              ) : (
                <IoMoon className=" text-gray-800 text-2xl" />
              )}
            </div>
          </button>
        </nav>

        {nav ? (
          <div
            onClick={() => setNav(!nav)}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 dark:bg-slate-950"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer text-slate-950 dark:text-slate-100 "
          />
        </div>
      </header>
    </>
  );
};

export default Header;
