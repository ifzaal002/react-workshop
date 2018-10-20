import React from 'react';


const SearchBox = ({onSearchInputChange, query})=>{

  return(
      <div className="search-box text-center">
        <input type="text" onChange={onSearchInputChange} placeholder="Enter search term" value={query}/>
      </div>
  )

};

export default SearchBox;
