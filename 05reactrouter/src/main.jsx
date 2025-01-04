import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/About/about.jsx";
import Contact from "./components/Contact/contact.jsx";
import User from "./components/User/user.jsx";
import GitHub, { githubinfoloader } from "./components/Github/Github.jsx";

// first method for router declaration
const router = createBrowserRouter([
  {
    // localhost:5050/
    path: "/",
    element: <Layout />,
    children: [
      {
        // localhost:5050/
        path: "",
        element: <Home />,
      },
      {
        // localhost:5050/about
        path: "about",
        element: <About />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        // localhost:5050/user/${userid}
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        element: <GitHub />,
      },
    ],
  },
]);

//  second method for router declaration
const routertest = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      {/* loaded the api before even loading the data and stores the data in cache basically page get loaded only when data is loaded through loader */}
      <Route loader={githubinfoloader} path="github" element={<GitHub />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* assign rouder */}
    <RouterProvider router={routertest} />
  </StrictMode>
);
