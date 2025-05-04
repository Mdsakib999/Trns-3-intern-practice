import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 3000, // Optional: set animation duration
			once: false, // Optional: animate only once
		});
	}, []);

	return (
		<div data-aos="zoom-in" className="container mx-auto mt-7">
			{/* Nav bar */}
			<Navbar />

			{/* Children component practice */}
			<div className="min-h-[calc(100vh-196px)] ">
				<Outlet />
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
