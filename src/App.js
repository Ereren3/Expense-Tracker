import './App.css';
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

function App() {
  return (
    <div className="App">
        <GlobalProvider>
            <div className='container'>
                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    </div>
  );
}

export default App;
