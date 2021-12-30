import React from "react";
import styled from "styled-components";
import headerImg from "../images/paginationHeader.png";

const PaginationHeader = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="textSection">
          <h1>Our Team</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            adipisci dolorem deleniti itaque, eius vitae dicta asperiores sed
            cupiditate quasi.
          </p>
        </div>
        <div className="imgSection">
          <img src={headerImg} alt="header" className="img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(173deg, #c2d1e5 64%, #fff 30%);
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 10%;
    flex-wrap: wrap;
  }
  .img {
    width: 100%;
  }
  .textSection {
    flex: 1 1 40rem;
  }
  .imgSection {
    flex: 1 1 40rem;
  }
  .textSection h1 {
    font-size: 4rem;
  }
  .textSection p {
    font-size: 20px;
    padding: 0 5rem 0 0;
    letter-spacing: 1.5px;
    line-height: 1.7;
  }
  @media screen and (min-width: 150px) and (max-width: 755px) {
    background: linear-gradient(180deg, #c2d1e5 83%, #fff 17%);
    .container {
      flex-direction: column-reverse;
      margin: 0 auto;
      padding: 8rem 1rem;
    }
  }
`;

export default PaginationHeader;
