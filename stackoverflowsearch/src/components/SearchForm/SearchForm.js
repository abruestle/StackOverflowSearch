import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.searchterms array
const SearchForm = props =>
  <form className="search">
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="searchterm"
        type="text"
        className="form-control"
        placeholder="Type in a search term to begin"
        id="searchterm"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>;

export default SearchForm;
