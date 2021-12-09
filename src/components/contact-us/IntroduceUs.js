import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import introduce from "../../images/about/introduce.jpg";

const IntroduceUs = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="image">
          <img src={introduce} alt="introduce" className="img" />
        </div>
        <div className="content">
          <em>ABOUT US</em>
          <h3>
            We Design, Build Brands & <br />
            Digital Projects{" "}
          </h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <Link to="#" className="btn">
            Learn More
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 9%;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .image {
    flex: 2 1 40rem;
    display: flex;
    justify-content: center;
  }
  .content {
    flex: 1 1 40rem;
  }
  .image img {
    width: 80%;
    border-radius: 50% 50% 0 50%;
    height: 467px;
    object-fit: cover;
  }
  .content em {
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
    color: #feb82c;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .content h3 {
    font-size: 38px;
    font-weight: 700;
    line-height: 1.4;
  }
  .content p {
    font-size: 16px;
    line-height: 1.8;
    font-weight: 400;
    color: #8c8c8c;
  }
  .btn {
    background: #012e67;
    color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    display: inline-block;
    border-radius: 5px;
  }
  @media (max-width: 700px) {
    padding: 2rem 9%;

    .image {
      margin-bottom: 1rem;
    }

    .image img {
      width: 90%;
      border-radius: 0;
      height: 400px;
      object-fit: cover;
    }
    .content h3 {
      margin: 0;
    }
  }
  @media (max-width: 1559px) {
    .image {
      flex: 2 1 30em;
    }
    .content {
      flex: 1 1 30rem;
    }
  }
`;

export default IntroduceUs;
