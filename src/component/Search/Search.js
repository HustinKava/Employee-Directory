import React from 'react';
import './Search.css';

function Search() {
    return ( 
      <div class='container search-container'>
      <div class="form-outline">
      <input type="search" id="form1" class="form-control" placeholder="Search"
       aria-label="Search" />
      </div>
      </div>
    )
}

export default Search;