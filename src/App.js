import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/layouts/NavBar";
import Home from "./pages/Home/Home";
import Transaction from "./pages/Transaction/Transaction";
// import Wrapper from "./components/Helpers/Wrapper";

// React-Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <div className="container">
        <RouterProvider router={router} />
      </div>
    </React.Fragment>
  );
}

export default App;
