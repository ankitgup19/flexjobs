import React from "react";
import s from "../../../styles/components/common/WidgetFreeMonth.styled.js";

const WidgetFreeMonth = () => {
    return (
        <s.Link href="#">
            <s.Img src="https://www.flexjobs.com/images/img-right-rail.png" />
            <s.P>
                <s.I>Get a </s.I>
                FREE MONTH
                <s.I>!</s.I>
            </s.P>
            <s.Button type="button">Refer a Friend Today<i className="fa fa-angle-right"/></s.Button>
        </s.Link>
    );
};

export default WidgetFreeMonth;
