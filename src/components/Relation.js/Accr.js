import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accr = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper className="accr" key={item.id}>
      <div className="title">
        <h3>{item.title}</h3>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </button>
      </div>
      <div className={`content ${isOpen ? "active" : ""}`}>
        <p>{item.content}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffdbf5;
    padding: 2rem 0;
    border-radius: 5px;
    border-bottom: 1px solid #dcd7da;
  }
  .title h3 {
    margin: 0 1rem;
    font-size: 1.8rem;
    font-weight: normal;
  }
  .title button {
    margin: 0 1rem;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .title svg {
    font-size: 1.8rem;
  }
  .content {
    background: #fff;
    background: #fff;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    height: 0;
    transition: 0.5s ease;
  }
  .content p {
    line-height: 1.4;
    padding: 1rem;
    color: #010023;
    margin: 0;
    padding: 1rem 2rem;
  }
  .active {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    height: 100%;
    transition: 0.5s ease;
  }
`;

export default Accr;
