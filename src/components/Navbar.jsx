import React from "react";
import stockImage from "../assets/stockImage.png";

const Navbar = () => {
  return (
    <nav>
      <img src={stockImage} width="75" alt="" />
      <h1>Expense Tracker</h1>
    </nav>
  );
};

export default Navbar;
