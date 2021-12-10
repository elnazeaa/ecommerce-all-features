import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { imgs } from "../../utils/infos";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 2,

      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Wrapper>
        <div className="container">
          <Slider {...settings}>
            {imgs.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.img} alt="slider" className="img" />
                </div>
              );
            })}
          </Slider>
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  padding: 3rem 0;
  .img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .slick-slide div {
    margin: 0 0.1rem;
  }
`;
