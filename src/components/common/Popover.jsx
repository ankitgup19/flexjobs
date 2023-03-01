import React, { useEffect } from "react";
import { PopoverWrap, IconGuideList, ImgGlobal, ImgFlag, P, Arrow } from "../../../styles/components/common/Popover.styles.js";

const Popover = (props) => {
  useEffect(() => {
    const listener = () => {
      let $popover = document.querySelector('.popover');
      $popover.style.left = (document.querySelector('.fa-info-circle')?.getBoundingClientRect().x + 48) + 'px';
      $popover.style.top = (document.querySelector('.fa-info-circle')?.getBoundingClientRect().y - 175) + 'px';
    }
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  });

  return (
    <>
      <PopoverWrap className="popover fadeshow fade show bs-popover-bottom" role="tooltip" id="popover" data-popper-placement="bottom">
        <Arrow />
        <h3 className="popover-header">Job Icon Guide</h3>
        <div className="popover-body"><p><strong>Job is open to:</strong></p>
          <IconGuideList>
            <li><ImgGlobal src="https://www.flexjobs.com/images/icons/icon-everywhere.png" alt="everywhere icon" width='16' height='16' /> Candidates Everywhere</li>
            <li><ImgFlag src="https://www.flexjobs.com/images/icons/icon-usa.png" alt="United States icon" width='20' height='16' /> Candidates in US</li>
            <li><ImgFlag src="https://www.flexjobs.com/images/icons/australia.png" alt="Australia icon" width='20' height='16' /> Australia Candidates</li>
            <li><ImgFlag src="https://www.flexjobs.com/images/icons/canada.png" alt="Canada icon" width='20' height='16' /> Canada Candidates</li>
            <li><ImgFlag src="https://www.flexjobs.com/images/icons/india.png" alt="India icon" width='20' height='16' /> India Candidates</li>
            <li><ImgFlag src="https://www.flexjobs.com/images/icons/uk.png" alt="UK icon" width='20' height='16' /> UK Candidates</li>
          </IconGuideList>
          <p><strong>Job is for local candidate of:</strong></p>
          <IconGuideList>
            <li><i className="fa fa-map-marker-alt" aria-hidden="true"></i><span className="visually-hidden">Candidates need to be able to work in the City or State specified</span> a Certain City or State</li>
          </IconGuideList>
          <p><strong>FlexJobs logos:</strong></p>
          <IconGuideList flex>
            <li><ImgFlag src="https://www.flexjobs.com/images/fj-star.png" alt="" /> 
            <P>Featured Companies are employers who have come directly to FlexJobs, been approved by our staff, and have directly posted their jobs to the FlexJobs site.</P></li>
          </IconGuideList></div>
      </PopoverWrap>
    </>
  )
}

export default Popover;