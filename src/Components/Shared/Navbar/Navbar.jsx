import logo from "/assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <div className="w-20">
        <img src={logo} alt="" />
      </div>

      {/* routes */}
      <div className="flex items-center gap-10 rounded-3xl border border-gray-400 py-2 pl-4 pr-6 font-semibold">
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
          >
            <span className="ml-2">{item.name}</span>
          </NavLink>
        ))}
      </div>
      {/* contact button */}
      <div>
        <Link to="/contact">
          {" "}
          <button className="flex items-center gap-x-2 border p-2 rounded-3xl hover:bg-orange-500 hover:text-white transition-all duration-500 ease-in-out">
            <span className="font-semibold">Contact Now</span>
            <span className="bg-orange-500 rounded-full p-1 text-white">
              <MdOutlineArrowOutward />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
