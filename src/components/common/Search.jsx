import React, { useEffect, useState } from "react";
import { COUNTRY_LIST } from "../../helper/Common";
import useMediaQuery from "../../helper/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputSearch, SearchWrap, SearchBtn, Styledform, Select } from "../../../styles/components/common/Search.style";

const Search = (props) => {
    const isMobile = useMediaQuery("(max-width:1024px)");
    const [jtText, setJtText] = useState("");
    const [location, setLocation] = useState("");
    const [searchPh, setSearchPh] = useState("Search by job title, keyword, etc.");
    const [locationPh, setLocationPh] = useState("Search by location");

    useEffect(() => {
        isMobile && (setSearchPh("Search for Jobs...") || setLocationPh("Location"));
    });

    return (
        <Styledform action="/search" method="get">
            <SearchWrap className={props.type}>
                <InputSearch bdrcurve type="text" placeholder={searchPh} onChange={(e) => setJtText(e.target.value)} value={jtText} className="search-box"/>
                <InputSearch type="text" value={location} placeholder={locationPh} onChange={(e)=> setLocation(e.target.value)} className="search-box" />
                {
                    props.country && 
                    <Select>
                        {
                            COUNTRY_LIST.map((country, index) => <option key={country + index}>{country}</option>)
                        }
                    </Select>
                }
                <SearchBtn type="submit" className="submit-btn"><FontAwesomeIcon icon={faSearch}/></SearchBtn>
            </SearchWrap>
        </Styledform>
    )
}

export default Search;