import { Container, Row, Col } from "react-bootstrap";

import GhaffarDes from "../assets/img/ghaffar-design.png";

const DesignPage = () => {
  return (
    <div className="design-page ">
      <Container>
        <Row className="header-box d-flex align-items-center mt-5">
          <Col lg="6" className="px-4" data-aos="zoom-out-up" data-aos-duration="2000">
            <h1 className="mb-4">Design Page</h1>
            <p className="mb-4">Sorry, i cant show you all my design here. But, dont worry you can check it on my design Instgram account.</p>
            <a href="https://www.instagram.com/jhaff.palette/" target="_blank" className="btn btn-info text-light shadow-lg">
              Check it out!
            </a>
          </Col>
          <Col lg="6" className="px-4">
            <img src={GhaffarDes} alt="image-hero" className="img-des" data-aos="zoom-out" data-aos-duration="2000" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignPage;
