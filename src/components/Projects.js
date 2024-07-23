import React, { useRef } from "react";
import { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { arrowBackOutline, arrowForwardOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Container, Row, Col } from "react-bootstrap";

export const Project = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ioniconsModuleScript = document.createElement("script");
    ioniconsModuleScript.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
    ioniconsModuleScript.type = "module";
    document.body.appendChild(ioniconsModuleScript);

    const ioniconsNomoduleScript = document.createElement("script");
    ioniconsNomoduleScript.src =
      "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
    ioniconsNomoduleScript.setAttribute("nomodule", "");
    document.body.appendChild(ioniconsNomoduleScript);

    return () => {
      document.body.removeChild(ioniconsModuleScript);
      document.body.removeChild(ioniconsNomoduleScript);
    };
  }, []);

  const activate = (e) => {
    const items = Array.from(
      sliderRef.current.querySelectorAll(".project-item")
    );
    if (e.target.classList.contains("next")) {
      const firstItem = items.shift();
      sliderRef.current.appendChild(firstItem);
    } else if (e.target.classList.contains("prev")) {
      const lastItem = items.pop();
      sliderRef.current.insertBefore(lastItem, items[0]);
    }
  };

  return (
    <section className="gradient" id="projects">
      <Container className="project-container">
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="project-header">Projects</h2>
            <ul className="slider" ref={sliderRef}>
              <li
                className="project-item"
                style={{
                  color: "#212121",
                }}
              >
                <div className="project-content">
                  <h2 className="project-title">
                    "Bookstore Management System"
                  </h2>
                  <p className="description">
                    The Bookstore Management System is a core java based
                    application that use to oracle database.
                  </p>
                  <a
                    href="https://github.com/DARKDiNO24/BookstoreManagementSystem.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </li>
              <li
                className="project-item"
                style={{
                  color: "#212121",
                }}
              >
                <div className="project-content">
                  <h2 className="project-title">"Web folio"</h2>
                  <p className="description">
                    I'm Jatin, a dedicated web developer with a passion for
                    creating innovative and user-friendly digital experiences.
                    Within this portfolio, I showcase my skills in web
                    development, boasting expertise in HTML5 and CSS.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </li>
            </ul>
            <nav className="nav">
              <IonIcon
                icon={arrowBackOutline}
                className="btn prev"
                onClick={activate}
              />
              <IonIcon
                icon={arrowForwardOutline}
                className="btn next"
                onClick={activate}
              />
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
