import React from "react";
import "./Expensebudgetdetails.css";
import rupeeIcon from '../images/rupee.svg';


const Expensebudgetdetails = () => {
  return (
    <div className="expensebudget-result">
      <div className="expense-result">
        <p>Expense</p>
        <p><img className='rupeeIcon' src={rupeeIcon} alt="Rupee Icon " height={12} width={12} />500</p>
      </div>
      <div className="budget-result">
        <p>Budget</p>
        <p><img className='rupeeIcon' src={rupeeIcon} alt="Rupee Icon " height={12} width={12} />1850</p>
      </div>
    </div>
  );
};

export default Expensebudgetdetails;
