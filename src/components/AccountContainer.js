import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import { useState } from "react/cjs/react.production.min";

function AccountContainer() {
  const [transactions, settransactions]=React.useState([]);
  useEffect(()=>{
    fetch("http://localhost:8001/transactions")
      .then(resp=>resp.json())
      .then(result=> settransactions (result));
  },[]);
  
  // console.log(result);
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList  
        transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
