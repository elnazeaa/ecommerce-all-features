import React from "react";
import { News, NewsHeader, NewsSearchInput } from "../components";
import SimpleSlider from "../components/hackerNews/Slider";

const MagazinPage = (props) => {
  return (
    <>
      <NewsHeader />
      <NewsSearchInput />
      <News />
      <SimpleSlider />
    </>
  );
};

export default MagazinPage;
