import React from "react";
import mesh from "../images/mesh.jpg";
import styled from "styled-components";
import onlineShopping from "../images/online-shopping.png";

const Header = (props) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${mesh})` }}>
      <div className="content">
        <h1>They are based on a variety of factors including</h1>
        <p>
          Our mission is to help consumers use the power of information to
          easily find, compare and buy products online - in less time and for
          the best price! You can read unbiased product reviews and compare
          prices online.
        </p>
      </div>
      <img src={onlineShopping} alt="name" className="svgImg" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="waveSvg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L40,218.7C80,213,160,203,240,176C320,149,400,107,480,122.7C560,139,640,213,720,218.7C800,224,880,160,960,133.3C1040,107,1120,117,1200,112C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 6.25rem;
  box-sizing: border-box;
  position: relative;
  .svgImg {
    z-index: 1;
  }
  .waveSvg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .content {
    width: 40%;
  }
  .content h1 {
    color: #495464;
    font-weight: 900;
    letter-spacing: 0.08125rem;
  }
  .content p {
    font-size: 1.125rem;
    line-height: 1.5;
    color: #495464;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 1.25rem;
    height: 70vh;
    .svgImg {
      z-index: 1;
      width: 50%;
    }
    .content {
      width: 100%;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 767px) {
    padding: 1.5625rem;
    height: 100vh;
    text-align: center;
    .svgImg {
      display: none !important;
    }
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default Header;
