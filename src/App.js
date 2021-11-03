import React from 'react'
import './App.css';
import Balance from './Compound/Balance';
import Header from './Compound/Header';
import IncomeExpenses from './Compound/IncomeExpenses';
import TransactionList from './Compound/TransactionList';
import AddTransaction from './Compound/AddTransaction'

//importing GlobalState
import {GlobalProvider} from './Context/GlobalState'

const App = () => {
  return (
    < GlobalProvider>
       <Header/>
       <div className="container">
         <Balance />
         <IncomeExpenses/>
         <TransactionList/>
         <AddTransaction/>
       </div>

    </ GlobalProvider>
  )
}

export default App
