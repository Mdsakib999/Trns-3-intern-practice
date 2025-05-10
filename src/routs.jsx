import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import Termscondition from "./Pages/Terms&condition/Termscondition";

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
				path: "/termscondition",
				element: <Termscondition />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);
