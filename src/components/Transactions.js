import React from "react";
import "./Transactions.css";

const Transactions = () => {
  return (
    <div className="transactions">
      <p className="transaction">Transactions</p>
      <input id="searchbar" type="text" placeholder="Search.."></input>
    </div>
  );
};

export default Transactions;
