import React from "react";
import s from "../../../styles/components/careerAdvice/BackToTop.styled.js";

const BackToTop = (props) => {
    const ScrollTop = (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
    return (
        <s.P className="text-end">
            <s.Link href="#top" onClick={ScrollTop}>
                <i className="fa fa-angle-up"/>Back to Top
            </s.Link>
        </s.P>
    );
};

export default BackToTop;
