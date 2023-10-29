import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";

import TabingAbout from "../partials/TabingAbout";

import GhaffarAbout from "../../assets/img/ghaffar-about.png";

const WebSection = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center fw-bold text-black">About me</h1>
          <p className="text-center text-black">my works experience, skills and education.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="4">
          <img src={GhaffarAbout} alt="image-about" data-aos="fade-left" data-aos-duration="2000" />
        </Col>
        <Col lg="8" data-aos="fade-right" data-aos-duration="2000">
          <div className="text-about px-4">
            <h3>
              Hello! My name is Ghaffar, Junior Web Developer from Jakarta. I hold Bachelor Degree of Informatics Engineering from Gunadarma University. As a junior web developer, I love to use my creativity in building websites. Although
              lack of experience, i believe i have a passion in web development. I intrested in using ReactJS and Laravel for Web Development. I also using Git & Github for portfolio.
            </h3>
          </div>
          <TabingAbout />
        </Col>
      </Row>
    </Container>
  );
};

export default WebSection;
