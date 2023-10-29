import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// import GhaffarFooter from "../../assets/img/ghaffar-footer.png";

const FooterComponent = () => {
  return (
    <div className="footer" id="footer">
      <Container>
        <Row>
          <Col lg="5">
            <h3 className="fw-bold text-light">Ghaffar Hadista</h3>
            <small className="text-info">portfolio website.</small>
            <div className="soc-row">
              <Link className="link-soc" to={"https://www.instagram.com/ghaffarhadista/"} target="_blank">
                <i class="bi bi-instagram"></i>
              </Link>
              <Link className="link-soc" to={"https://www.linkedin.com/in/ghaffarh/"} target="_blank">
                <i class="bi bi-linkedin"></i>
              </Link>
              <Link className="link-soc" to={"https://github.com/ghaffarhadista"} target="_blank">
                <i class="bi bi-github"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
