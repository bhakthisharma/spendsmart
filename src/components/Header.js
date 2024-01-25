import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Spendsmart</h1>
      <h3>Expense tracker </h3>
      <div className="balance-operations">
        <p>Balance Rs5000</p>
        <button className="addButton">Add</button>
      </div>
    </div>
  );
};

export default Header;
