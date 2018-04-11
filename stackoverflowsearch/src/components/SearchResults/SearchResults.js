import React from "react";
import "./SearchResults.css";
import SearchResult from "../SearchResult";

const SearchResults = props => {
  console.log("Search Results");
  console.log(JSON.stringify(props, null, 2));
  return (<ul className="list-group search-results">
    {props.results.map(result =>
      <li key={`list${result.question_id}`} className="list-group-item" id={`${result.question_id}`}>
        <SearchResult {...result} />
      </li>
    )}
  </ul>)};

export default SearchResults;
