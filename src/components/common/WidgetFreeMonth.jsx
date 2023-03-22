import React, { useState } from "react";
import PopupModal from "./PopupModal";
import FormGroup from "./FormGroup";
import ButtonGroup from "./ButtonGroup";
import s from "../../../styles/components/common/WidgetFreeMonth.styled.js";

const WidgetFreeMonth = () => {
  const [isActive, setIsActive] = useState(false);
  const showPopupModal = () => {
    setIsActive(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsActive(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      <s.Link onClick={showPopupModal}>
        <s.Img src="https://www.flexjobs.com/images/img-right-rail.png" />
        <s.P>
          <s.I>Get a </s.I>
          FREE MONTH
          <s.I>!</s.I>
        </s.P>
        <s.Button type="button">
          Refer a Friend Today
          <i className="fa fa-angle-right" />
        </s.Button>
      </s.Link>
      {isActive && (
        <PopupModal
          headBgColor="#004f6d"
          textColor="#fff"
          bgColor="#004f6d"
          closeModal={closeModal}
          setIsActive={setIsActive}
        >
          <img src="https://www.flexjobs.com//images/img-friend-modal.jpg" />
          <s.ContentWrapper>
            <h2>Refer a Friend &amp; Get a Free Month!</h2>
            <p>
              Tell your friends about FlexJobs via email. When they sign up,
              they get up to <strong>30% off</strong>, and you get a free month
              worth <strong>$24.95</strong>!
            </p>
            <s.FormWrap>
              <small>
                Separate email addresses with a comma to refer up to 5 friends.
              </small>
              <form>
                <FormGroup
                  type="text"
                  placeholder="Enter Your Friend's Email Address"
                  id="friends_email"
                />
                <div className="col-grid">
                  <FormGroup
                    type="text"
                    placeholder="Enter Your First Name"
                    id="referrer_firstname"
                  />
                  <FormGroup
                    type="text"
                    placeholder="Enter Your Last Name"
                    id="referrer_lastname"
                  />
                </div>
                <FormGroup
                  type="text"
                  placeholder="Enter Your Email Address"
                  id="referrer_email"
                />
                <ButtonGroup
                  name="Send"
                  type="submit"
                  className="btn-primary"
                  bgColor="#004f6d"
                  boxShadow="none"
                  position="center"
                ></ButtonGroup>
              </form>
            </s.FormWrap>
          </s.ContentWrapper>
        </PopupModal>
      )}
    </>
  );
};

export default WidgetFreeMonth;
