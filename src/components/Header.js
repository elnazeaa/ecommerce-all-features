import React from "react";
import styled from "styled-components";
import onlineShop from "../images/slider/1.svg";

const Header = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h1>They are based on a variety of factors including</h1>
          <p>
            Our mission is to help consumers use the power of information to
            easily find, compare and buy products online - in less time and for
            the best price! You can read unbiased product reviews and compare
            prices online.
          </p>
        </div>
        <div className="img">
          <img src={onlineShop} alt="name" className="svgImg" />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
        className="waveSvg"
      >
        <path
          fill="#FFF8E8"
          fill-opacity="1"
          d="M0,64L60,80C120,96,240,128,360,165.3C480,203,600,245,720,234.7C840,224,960,160,1080,128C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #baaaf7;
  padding: 3rem 10%;
  position: relative;
  height: 70vh;
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .content {
    flex: 1 1 40rem;
    display: flex;
    flex-flow: column;
    justify-content: end;
    align-items: center;
  }
  .img {
    flex: 1 1 40rem;
    z-index: 10000;
  }

  .svgImg {
    z-index: 1;
  }
  .waveSvg {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .content h1 {
    color: #010003;
    font-weight: normal;
    letter-spacing: 0.08125rem;
    font-size: 4rem;
  }
  .content p {
    font-size: 1.125rem;
    line-height: 1.5;
    color: #010003;
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
