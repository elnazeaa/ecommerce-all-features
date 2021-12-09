import React from "react";
import {
  AboutHeader,
  AboutWeAreDiff,
  MultiContent,
  OurCompany,
  ContactUsServices,
} from "../components/index";

const AboutUsPage = (props) => {
  return (
    <>
      <AboutHeader />
      <ContactUsServices />
      <OurCompany />
      <AboutWeAreDiff />
      <MultiContent />
    </>
  );
};

export default AboutUsPage;
