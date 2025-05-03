import logo from "/assets/Logo.png";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between">
			{/* logo */}
			<div className="w-20">
				<img src={logo} alt="" />
			</div>

			{/* routes */}
			<div className="flex items-center gap-10 rounded-3xl border border-gray-400 py-2 pl-4 pr-6 font-semibold">
				<Link className="bg-orange-500 text-white px-5 py-1 rounded-3xl" to="/">
					Home
				</Link>
				<Link to="/about">About</Link>
				<Link to="/services">Services</Link>
				<Link to="/faq">FAQ</Link>
			</div>
			{/* contact button */}
			<div>
				<button className="flex items-center gap-x-2 border p-2 rounded-3xl">
					<span className="font-semibold">Contact Now</span>
					<span className="bg-orange-500 rounded-full p-1 text-white">
						<MdOutlineArrowOutward />
					</span>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
