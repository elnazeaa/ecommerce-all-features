import React, { useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import styled from "styled-components";

const PaginationPage = (props) => {
  const { separated_all_employees, handleClick, handlePrev, handleNext, page } =
    useContext(PaginationContext);

  return (
    <Wrapper className="btns">
      <button
        className="prev btn"
        data-target="prev"
        onClick={() => handlePrev("prev")}
      >
        prev
      </button>
      {separated_all_employees.map((item, index) => {
        if (index + 1 === 10) {
          return false;
        }
        return (
          <button
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            className={`${index === page ? "active btn" : "btn"}`}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        className="next btn"
        data-target="next"
        onClick={() => handleNext("next")}
      >
        next
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-wrap: wrap;
  .btn {
    outline: none;
    background: #496595;
    padding: 1rem;
    color: #f4f4f4;
    font-size: 17px;
    cursor: pointer;
    border: 0.5px solid #5b78a9;
  }
  .active {
    background: #90a7c4;
  }
`;

export default PaginationPage;
