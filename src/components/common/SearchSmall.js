import React from "react";

const Search = () => {
  return (
    <div className="input-group dark-search-bar-group has-border-radius">
                      <input id="search" type="text" className="form-control text-white" placeholder="Search" aria-label="search" aria-describedby="search"/>
                      <div className="input-group-append">
                         <button className="btn btn-gradient" type="button">Search</button>
                      </div>
                   </div>
  );
};
export default Search;
