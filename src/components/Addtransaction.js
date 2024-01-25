import React from "react";
import "./Addtransaction.css";

const Addtransaction = () => {
  return (
    <div className="adding-expenses">
      <input type="number" placeholder=" Enter Amount" />
      <input type="text" placeholder="Enter Details" />
      <div className="radioButtons-expensebudget">
        <div className="radioButton-expense">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
            <label for="html">Expense</label>
        </div>
        <div className="radioButton-budget">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
            <label for="html">Budget</label>
        </div>
      </div>
      <button className="addtransaction">Add Transaction</button>
    </div>
  );
};

export default Addtransaction;
