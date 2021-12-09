import React from "react";
import {
  ContactBack,
  ContactOurTeam,
  ContactUsHeader,
  IntroduceUs,
} from "../components/index";

const ContactUsPage = (props) => {
  return (
    <>
      <ContactUsHeader />
      <IntroduceUs />
      <ContactOurTeam />
      <ContactBack />
    </>
  );
};

export default ContactUsPage;
