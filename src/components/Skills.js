import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Skilled Full Stack Developer proficient in Java, HTML5, CSS,
                excelling in both front-end and back-end development.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/java/java-original.svg"
                    alt="Java"
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img
                    src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                    alt="HTML5"
                  />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/sqldeveloper/sqldeveloper-original.svg"
                    alt="SQL Developer"
                  />
                  <h5>SQL Developer</h5>
                </div>
                <div className="item">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original-wordmark.svg"
                    alt="Spring"
                  />
                  <h5>Spring</h5>
                </div>
                <div className="item">
                  <img
                    src=" https://raw.githubusercontent.com/izumin5210/emojipack-for-devicon/master/png/react.png"
                    alt="React"
                  />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
