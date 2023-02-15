import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, SearchDiv, SearchBtn, Styledform } from "../../../styles/components/common/search.style";

const Search = (props) => {
    const [jtText, setJtText] = useState("");
    const [location, setLocation] = useState("");
    return (
        <Styledform action="/search" method="get">
            <SearchDiv {...props}>
                <InputSearch bdrcurve type="text" placeholder={{...props}.v1 ? "Search by job title, keyword, etc." : "Search for Jobs"} onChange={(e) => setJtText(e.target.value)} value={jtText}/>
                <InputSearch type="text" value={location} placeholder={{...props}.v1 ? "Search by location" : "Location"} onChange={(e)=> setLocation(e.target.value)}/>
                <SearchBtn type="submit"><FontAwesomeIcon icon={faSearch}/></SearchBtn>
            </SearchDiv>
        </Styledform>
    )
}

export default Search;