import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import GhaffarWeb from "../../assets/img/ghaffar-web.png";
import GhaffarGreen from "../../assets/img/greenchem.jpg";
import GhaffarPtabs from "../../assets/img/ptabs.jpg";
import GhaffarRv from "../../assets/img/rvmpage.jpg";
import GhaffarZom from "../../assets/img/zom81.jpg";

const WebSection = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center fw-bold text-light">Web Projects</h1>
          <p className="text-center text-light">my recents web project.</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="6">
          <Row data-aos="zoom-in-down" data-aos-duration="1000">
            <Col lg="6" md="6">
              <div className="project-web">
                <img src={GhaffarGreen} alt="image-about" className="" />
                <div className="bg-dark mb-4">
                  <h3 className="p-3 text-light fs-6">PT Green chemicals</h3>
                  <a href="https://greenchem.co.id/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                    Visit
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="project-web">
                <img src={GhaffarPtabs} alt="image-about" className="" />
                <div className="bg-dark mb-4">
                  <h3 className="p-3 text-light fs-6">PT Anugrah Bumi Samudra</h3>
                  <a href="https://www.ptabspackaging.com/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                    Visit
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="project-web">
                <img src={GhaffarRv} alt="image-about" className="" />
                <div className="bg-dark mb-4">
                  <h3 className="p-3 text-light fs-6">Rvmpage</h3>
                  <a href="https://rvmpage.com/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                    Visit
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="project-web">
                <img src={GhaffarZom} alt="image-about" className="" />
                <div className="bg-dark mb-4">
                  <h3 className="p-3 text-light fs-6">Zom81</h3>
                  <a href="https://zom81.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                    Visit
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <img src={GhaffarWeb} alt="image-about" className="web-mot" data-aos="fade-left" data-aos-duration="2000" />
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <button className="text-center p-2 btn-web btn btn-dark text-light shadow-lg" onClick={() => navigate("/web")}>
          See more!
        </button>
      </div>
    </Container>
  );
};

export default WebSection;
