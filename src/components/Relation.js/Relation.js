import React from "react";
import styled from "styled-components";
import air from "../../images/relation/01.png";
import sheep from "../../images/relation/02.png";
import cataloge from "../../images/relation/003.svg";
import img4 from "../../images/relation/04.svg";
import img5 from "../../images/relation/05.svg";
import img6 from "../../images/relation/06.svg";
import img7 from "../../images/relation/07.svg";
import Accordion from "./Accordion";

const Relation = (props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <h2>Complete Guide</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            labore iste ut dolorum, laboriosam, ratione nulla obcaecati adipisci
            dolor eligendi debitis non odio ipsam fugit cum. Minus voluptatem
            commodi dicta!
          </p>
          <div className="box">
            <div className="first">
              <div className="image">
                <img src={air} alt="air" />
              </div>
              <div className="txt">
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium voluptates aspernatur.
                </p>
              </div>
            </div>
            <div className="second">
              <div className="image">
                <img src={sheep} alt="air" />
              </div>
              <div className="txt">
                <h3>Digital Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Praesentium voluptates aspernatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ================ */}
        <div className="img">
          <img src={cataloge} alt="cataloge" />
        </div>
      </div>
      {/* ================================= */}
      <div className="container2">
        <div className="imgscontainer">
          <div className="imgbox">
            <img src={img4} alt="logo" />
          </div>
          <div className="imgbox">
            <img src={img5} alt="logo" />
          </div>
          <div className="imgbox">
            <img src={img6} alt="logo" />
          </div>
          <div className="imgbox">
            <img src={img7} alt="logo" />
          </div>
        </div>
        <div className="txtContainer">
          <Accordion />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  background-color: #ffecde;
  .container {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .content {
    flex: 1 1 45rem;
  }
  .img {
    flex: 1 1 42rem;
  }
  .content h2 {
    font-size: 3rem;
    font-weight: normal;
  }
  .content p {
    font-size: 1.6rem;
    letter-spacing: 1.1px;
    line-height: 1.4;
    padding: 0 2rem 0 0;
    color: #010023;
  }

  .img img {
    width: 90%;
    object-fit: cover;
  }
  .box p {
    width: 70%;
  }
  .image img {
    width: 100px;
    height: 100px;
    padding: 1rem;
    margin: 0 1rem 0 0;
  }
  .first,
  .second {
    margin: 2rem 0 4rem 0;
    display: flex;
  }

  ${"" /* ============================== */}
  .container2{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .imgscontainer{
    display: grid;
    grid-template-columns: repeat(2,minmax(20rem,1fr));
    gap: 2rem;
    flex:1 1 40rem;
  }

  .txtContainer{
    flex:1 1 40rem;
  }

  .imgbox{
    border: 2px solid #baaaf7;
    border-radius: 5px;
    position:relative;
  }

  .imgbox img{
    width:100%
  }
 

  @media (max-width: 425px) {
    .first,
    .second {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .box p {
      width: 100%;
    }
    .content p {
      padding: 0;
    }
    .imgscontainer{
      grid-template-columns: repeat(2,minmax(12rem,1fr));
    }
  } 
  }
`;

export default Relation;
