import { createBrowserRouter } from "react-router-dom";

import Services from "./Pages/Services/Services";
import Main from "./Components/Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Services></Services>,
      },
    ],
  },
]);
