import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bak from "../../images/contact-img/bak.jpg";

const ContactBack = (props) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${bak}),linear-gradient(#012e67ba, #003eaf82)`,
      }}
    >
      <div className="container">
        <div className="content">
          <span>PREPARE FOR TAKEOFF</span>
          <p>Looking for business opportunity?</p>
        </div>
        <div className="btn">
          <Link to="#">Get Started</Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-blend-mode: soft-light;
  background-position: center center;
  .container {
    padding: 3rem 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .content span {
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .content p {
    color: #fff;
    font-weight: 600;
    font-size: 30px;
  }
  .btn a {
    display: inline-block;
    padding: 20px 30px;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 24px 36px -11px rgb(0 0 0 / 9%);
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: #fff;
    border: 1px solid #fff;
    color: #012e67;
  }
`;

export default ContactBack;
