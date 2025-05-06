import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Components/Shared/Navbar/Navbar";
import { Footer } from "./Components/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Utils/ScrollToTop";
import { FaAngleDoubleUp } from "react-icons/fa";

export const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    const scrollStep = window.scrollY / 20;
    const scrollAnimation = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        window.scrollTo(0, Math.max(currentScroll - scrollStep, 0));
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 500,
      once: false,
    });

    AOS.refresh();
  }, []);

  return (
    <div className="mx-auto mt-7 max-w-7xl w-full px-4">
      {/* Nav bar */}
      <Navbar />
      <ScrollToTop />

      {/* Children component practice */}
      <div className="min-h-[calc(100vh-196px)] ">
        <Outlet />
      </div>
      {showScrollButton && (
        <div
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-5 cursor-pointer bg-primary p-3 rounded-full shadow-lg hover:bg-info hover:shadow-2xl transition-all duration-300"
        >
          <FaAngleDoubleUp className="text-2xl text-orange-500" />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};
