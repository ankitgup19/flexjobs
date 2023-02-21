import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, SearchWrap, SearchBtn, Styledform } from "../../../styles/components/common/Search.style";

const Search = (props) => {
    const [jtText, setJtText] = useState("");
    const [location, setLocation] = useState("");
    return (
        <Styledform action="/search" method="get">
            <SearchWrap {...props}>
                <InputSearch bdrcurve type="text" placeholder={{...props}.v1 ? "Search by job title, keyword, etc." : "Search for Jobs"} onChange={(e) => setJtText(e.target.value)} value={jtText}/>
                <InputSearch type="text" value={location} placeholder={{...props}.v1 ? "Search by location" : "Location"} onChange={(e)=> setLocation(e.target.value)}/>
                <SearchBtn type="submit"><FontAwesomeIcon icon={faSearch}/></SearchBtn>
            </SearchWrap>
        </Styledform>
    )
}

export default Search;