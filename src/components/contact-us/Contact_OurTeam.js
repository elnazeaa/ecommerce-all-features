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
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 7rem 2rem;
  }
  .box {
    position: relative;
  }
  .img img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 6px solid #012e67;
  }
  .img {
    width: 150px;
    height: 150px;
    position: absolute;
    top: -2%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    height: 212px;
    background: #fff;
    padding: 6rem 0 0 0;
    border-radius: 5px;
    transition: 1s ease-in-out;
  }
  .content:hover {
    background: rgb(73, 101, 149);
  }
  .content h5 {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 1px;
  }
  .content span {
    color: #012e67;
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0.5rem;
  }
  .content p {
    color: #8c8f93;
    padding: 0rem 2rem;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1px;
  }

  .iconBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .iconBox li {
    color: #fff;
    background: #012e67;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin: 5px;
  }
`;

export default ContactOurTeam;
