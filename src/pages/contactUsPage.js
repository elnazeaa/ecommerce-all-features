import React from "react";
import {
  ContactUsFeature,
  ContactUsHeader,
  ContactUsServices,
} from "../components/index";

const ContactUsPage = (props) => {
  return (
    <>
      <ContactUsHeader />
      <ContactUsServices />
      <ContactUsFeature />
    </>
  );
};

export default ContactUsPage;
