import React from 'react';
import './Search.css';

const Search = ({handleSearchChange}) => {
    return ( 
      <div className='container search-container'>
      <div className="form-outline">
      <input type="search" id="form1" className="form-control" placeholder="Search"
       aria-label="Search" onChange={handleSearchChange} />
      </div>
      </div>
    )
}

export default Search;