import React from "react";
import stockImage from "./stockImage.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={stockImage} width="75" alt="" />
        <h1>Expense Report Tracker</h1>
      </nav>
    </div>
  );
};

export default Navbar;
