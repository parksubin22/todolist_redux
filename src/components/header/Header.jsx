import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <Link to={`/`} style={{ textDecoration: "none" }}>
      <header>
        <h1>My To Do List</h1>
      </header>
    </Link>
  );
};

export default Header;
