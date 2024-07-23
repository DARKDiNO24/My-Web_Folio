import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Resume } from "./Resume";
import { useState } from "react";

export const Footer = () => {
    const [linkedInUrl, setLinkedInUrl] = useState(
      "https://www.linkedin.com/in/jatin-khanvilkar-b875b5221"
    );
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Resume></Resume>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedInUrl}>
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
