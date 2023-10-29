import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import GhaffarImagest from "../../assets/img/ghaffar-hero.png";
import GhaffarResume from "../../assets/cv/ghaffar-resume2023.pdf";

const BannerSection = () => {
  return (
    <Container>
      <Row className="header-box d-flex align-items-center mt-5">
        <Col lg="6" className="px-4" data-aos="zoom-in-up" data-aos-duration="2000">
          <h1 className="mb-4">
            Ghaffar Hadista Hariadi
            <br />
            <span>Web Developer</span>
          </h1>
          <p className="mb-4">Junior Web Developer from Jakarta and hold Bachelor Degree of Informatics Engineering from Gunadarma University.</p>
          <a href={GhaffarResume} download="resume.pdf" className="btn btn-info text-light shadow-lg">
            Download CV
          </a>
        </Col>
        <Col lg="6" className="px-4">
          <img src={GhaffarImagest} alt="image-hero" data-aos="fade-up" data-aos-duration="2000" />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerSection;
