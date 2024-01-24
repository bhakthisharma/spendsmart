import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Spendsmart</h1>
      <h3>Expense tracker </h3>
      <div className="balance-operations">
        <p>Balance Rs5000</p>
        <button>Add</button>
      </div>
      <div className="adding-expenses">
        <div className="input-fields">
          <input type="number" placeholder=" Enter Amount" />
          <input type="text" placeholder="Enter Details" />
        </div>
        <div className="expense-budget">
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
            <label for="html">Expense</label>
          <input
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          ></input>
            <label for="html">Budget</label>
        </div>
        <button>Add Transaction</button>
      </div>
    </div>
  );
}

export default App;
