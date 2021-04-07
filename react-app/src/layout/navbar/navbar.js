import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/todos">Tic Tac Toe</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </nav>
  );
}

export default Navbar;
