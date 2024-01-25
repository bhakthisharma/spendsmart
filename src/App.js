import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Spendsmart</h1>
      <h3>Expense tracker </h3>
      <div className="balance-operations">
        <p>Balance Rs5000</p>
        <button className="addButton">Add</button>
      </div>
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
        <button>Add Transaction</button>
      </div>
      <div className="expensebudget-result">
        <div className="expense-result">
          <p>Expense</p>
          <p>Rs500</p>
        </div>
        <div className="budget-result">
          <p>Expense</p>
          <p>Rs500</p>
        </div>
      </div>
      <div className="transactions">
        <p className="transaction">Transactions</p>
        <p className="searchbar">Search here...</p>
      </div>
    </div>
  );
}

export default App;
