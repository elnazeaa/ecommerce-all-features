import React from "react";
import styled from "styled-components";
import contactFirst from "../../images/contact-img/contactFirst.jpg";
import contactSec from "../../images/contact-img/contactSecond.jpg";
import contactLast from "../../images/contact-img/Contact01.jpg";

const ContactUsFeature = (props) => {
  return (
    <Wrapper>
      <div className="img">
        <img src={contactFirst} alt="Contact First" />
      </div>
      <div className="content">
        <h2 className="title">
          All the features <br /> you’d expect.
        </h2>
        <div className="sub">
          <h5>Tons of pre-made sections</h5>
          <p className="f">
            Combine sections from Olla's vast component library and create
            beautiful.
          </p>
          <h5>Complete CMS integration</h5>
          <p className="f">
            Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend
            augue laoreet non praesent ultrices..
          </p>
          <h5>Stellar after-sales support</h5>
          <p>
            Facilisis ac eget mauris nulla enim a diam. Posuere vel eleifend
            augue laoreet non praesent ultrices..
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  width: 85%;
  display: flex;
  justify-content: center;
  margin: 2rem auto 0 auto;
  flex-wrap: wrap;
  img {
    width: 100%;
    height: auto;
  }
  .img {
    flex: 0 1 auto;
  }
  .content {
    flex: 0 1 400px;
    margin-left: 8.3%;
  }
  .title {
    font-size: 40px;
    display: block;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 12px;
  }
  h5 {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 16px;
    font-weight: 600;
  }
  p {
    color: #5c6168;
    margin-bottom: 15px;
    font-weight: normal;
    line-height: 1.4;
    font-size: 17px;
  }
  .f {
    border-bottom: 1px solid #dbdee9;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }
`;

export default ContactUsFeature;
