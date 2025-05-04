import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
<<<<<<< HEAD

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 500,
      once: false,
    });
=======
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
>>>>>>> 7186ac3f4007b9bea2ad09d761e5e7a4f9be8ac2

    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto mt-7">
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
