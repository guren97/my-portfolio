import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ children }) => {
  return (
    <button className="p-2 px-2 rounded flex justify-center align-middle text-center transition duration-200 hover:bg-slate-200 dark:hover:bg-slate-800">
      <Link
        id="nav_link"
        className="text-xs font-medium text-slate-950 dark:text-slate-100 dark:font-normal tracking-wide"
      >
        {children}
      </Link>
    </button>
  );
};

export default NavLinks;
