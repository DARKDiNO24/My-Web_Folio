import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import animationData from "../assets/img/Contact-Animation.json";
import lottie from "lottie-web";

export const Contact = () => {
  useEffect(() => {
    const container = document.getElementById("contact-animation-container");
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

  const initialDetails = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initialDetails);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // You can perform form submission logic here, for example, sending data to a server

    // For demonstration purpose, let's just console log the form details
    console.log(formDetails);

    // Simulating a successful submission after 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormDetails(initialDetails);
    }, 1000);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Get In Touch</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formDetails.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formDetails.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formDetails.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formDetails.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
              {isSuccess && (
                <p className="text-success">Message sent successfully!</p>
              )}
            </Form>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div
              className="contact-animation"
              id="contact-animation-container"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
