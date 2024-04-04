import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo_dark from "../../assets/logo_dark.png";
import logo_light from "../../assets/logo_light.png";
import NavLinks from "../custom_ui/Navlinks.jsx";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [nav, setNav] = useState(false);

  const darkModeHandler = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <header className="h-12 px-4 py-8 lg:py-8 sm:py-8 sm:px-8 md:px-24 md:py-8 z-10 mx-auto relative flex justify-between items-center align-middle transition duration-200 bg-slate-50 dark:bg-neutral-800">
        {/* Mobile Navigation */}
        <div className="sm:hidden ">
          <div onClick={() => setNav(!nav)} className="cursor-pointer ">
            <AiOutlineMenu
              size={30}
              className="text-black-950 dark:text-slate-100 "
            />
          </div>
        </div>
        <Link to="/" className="h-10 w-10 ">
          <img src={isDark ? logo_light : logo_dark} alt="logo" />
        </Link>
        <nav className="hidden sm:flex sm:justify-center items-center sm:gap-0 lg:gap-8 md:gap-8">
          <ul className="flex gap-5">
            <NavLinks to="/">About</NavLinks>
            <NavLinks to="/">Services</NavLinks>
            <NavLinks to="/">Projects</NavLinks>
            <NavLinks to="/">Resume</NavLinks>
            <NavLinks to="/">Contact</NavLinks>
          </ul>
          <button
            className="sm:hidden md:inline-block lg:inline-block"
            onClick={darkModeHandler}
          >
            <div className="w-8 h-8 mr-4 flex items-center justify-center align-middle   hover:bg-yellow-300  dark:hover:bg-yellow-300 rounded-lg transition duration-200 ">
              {isDark ? (
                <motion.button
                  // whileHover={{scale: 1}}
                  whileTap={{ scale: 0.8 }}
                  transition={{}}
                  exit={{}}
                >
                  <IoSunny className="dark:text-slate-100 dark:hover:text-black text-2xl m-2" />
                </motion.button>
              ) : (
                <motion.button
                  // whileHover={{scale: 1}}
                  whileTap={{ scale: 0.8 }}
                  transition={{}}
                  exit={{}}
                >
                  <IoMoon className=" text-black  text-2xl" />
                </motion.button>
              )}
            </div>
          </button>
        </nav>

        {nav ? (
          <div
            onClick={() => setNav(!nav)}
            className="bg-black/50  fixed w-full h-screen z-10 top-0 left-0"
          ></div>
        ) : (
          ""
        )}

        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 dark:bg-neutral-800"
              : "fixed top-0 left-[-100%] w-[400px] h-screen bg-white z-10 duration-300"
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
