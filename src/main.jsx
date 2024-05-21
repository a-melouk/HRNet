import React from "react";
import ReactDOM from "react-dom/client";
import NewEmployee from "./pages/NewEmployee.jsx";
import "./normalize.css";
import Nav from "./Components/Nav.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <NewEmployee />
  </React.StrictMode>
);
