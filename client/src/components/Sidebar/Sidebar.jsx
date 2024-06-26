import { useState } from "react";
import SidebarItems from "./SidebarItems.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <button className="btn" onClick={() => setToggle(!isToggled)}>
        =
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <SidebarItems isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
