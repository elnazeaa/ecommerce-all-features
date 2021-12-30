import React from "react";
import styled from "styled-components";
import { teams, icons } from "../../utils/infos";

const ContactOurTeam = (props) => {
  return (
    <Wrapper>
      <div className="container">
        {teams.map((item) => {
          return (
            <div className="box" key={item.id}>
              <div className="img">
                <img src={item.img} alt="item.name" />
              </div>
              <div className="content">
                <h5>{item.name}</h5>
                <span>{item.job}</span>
                <div className="iconBox">
                  {icons.map((icon) => {
                    return (
                      <li className="icon" key={icon.id}>
                        {icon.name}
                      </li>
                    );
                  })}
                </div>
                <p className="desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 10%;
  background: #f4f6f1;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 10rem 2rem;
  }
  .box {
    position: relative;
  }
  .img img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 6px solid #bbafb3;
  }
  .img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background: #fff;
    padding: 6rem 3rem 0 3rem;
    border-radius: 5px;
    transition: 1s ease-in-out;
    margin-top: 3rem;
  }
  .content:hover {
    background: #d6d6d6;
  }
  .content h5 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 1px;
  }
  .content span {
    color: #111111;
    display: block;
    font-weight: normal;
    font-size: 17px;
    margin: 1.5rem;
    text-transform: lowercase;
  }
  .content p {
    color: #2d2d2d;
    font-size: 17px;
    padding: 0rem 2rem;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1.3px;
  }

  .iconBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iconBox li {
    color: #fff;
    background: #bbafb3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
  }
`;

export default ContactOurTeam;
