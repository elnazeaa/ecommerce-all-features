import React, { useContext } from "react";
import styled from "styled-components";
import { HackerNewsContex } from "../../contexts/HackerNewsContext";

const NewsSearchInput = (props) => {
  const { searchQuery, handleSearchQuery } = useContext(HackerNewsContex);
  return (
    <Wrapper>
      <div className="container">
        <input
          type="text"
          className="search"
          placeholder="Search News..."
          onChange={handleSearchQuery}
          value={searchQuery}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10% 0 10%;
  display: flex;
  justify-content: center;
  .search {
    width: 390px;
    padding: 10px 5px;
    border: none;
    border-bottom: 2px solid #9278a7;
    font-size: 18px;
    outline: none;
  }
`;

export default NewsSearchInput;
