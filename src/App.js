import './App.css';
import React from 'react'

import Header from './components/header.js'
import Balance from './components/balance'
import IncomeExpense from './components/incomeExprence'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTrasaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header >

        </Header>

        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
