import React from "react";
import Header from "../header/Header";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div className="wrap">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
