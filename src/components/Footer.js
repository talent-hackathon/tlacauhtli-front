import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="font-medium footerBIO">
      <Container fluid className="text-center py-5 text-light w-100">
        <i className="fal fa-copyright fa-flip-horizontal" />{" "}
        {new Date().getFullYear()} Copyright: {"Tlacautli"}
      </Container>
    </div>
  );
};

export default Footer;
