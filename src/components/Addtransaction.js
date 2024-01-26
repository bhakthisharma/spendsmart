import React from "react";
import "./Addtransaction.css";
import Entries from "./Entries";
import { useState } from "react";

const Addtransaction = () => {
  const [Amount, setAmount] = useState(0);
  const [Description, setDescription] = useState(0);

  function getAmount(amount) {
    console.log(amount.target.value);
  }
  function getDescription(description) {
    console.log(description.target.value);
  }
  return (
    <div className="adding-expenses">
      <input
        className="enteredAmount"
        type="number"
        placeholder=" Enter Amount"
        onChange={getAmount}
      />
      <input
        className="enteredDetails"
        type="text"
        placeholder="Enter Details"
        onChange={getDescription}
      />
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
