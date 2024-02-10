import "../Components/Searchbar.css";
import React, { useState } from 'react';
const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm); // Pass the search term to the parent component for handling the search
    };



  return (
    <form className="search-bar" onSubmit={handleSubmit}>
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search..."
      className="search-input"
    />
    <button type="submit" className="search-button">
      Search
    </button>
  </form>
  )
}

export default Search