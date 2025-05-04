import { Outlet } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
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
