import React from "react";
import "./Expensebudgetdetails.css";

const Expensebudgetdetails = () => {
  return (
    <div className="expensebudget-result">
      <div className="expense-result">
        <p>Expense</p>
        <p>Rs500</p>
      </div>
      <div className="budget-result">
        <p>Budget</p>
        <p>Rs1850</p>
      </div>
    </div>
  );
};

export default Expensebudgetdetails;
