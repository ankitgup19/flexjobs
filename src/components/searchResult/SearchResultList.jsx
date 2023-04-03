import React, {useState} from "react";
import SearchResult from "./SearchResult";
import { SearchResults } from "../../helper/Common";

const SearchResultList = (props) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="search-results-wrap">
      {SearchResults.map((result, index) => (
        <SearchResult {...result} showDetail={props.showDetail} index={index} 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        isActive={index == activeIndex}
        />
      ))}
    </div>
  );
};

export default SearchResultList;
