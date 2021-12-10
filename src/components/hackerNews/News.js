import React, { useContext } from "react";
import { HackerNewsContex } from "../../contexts/HackerNewsContext";
import Spinner from "../../components/Spinner";
import styled from "styled-components";
import moment from "moment";
import noImg from "../../images/news/noimage.jpg";
import { Link } from "react-router-dom";

const News = (props) => {
  const { all_news, loading, searchQuery } = useContext(HackerNewsContex);
  if (loading) {
    return <Spinner />;
  }

  if (!searchQuery) {
    return (
      <Wrapper>
        <p className="text">Search Some News...</p>
      </Wrapper>
    );
  }

  if (searchQuery && all_news.length === 0) {
    return (
      <Wrapper>
        <p className="text">There is no result...Search another term.</p>
        <Spinner />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        {all_news &&
          all_news.map((news, index) => {
            return (
              <div className="box" key={index}>
                <div className="img">
                  <img
                    src={news.urlToImage === null ? noImg : news.urlToImage}
                    alt={news.source.name}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{news.title}</h5>
                  <time dateTime={news.publishedAt}>
                    {moment(news.publishedAt).format("ll")}
                  </time>
                  <p>{news.content}</p>
                  <Link to={news.url}>Go To Link</Link>
                </div>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 10%;
  .text {
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
  }

  .img img {
    width: 100%;
    object-fit: cover;
    height: 220px;
  }
  .box {
    border-radius: 5px;
  }
  .content h5 {
    color: #07090c;
    font-weight: 600;
    font-size: 21.5px;
    text-transform: uppercase;
    margin: 0px;
    margin-bottom: 0.1rem;
  }
  .content time {
    display: inline-block;
    color: #9f9f9f;
    font-weight: 400;
    font-size: 12.5px;
    text-transform: uppercase;
  }
  .content p {
    color: #2c2c2c;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.2px;
  }
`;

export default News;
