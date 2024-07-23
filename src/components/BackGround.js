import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import lottie from "lottie-web";
import animationData from "../assets/img/animation.json"; 

export const BackGround = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Java Developer",
    "Sql Developer",
    "Full Stack Developer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  useEffect(() => {
    const container = document.getElementById("animation-container");
    if (container) {
      lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData, 
      });
    }
    
    return () => {
      lottie.destroy();
    };
  }, []);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedtext = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedtext);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedtext === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedtext === "") {
      setIsDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi! I'm Jatin `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              "Welcome to my full stack developer portfolio! I'm Jatin, a
              skilled and creative developer with a passion for crafting
              beautiful, responsive, and user-friendly websites and
              applications. From frontend design to backend functionality, I
              thrive on bringing ideas to life in the digital realm."
            </p>
            <button onClick={() => console.log("connect")}>
              Let`s Connect<ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="animation"
              id="animation-container"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
