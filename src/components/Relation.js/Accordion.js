import React, { useState } from "react";
import styled from "styled-components";
import { accr } from "../../utils/infos";
import Accr from "./Accr";

const Accordion = (props) => {
  return (
    <Wrapper>
      {accr.map((item) => {
        return <Accr item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Accordion;
