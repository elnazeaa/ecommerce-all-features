import React from "react";
import contactus from "../../images/contact-img/contact-us.jpg";
import styled from "styled-components";

const ContactUsHeader = (props) => {
  return (
    <Wrapper>
      <div className="imgContainer">
        <div className="img">
          <img src={contactus} alt="heading" />
        </div>
        <div className="overlay"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .imgContainer {
    position: relative;
  }
  .img img {
    width: 100%;
    object-fit: cover;
    height: 70vh;
    background-position: bottom;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 70vh;
    background: linear-gradient(143deg, #ffffff 0%, #ffffff 46%, #a63d4c 100%);
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`;

export default ContactUsHeader;
