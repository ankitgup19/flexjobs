import React from "react";
import SearchResult from "./SearchResult";
import { SearchResults } from "../../helper/Common";

const SearchResultList = () => {
  return (
    <div className="search-results-wrap">
      {SearchResults.map((result) => (
        <SearchResult {...result} />
      ))}
    </div>
  );
};

export default SearchResultList;
