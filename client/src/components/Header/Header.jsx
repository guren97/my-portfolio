import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { gsap } from "gsap";

const Header = () => {
  const handleClick = () => {
    gsap.to("#button", { rotation: 360, x: 0, duration: 1 });
  };

  return (
    <header className="flex justify-between z-20 relative items-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="h-14 w-14 my-10  hover:ml-2  duration-300 ease-in  ">
        <Link to="/">
          {/* <img className="" src={logo} alt="Logo" /> */}
          <div className="bg-slate-300 rounded-full h-10 w-10 z-20 relative mt-1 -my-6"></div>
          <div className="bg-slate-500 rounded-full h-12 w-10  mx-2 -mt-2"></div>
        </Link>
      </div>
      <nav className="hidden lg:flex lg:items-center border-red-600">
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link className="text-1xl font-medium hover:underline  " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-1xl font-medium hover:underline" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-1xl font-medium hover:underline"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="text-1xl font-medium hover:underline"
              to="/projects"
            >
              Recent Works
            </Link>
          </li>
          <li>
            <Link className="text-1xl font-medium hover:underline" to="#">
              Resume
            </Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              id="button"
              type="button"
              className="rounded-full bg-slate-950 p-1 px-4 transition duration-175 ease-in hover:bg-slate-800"
            >
              <Link
                className="text-1xl font-medium text-slate-100"
                to="/contact"
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
