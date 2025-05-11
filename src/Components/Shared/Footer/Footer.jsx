import logo from "/assets/Logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
	const menuItems = [
		{ name: "Über", path: "/about" },
		{ name: "Kontakt", path: "/contact" },
		{ name: "Dienstleistungen", path: "/services" },
		{ name: "Impressum & Datenschutz", path: "/termscondition" },
	];

	return (
		<footer className="border-b border-gray-400 pt-8 pb-4 text-center my-10 mb-24">
			{/* Logo */}
			<div className="flex justify-center mb-8">
				<img src={logo} alt="Logo" className="h-6" />
			</div>

			{/* Navigation Links */}
			<nav className="flex flex-col md:flex-row md:justify-center md:space-x-8 mb-4 gap-5">
				{menuItems.map((item) => (
					<Link
						key={item.name}
						to={item.path}
						className="text-gray-900 hover:text-orange-500 transition hover:font-semibold"
					>
						{item.name}
					</Link>
				))}
			</nav>
		</footer>
	);
};
