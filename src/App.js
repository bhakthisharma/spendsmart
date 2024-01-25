import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Header from "./components/Header";
import Expensebudgetdetails from "./components/Expensebudgetdetails";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Addtransaction></Addtransaction>
      <Expensebudgetdetails></Expensebudgetdetails>
      <Transactions></Transactions>
    </div>
  );
}

export default App;
