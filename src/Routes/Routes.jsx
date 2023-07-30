import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/events", element: <Events /> },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
]);

export default router;
