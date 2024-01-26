import "./App.css";
import Addtransaction from "./components/Addtransaction";
import Header from "./components/Header";
import Expensebudgetdetails from "./components/Expensebudgetdetails";
import Transactions from "./components/Transactions";
import Entries from "./components/Entries";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Addtransaction></Addtransaction>
      <Expensebudgetdetails></Expensebudgetdetails>
      <Transactions></Transactions>
      <Entries></Entries>
    </div>
  );
}

export default App;
