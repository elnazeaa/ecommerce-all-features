import React from "react";
import heading_bg from "../../images/about/heading-bg.jpg";
import styled from "styled-components";

const AboutHeader = (props) => {
  return (
    <Wrapper>
      <div className="imgContainer">
        <div className="img">
          <img src={heading_bg} alt="heading" />
        </div>
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h1>About Us</h1>
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
    background-position: center;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 70vh;
    background: linear-gradient(to right, #90a7c4, #496595);
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default AboutHeader;
