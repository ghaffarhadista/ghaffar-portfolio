import { Container, Row, Col } from "react-bootstrap";

import Green from "../assets/img/greenchem.jpg";
import Ptabs from "../assets/img/ptabs.jpg";
import Rv from "../assets/img/rvmpage.jpg";
import Zom from "../assets/img/zom81.jpg";
import Nggak from "../assets/img/nggakreatif.jpg";
import Peka from "../assets/img/pekadata.jpg";
import Rm from "../assets/img/rm.jpg";
import Am from "../assets/img/anyamanmeta.jpg";
import Ks from "../assets/img/ks.jpg";
import Digi from "../assets/img/digi.jpg";
import Tb from "../assets/img/tb.jpg";
import Mp from "../assets/img/mp.jpg";
import Typo from "../assets/img/typo.jpg";

const WebPage = () => {
  return (
    <div className="web-page min-vh-100">
      <Container>
        <Row>
          <Col>
            <h1 className="fw-bold text-center">Web Development</h1>
            <p className="text-center text-info">my recents web project.</p>
          </Col>
        </Row>
        <Row data-aos="zoom-in-down" data-aos-duration="2000">
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Green} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">PT Green chemicals</h3>
                <a href="https://greenchem.co.id/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Ptabs} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">PT Anugrah Bumi Samudra</h3>
                <a href="https://www.ptabspackaging.com/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Rv} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Rvmpage</h3>
                <a href="https://rvmpage.com/" target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Zom} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Zom81</h3>
                <a href="https://zom81.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Peka} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Peka Data</h3>
                <a href="https://pekadata.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Nggak} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Nggak Kreatif</h3>
                <a href="https://nggakreatif.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Rm} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Ruang Merah</h3>
                <a href="https://ruangmerah.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Am} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Anyaman Meta</h3>
                <a href="https://anyamanmeta.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Ks} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Kata Sakti</h3>
                <a href="https://katasakti.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Digi} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Samdigi</h3>
                <a href="https://samdigi.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Mp} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Metrik Pro</h3>
                <a href="https://metrikpro.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Typo} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Typografis</h3>
                <a href="https://typografis.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="project-web-page shadow">
              <img src={Tb} alt="image-about" className="rounded-top" />
              <div className="bg-dark mb-4">
                <h3 className="p-3 text-light fs-6">Titik Beku</h3>
                <a href="https://titikbeku.com/ " target="_blank" className="btn btn-light text-dark p-2 mb-3 ms-3 fw-semibold">
                  Visit
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WebPage;
