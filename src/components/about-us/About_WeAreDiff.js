import React from "react";
import styled from "styled-components";
import icon1 from "../../images/about/icon1.svg";
import icon2 from "../../images/about/icon2.svg";
import icon3 from "../../images/about/icon3.svg";
import aboutGood from "../../images/about/about.svg";

const AboutWeAreDiff = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h5>Why we are different</h5>
          <p>
            We collect reviews from our users so you can get an honest opinion
            of what an experience with our website.
          </p>
          <div className="contentOne">
            <img src={icon1} alt="icon" />
            <p>
              Keep your cool. Get on-demand help to on-demand make the best
              offer.
            </p>
          </div>
          <div className="contentTwo">
            <img src={icon2} alt="icon" />
            <p>
              Keep your cool. Get on-demand help to on-demand make the best
              offer.
            </p>
          </div>
          <div className="contentThree">
            <img src={icon3} alt="icon" />
            <p>
              Keep your cool. Get on-demand help on-demand to make the best
              offer.
            </p>
          </div>
        </div>
        <div className="img">
          <img src={aboutGood} alt="contact good" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #f6f9fc;
  padding: 4rem 10%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .content {
    flex: 1 1 40rem;
    display: flex;
    flex-flow: column;
    justify-content: end;
  }
  .content p {
    font-size: 2rem;
    letter-spacing: 1.1px;
    line-height: 1.7;
  }
  .img {
    flex: 1 1 40rem;
  }
  .img img {
    width: 100%;
  }
  .content h5 {
    color: #18304b;
    font-size: 4rem;
    display: block;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.04em;
    margin-bottom: 12px;
  }
  .contentOne,
  .contentTwo,
  .contentThree {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
    padding: 0 9rem 0 0;
  }
  .contentOne p,
  .contentTwo p,
  .contentThree p {
    font-size: 1.3rem;
    line-height: 1.4;
    letter-spacing: 1.2px;
  }
`;

export default AboutWeAreDiff;
