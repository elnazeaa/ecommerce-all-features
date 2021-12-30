import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import serviceBg from "../../images/Service-bg.jpg";

import {
  BsGearFill,
  BsSpeedometer2,
  BsBarChartLineFill,
  BsFillQuestionSquareFill,
  BsArrowRightShort,
} from "react-icons/bs";

const ContactUsServices = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="cols">
          <div className="icon">
            <BsGearFill />
          </div>
          <h4>App Maintenance</h4>
          <p>
            You are not allowed to redistribute this template ZIP file on any
            other website.
          </p>
          <div className="text-button">
            <Link to="#">
              Read More <BsArrowRightShort />
            </Link>
          </div>
          <div className="overlay"></div>
        </div>
        {/* ================= */}
        <div className="cols">
          <div className="icon">
            <BsSpeedometer2 />
          </div>
          <h4>Rocket Speed of App</h4>
          <p>
            You are allowed to use the Chain App Dev HTML template. Feel free to
            modify or edit this layout.
          </p>
          <div className="text-button">
            <Link to="#">
              Read More <BsArrowRightShort />
            </Link>
          </div>
        </div>
        {/* ================== */}
        <div className="cols">
          <div className="icon">
            <BsBarChartLineFill />
          </div>
          <h4>Multi Workflow Idea</h4>
          <p>
            If this template is beneficial for your work, please support us a
            little via PayPal. Thank you.
          </p>
          <div className="text-button">
            <Link to="#">
              Read More <BsArrowRightShort />
            </Link>
          </div>
        </div>
        {/* ==================== */}
        <div className="cols">
          <div className="icon">
            <BsFillQuestionSquareFill />
          </div>
          <h4>24/7 Help & Support</h4>
          <p>
            Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg
            photo booth quinoa and fashion axe.
          </p>
          <div className="text-button">
            <Link to="#">
              Read More <BsArrowRightShort />
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    margin: 3rem auto 2rem auto;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .cols {
    background: #fff;
    margin: 5px 15px;
    width: 280px;
    height: 310px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
    padding: 26px 10px 0px 25px;
    border-radius: 0px 70px 0 0;
    position: relative;
    transition: 1s ease;
  }
  .icon svg {
    font-size: 2.1875rem;
    margin-bottom: 20px;
    color: #024f94;
  }
  .cols h4 {
    transition: all 0.3s;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .cols p {
    transition: all 0.3s;
    font-size: 15px;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
    line-height: 2;
  }
  .text-button {
    display: flex;
    align-items: center;
  }
  .text-button a {
    color: #024f94;
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .text-button svg {
    font-size: 20px;
    margin: 3px 0 0 4px;
    font-weight: bold;
  }
  .cols:hover {
    ${"" /* background-image: url(${serviceBg}); */}
    background-position: right top;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default ContactUsServices;
