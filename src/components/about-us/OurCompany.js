import React from "react";
import styled from "styled-components";
import aboutImg from "../../images/about/about-image.jpg";

const OurCompany = (props) => {
  return (
    <Wrapper>
      <div className="container">
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 3rem 17%;
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .content {
    flex: 1 1 33rem;
  }
  .img {
    flex: 1 1 30rem;
  }
  .img img {
    width: 100%;
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
`;

export default OurCompany;
