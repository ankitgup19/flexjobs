import React from "react";
import { PopoverWrap, IconGuideList, ImgGlobal, ImgFlag, P, Arrow, PopoverHeader, PopoverBody, Li, VisuallyHidden } from "../../../styles/components/common/Popover.styles.js";

const Popover = () => {

  return (
    <>
      <PopoverWrap role="tooltip">
        <Arrow />
        <PopoverHeader>Job Icon Guide</PopoverHeader>
        <PopoverBody><p><strong>Job is open to:</strong></p>
          <IconGuideList>
            <Li><ImgGlobal src="https://www.flexjobs.com/images/icons/icon-everywhere.png" alt="everywhere icon" width='16' height='16' /> Candidates Everywhere</Li>
            <Li><ImgFlag src="https://www.flexjobs.com/images/icons/icon-usa.png" alt="United States icon" width='20' height='16' /> Candidates in US</Li>
            <Li><ImgFlag src="https://www.flexjobs.com/images/icons/australia.png" alt="Australia icon" width='20' height='16' /> Australia Candidates</Li>
            <Li><ImgFlag src="https://www.flexjobs.com/images/icons/canada.png" alt="Canada icon" width='20' height='16' /> Canada Candidates</Li>
            <Li><ImgFlag src="https://www.flexjobs.com/images/icons/india.png" alt="India icon" width='20' height='16' /> India Candidates</Li>
            <Li><ImgFlag src="https://www.flexjobs.com/images/icons/uk.png" alt="UK icon" width='20' height='16' /> UK Candidates</Li>
          </IconGuideList>
          <p><strong>Job is for local candidate of:</strong></p>
          <IconGuideList>
            <Li><i className="fa fa-map-marker" aria-hidden="true"></i><VisuallyHidden>Candidates need to be able to work in the City or State specified</VisuallyHidden> a Certain City or State</Li>
          </IconGuideList>
          <p><strong>FlexJobs logos:</strong></p>
          <IconGuideList flex>
            <Li><ImgFlag src="https://www.flexjobs.com/images/fj-star.png" alt="" />
              <P>Featured Companies are employers who have come directly to FlexJobs, been approved by our staff, and have directly posted their jobs to the FlexJobs site.</P></Li>
          </IconGuideList>
        </PopoverBody>
      </PopoverWrap>
    </>
  )
}

export default Popover;