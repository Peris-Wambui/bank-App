import React, {useState} from "react";

function AddTransactionForm({submit}) {

  const[formTrans,setFormTrans]= useState([])
  function handleChange(e){
    e.preventDefult();
    setFormTrans({
    ...formData,
  });}
  function getSubmitTrans(e){
    e.preventDefult();

    // submit()
  }
  return (
    <div className="ui segment">
      <form className="ui form" >
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit" onClick={getSubmitTrans}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
