import React from "react";
import "./Header.css";
import rupeeIcon from '../images/rupee.svg';

const Header = () => {
  return (
    <div className="header">
      <h1>Spendsmart</h1>
      <h3>Expense tracker </h3>
      <div className="balance-operations">
        <p>Balance  <img className='rupeeIcon' src={rupeeIcon} alt="Rupee Icon " height={12} width={12} />5000</p>
        <button className="addButton">Add</button>
      </div>
    </div>
  );
};

export default Header;
