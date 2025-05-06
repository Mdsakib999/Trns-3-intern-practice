import logo from "/assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative px-4 py-4 md:py-2">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="w-36 md:w-1/6">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block">
          <div className="flex items-center gap-6 lg:gap-10 rounded-full border border-gray-400 py-2 pl-4 pr-6 font-semibold">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-600 text-white font-semibold py-2 px-4 rounded-3xl"
                    : "hover:bg-orange-500 hover:text-white py-2 px-4 rounded-3xl"
                }
                end={item.path === "."}
              >
                <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* contact button - hidden on small screens, visible on medium and up */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="flex items-center gap-x-2 cursor-pointer border p-2 rounded-3xl hover:bg-orange-500 hover:text-white transition-all duration-500 ease-in-out">
              <span className="font-semibold px-2">Contact Now</span>
              <span className="bg-orange-500 rounded-full p-1 text-white">
                <MdOutlineArrowOutward />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white z-10 shadow-lg rounded-b-lg mt-2 py-2 px-4">
          <div className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-orange-600 text-white font-semibold py-2 px-4 rounded-2xl"
                    : "hover:bg-orange-400 hover:text-white py-2 px-4 rounded-2xl"
                }
                end={item.path === "."}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}
            {/* Mobile contact button */}
            <Link
              to="/contact"
              className="mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <button className="cursor-pointer flex items-center gap-x-2 border p-2 rounded-3xl hover:bg-orange-500 hover:text-white transition-all duration-500 ease-in-out w-full justify-center">
                <span className="font-semibold">Contact Now</span>
                <span className="bg-orange-500 rounded-full p-1 text-white">
                  <MdOutlineArrowOutward />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
