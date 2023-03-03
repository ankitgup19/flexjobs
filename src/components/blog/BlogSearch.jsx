import React, { useState } from "react";
import { InputSearch, SearchWrap, SearchBtn, Styledform } from "../../../styles/components/common/BlogSearch.style";

const BlogSearch = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <Styledform action="/blog/search/" method="get">
            <SearchWrap>
                <InputSearch bdrcurve type="text" placeholder="Search Articles & Content" 
                onChange={(e) => setSearchText(e.target.value)} value={searchText} aria-label="Search article content" />
                <SearchBtn type="submit" className="submit-btn"><i className="fa fa-search"/></SearchBtn>
            </SearchWrap>
        </Styledform>
    )
}

export default BlogSearch;