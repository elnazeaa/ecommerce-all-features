import React, { useState } from "react";
import styled from "styled-components";
import { contents } from "../../utils/infos";

const MultiContent = (props) => {
  const [index, setIndex] = useState(0);

  const handleBtnClick = (number) => {
    setIndex((oldNumber) => {
      return (oldNumber = number);
    });
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <img
            src={contents[index].image}
            alt={contents[index].name}
            className="img"
          />
          <h2 className="title">{contents[index].name}</h2>
          <p className="firstText">{contents[index].text[0]}</p>
          <p className="secondText">{contents[index].text[1]}</p>
        </div>
        <div className="sideBar">
          {contents.map((item) => {
            return (
              <button
                className={`btn ${index === item.id ? "active" : ""}`}
                key={item.id}
                onClick={() => {
                  handleBtnClick(item.id);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding:3rem 10%;
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    gap: 2rem;
}
  }
  .sideBar {
    display: flex;
    flex-direction: column;
    flex:1 1 30rem;
  }
  .btn {
    background: #496595;
    border: 1px solid #f4f4f4;
    outline: none;
    color: #fff;
    font-size: 20px;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex:4 1 40rem;
  }
  .active {
    color: #e9723d;
    transition: 0.5 ease;
  }
  .firstText,
  .secondText {
    font-size: 14px;
    color: #7a7a7a;
    margin-bottom: 0px;
    line-height: 2;
  }
  img{
    width:100%
  }
 
`;

export default MultiContent;
