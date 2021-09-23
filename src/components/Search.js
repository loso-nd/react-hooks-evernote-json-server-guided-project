import React from "react";

function Search({search, onSearchChange}) {
  // const [search, setSearch] =  useState("")

  function handleSearchChange(e){
    onSearchChange(e.target.value)
  }
  return (
    <div className="filter" >
      <input id="search-bar" type="text" placeholder="Search Notes" 
      name="search"
      value={search}
      onChange={handleSearchChange} />
    </div>
  );
}

export default Search;

/**
 * Step 4: Filter Search 
 * Implement the filter to search through your notes list by title
 * Line 4: Set up controlled state form deriving its input values from state
 * 
 * OnChange: event listener that will fired every time the value of an input changes. We use the cb function that acceps (e) as its argument 
 *  
 */
