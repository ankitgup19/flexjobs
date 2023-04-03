import React from "react";
import Styled from "../../../styles/components/careerAdvice/BackToTop.styled.js";

const BackToTop = (props) => {
    const ScrollTop = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
    return (
        <Styled.P className="text-end">
            <Styled.Link href="#top" onClick={ScrollTop}>
                <i className="fa fa-angle-up"/>Back to Top
            </Styled.Link>
        </Styled.P>
    );
};

export default BackToTop;
