import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BsBoxArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <div className="title">
            <h3>Lorem ipsum dolor, sit amet consectetur</h3>
            <p>
              Facilisis ac eget mauris nulla enim a diam posuere vel eleifend
              augue.
            </p>
          </div>
          <Link to="/" className="btn">
            Start Free Trial
          </Link>
        </div>
        <div className="footer">
          <div className="footer_container">
            <div className="footer_quick">
              <p>Quick Links</p>
              <li>
                <Link to="#">tips & tricks</Link>
              </li>
              <li>
                <Link to="#">services</Link>
              </li>
              <li>
                <Link to="#">works</Link>
              </li>
              <li>
                <Link to="#">services</Link>
              </li>
              <li>
                <Link to="#">tips & tricks</Link>
              </li>
            </div>
            <div className="footer_quick">
              <p>support</p>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Submit Ticket</Link>
              </li>
              <li>
                <Link to="#">Submit Ticket</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </div>
            <div className="footer_quick">
              <p>support</p>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Submit Ticket</Link>
              </li>
              <li>
                <Link to="#">Submit Ticket</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </div>
          </div>
          <div className="footer_email">
            <h5>Newsletter</h5>
            <form className="form">
              <p htmlFor="title">Subscribe newsletter to get updates..</p>
              <div className="inpt">
                <input type="email" name="email" />
                <BsBoxArrowRight />
              </div>
            </form>
            <div className="footer_social">
              <ul>
                <li>
                  <Link to="#">
                    <BsFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <BsLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <BsInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <BsYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>Copyright ©2021 All rights reserved </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #012e67;
  .container {
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 3rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
    flex-wrap: wrap;
  }
  .title h3 {
    font-size: 40px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 12px;
    color: #fff;
  }
  .title p {
    font-size: 18px;
    margin-bottom: 0;
    color: #dedede;
  }
  .btn {
    background: #2845ba;
    padding: 18px 15px;
    color: #fff;
    border-radius: 3px;
    transition: 0.5s all;
  }
  .btn:hover {
    background: transparent;
    border: 1px solid #2845ba;
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
  }
  .footer_container {
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 60%;
  }
  .footer_email {
    flex: 0 1 40%;
  }
  .footer_quick {
    flex: 0 1 33.33%;
  }
  .footer_quick p,
  .footer_email h5 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .footer_quick li a {
    color: #fff;
    font-weight: 400;
    font-size: 15px;
    line-height: 2;
  }
  .form p {
    color: #fff;
    font-size: 16px;
    display: inline-block;
  }
  .form input {
    width: 85%;
    height: 45px;
    padding: 11px 0px;
    border: 0;
    border-radius: 4px;
    background: #fff;
    color: #5c6168;
  }
  .footer_social ul {
    display: flex;
  }

  .footer_social ul li {
    margin: 5px 15px;
  }
  .footer_social ul li a {
    color: #fff;
    font-size: 20px;
  }
  .inpt {
    position: relative;
  }
  .inpt svg {
    position: absolute;
    transform: translate(-100%, 0%);
    background: #2845ba;
    height: 100%;
    width: 23px;
    padding: 0 15px;
    color: #fff;
    border-bottom: 5px;
  }
  .copy {
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    display: flex;
    justify-content: center;
  }
  .copy p {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    line-height: 2;
  }
  @media screen and (min-width: 150px) and (max-width: 768px) {
    .footer_quick {
      flex: 0 1 99%;
    }
    .footer_email {
      -ms-flex: 0 1 40%;
      flex: 0 1 99%;
    }
    .form input {
      width: 99%;
    }
  }
`;

export default Footer;
