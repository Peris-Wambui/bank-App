import React from "react";

function Search({onSearch}){
  const [search, setSearch]=React.useState("")

  function handleChange(evt){
    setSearch(evt.target.value)
    onSearch(search)
  }
  return (
    <div  onChange={handleChange}className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
