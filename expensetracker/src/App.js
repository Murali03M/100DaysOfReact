
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GloblState';

function App() {
  return (
    <GlobalProvider >
     <Header/>
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
