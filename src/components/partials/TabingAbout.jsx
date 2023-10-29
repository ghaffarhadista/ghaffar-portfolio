import React from "react";
import { Container, Row, Tabs, Tab } from "react-bootstrap";

const TabingAbout = () => {
  return (
    <Container className="px-4 tabing">
      <Row className="justify-content-center">
        <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
          <Tab eventKey="tab-1" title="Skills">
            <small>.Web Development</small>
            <h5>Web App Development</h5>
            <h6>React JS, Laravel, Bootstrap, Tailwind, JQuery and MySQL for web Development.</h6>
            <hr />
            <small>.Design</small>
            <h5>Poster design and Social media</h5>
            <h6>Adobe Photoshop for design.</h6>
          </Tab>
          <Tab eventKey="tab-2" title="Experience">
            <h5>PT Anugrah Bumi Samudra</h5>
            <small>Aug 2022 - Sep 2022</small>
            <p>Freelance Web Developer as Frontend</p>
            <hr />
            <h5>SAMCGI</h5>
            <small>Apr 2023 - Jul 2023</small>
            <p>Junior Web Developer as Frontend</p>
            <hr />
            <h5>CV Anugrah Mandiri</h5>
            <small>Jul 2023 - Aug 2023</small>
            <p>Freelance Web Developer as Fullstack</p>
          </Tab>
          <Tab eventKey="tab-3" title="Education">
            <h5>SMAN 39 Jakarta</h5>
            <small>High School Diploma In IPA</small>
            <hr />
            <h5>Gunadarma University</h5>
            <small>Bachelor Degree in Informatics Engineer, 3.51/4.00</small>
            <li className="edu">Workshop HTML</li>
            <li className="edu">Course : Fundamental web programming, Fundamental DBMS, SQL Server For Intermediate, Dasar Bahasa Pemrograman Javascript, Dasar Pembuatan Aplikasi Web</li>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default TabingAbout;
