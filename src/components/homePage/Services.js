import React from "react";
import styled from "styled-components";
import { services } from "../../utils/infos";

const Services = (props) => {
  return (
    <Wrapper>
      <div className="services">
        <h1>
          Our <span>Services</span>
        </h1>
      </div>
      <div className="container">
        {services.map((item) => {
          return (
            <div className="box">
              <div className="img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <p>{item.txt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #fff8e8;
  padding: 3rem 10%;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 1rem;
  }
  .services h1 {
    text-align: center;
    padding-bottom: 3rem;
    font-size: 4rem;
    color: #010003;
    font-weight: normal;
    margin: 0;
  }
  .services span {
    color: #010023;
    border-radius: 0.5rem;
    background: #ffdbf5;
    padding: 0 1.5rem;
  }
  .container .box {
    display: flex;
    flex-flow: column;
    background: #fff;
    border-radius: 5px;
    padding: 2rem;
    margin: 0 1rem;
    box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 10%);
  }

  .container .img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
  }

  .content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .content h3 {
    color: #010023;
    font-size: 2.5rem;
    font-weight: normal;
    margin: 0;
    margin-top: 1rem;
    padding-top: 1.5rem;
  }
  .content p {
    color: #010023;
    font-size: 1.5rem;
    padding: 1rem 0;
    line-height: 1.8;
    text-align: center;
  }
`;

export default Services;
