import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { FAQ } from "./pages/FAQ/FAQ";
import { Home } from "./pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
