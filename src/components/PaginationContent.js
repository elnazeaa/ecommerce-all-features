import React, { useContext } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import styled from "styled-components";
import Spinner from "../components/Spinner";

function PaginationContent() {
  const { separated_all_employees, page, isLoading } =
    useContext(PaginationContext);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper className="page_container">
      {separated_all_employees[page].map((item) => {
        return (
          <div className="page_card" key={item.id}>
            <div className="img">
              <img src={item.avatar_url} alt={item.login} />
            </div>
            <div className="page_content">
              <h3>{item.login}</h3>
              <a
                href={item.html_url}
                className="page_link"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 auto;
  .page_card {
    width: 350px;
    background: #f4f4f4;
    border-radius: 5px;
    height: 350px;
    box-shadow: 0px 10px 13px -7px #bbbfca,
      6px 6px 13px -14px rgb(187 191 202 / 0%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img img {
    width: 50%;
    border-radius: 50%;
  }

  .page_content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .page_content a {
    display: block;
    background: #495464;
    padding: 8px;
    border-radius: 4px;
    color: #f4f4f4;
  }
`;

export default PaginationContent;
