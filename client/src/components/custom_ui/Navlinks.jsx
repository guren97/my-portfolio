import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavLinks = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="text-xs font-medium text-slate-950 dark:text-slate-100 dark:font-normal tracking-wide"
    >
      {children}
    </Link>
  );
};

export default NavLinks;
