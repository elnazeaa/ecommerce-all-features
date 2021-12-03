import React from "react";
import styled from "styled-components";
import aboutImg from "../../images/about/about-image.jpg";

const OurCompany = (props) => {
  return (
    <Wrapper>
      <div className="content">
        <h5 className="subtitle">OUR SOLID BACKGROUND ON FINANCE</h5>
        <h1 className="title">
          Get to know about{" "}
          <em>
            our <br /> company
          </em>
        </h1>
        <p className="firstContent">
          Fusce nec ultrices lectus. Duis nec scelerisque risus. Ut id tempor
          turpis, ac dignissim ipsum. Nulla ullamcorper, ipsum vel condimentum
          congue, mi odio vehicula tellus, sit amet malesuada justo sem.
        </p>
        <p className="secondContent">
          Pellentesque in sagittis lacus, vel auctor sem. Quisque eu quam
          eleifend, ullamcorper dui nec, luctus quam.
        </p>
      </div>
      <div className="img">
        <img src={aboutImg} alt="about us" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5rem 0;
  .content {
    width: 35%;
  }
  .content h5 {
    text-transform: uppercase;
    font-size: 15px;
    color: #666;
    letter-spacing: 1px;
    margin-bottom: 10px;
    display: block;
  }
  .content em {
    color: #496595;
    font-style: normal;
  }
  .content h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 35px;
  }
  .content .firstContent {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    margin-bottom: 30px;
  }
  .secondContent {
    font-size: 14px;
    color: #666666;
    line-height: 30px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 100px) and (max-width: 667px) {
    .content {
      width: 90%;
    }
    .img {
      display: flex;
      justify-content: center;
    }
    .img img {
      width: 75%;
    }
  }
  @media screen and (min-width: 668px) and (max-width: 875px) {
    .content {
      width: 85%;
    }
    .img {
      display: flex;
      justify-content: center;
    }
    .img img {
      width: 80%;
    }
  }

  @media screen and (min-width: 876px) and (max-width: 1250px) {
    .content {
      width: 35%;
    }
    .img {
      display: flex;
      justify-content: center;
    }
    .img img {
      width: 65%;
    }
  }
`;

export default OurCompany;
