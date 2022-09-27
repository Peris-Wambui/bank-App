import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import { useState } from "react/cjs/react.production.min";

function AccountContainer() {
  const [transactions, settransactions]= useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(resp=>resp.json())
      .then(result=> 
        {settransactions (result)
      });
  },[]);
  
  // console.log(result);

  function handleSubmit(newTransactions){
    settransactions(transactions =>[...transactions ,newTransactions]);
    fetch ("http://localhost:8001/transactions",{
      method:"POST",
      Headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(newTransactions),
    })
    .then((resp)=>resp.json())
    .then(newTrans =>settransactions
      ((transactions)=>[...transactions,newTrans]))
  }
  function handleOnSearch(search){
    settransactions(transactions=>transactions.filter( 
      transaction => transaction.description.includes(search)
    ))
  }

  return (
    <div>
      <Search onSearch={handleOnSearch}/>
      <AddTransactionForm 
        onSubmit ={handleSubmit}
      />
      <TransactionsList  
        transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
