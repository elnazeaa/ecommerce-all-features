import React from "react";
import styled from "styled-components";
import newsHeader from "../../images/news/newsHeader.jpg";

const NewsHeader = (props) => {
  return (
    <Wrapper>
      <div
        className="container"
        style={{ backgroundImage: `url(${newsHeader})` }}
      >
        <div className="content">
          <h1>Search News</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    height: 70vh;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content h1 {
    margin: 0;
    font-weight: 400;
    color: #fff;
    font-size: 60px;
  }
  .content p {
    color: #fff;
    font-weight: 600;
    font-size: 30px;
  }
`;

export default NewsHeader;
