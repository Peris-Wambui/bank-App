import React, {useState} from "react";

function AddTransactionForm({onSubmit}) {

  const[formTrans,setFormTrans]= useState({
    date:'',
    description:'',
    category:'',
    amount:0.01
  });
  function handleChange(evt){
    // e.preventDefault();/
    setFormTrans({
    ...formTrans,
    [evt.target.name]:[evt.target.value]
  });
}

  function getSubmitTrans(evt){
    evt.preventDefault();
    onSubmit(formTrans);
    setFormTrans({
      date:'',
      description:'',
      category:'',
      amount:0.01

    });

    // submit()
  }
  return (
    <div className="ui segment">
      <form onSubmit={getSubmitTrans} className="ui form" >
        <div className="inline fields">
          <input type="date" name="date"
          value={formTrans.date} 
          onChange={handleChange}
          />

          <input type="text" name="description" 
           value={formTrans.description} 
          onChange={handleChange}
          placeholder="Description"  
          />

          <input type="text" name="category"
           value={formTrans.category} 
           onChange={handleChange}
           placeholder="Category" 
            />

          <input type="number" name="amount"
           value={formTrans.amount} 
           onChange={handleChange}
           placeholder="Amount" step="0.01"
            />
        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
