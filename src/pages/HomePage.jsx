import { Container, Row, Col } from "react-bootstrap";

import WebSection from "../components/homecomp/WebComponents";
import AboutSection from "../components/homecomp/AboutComponents";
import BannerSection from "../components/homecomp/BannerComponents";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <BannerSection />
      </header>
      <div className="kelas w-100 min-vh-100">
        <AboutSection />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0dcaf0"
          fill-opacity="1"
          d="M0,128L20,133.3C40,139,80,149,120,149.3C160,149,200,139,240,160C280,181,320,235,360,261.3C400,288,440,288,480,272C520,256,560,224,600,197.3C640,171,680,149,720,138.7C760,128,800,128,840,112C880,96,920,64,960,90.7C1000,117,1040,203,1080,240C1120,277,1160,267,1200,240C1240,213,1280,171,1320,138.7C1360,107,1400,85,1420,74.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
        ></path>
      </svg>
      <div className="web w-100 min-vh-100">
        <WebSection />
      </div>
    </div>
  );
};

export default HomePage;
