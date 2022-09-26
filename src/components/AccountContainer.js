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
      .then(result=> settransactions (result));
  },[])
  
  // console.log(result);

  function handleSubmit(obj){

  }
  return (
    <div>
      <Search />
      <AddTransactionForm 
        submit ={handleSubmit}
      />
      <TransactionsList  
        transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
