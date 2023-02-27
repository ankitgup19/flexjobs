import React from "react";
import JobSite from "../../../styles/images/biggest-best-job-site.svg";
import TrackRecord from "../../../styles/images/great-track-record.svg";
import LightenBulb from "../../../styles/images/icn-refresh-lightbulb.svg";
import PayLittleGetaLot from "../../../styles/images/pay-little-get-a-lot.svg"
import SatisfactionGuaranteed from "../../../styles/images/satisfaction-guaranteed.svg"
import SavingDeals from "../../../styles/images/special-savings-deals.svg";

import { ItemWrap, ImgWrap, InnerWrap, Title } from "../../../styles/components/signup/Benefits.styles";

const benefitsList = [
    {icon:JobSite,title:"Remote and Flexible Jobs",description:"The biggest hand-screened database of remote and flexible jobs!"},
    {icon:TrackRecord,title:"Ad-Free, Scam-Free",description:"Top employers from all industries around the U.S. and the world."},
    {icon:LightenBulb,title:"Job Search Resources",description:"Skills tests, job search checklists, and expert content."},
    {icon:SavingDeals,title:"Special Savings",description:"Discounts on 60+ job search and work-life products and services."},
    {icon:SatisfactionGuaranteed ,title:"Great Service",description:"Help from our friendly Client Services team."},
    {icon:PayLittleGetaLot,title:"Satisfaction Guaranteed",description:"And More!"}
]

const Benefits = () => {
    return (
        benefitsList.map((item)=>(
            <ItemWrap>
                <ImgWrap>
                    <InnerWrap>
                        <img src={item.icon} alt={item.title} width="35" height="41"/>
                    </InnerWrap>
                </ImgWrap>    
                <Title><strong>{item.title}</strong></Title>
                <p>{item.description}</p>
            </ItemWrap>
        ))
    )
}

export default Benefits;