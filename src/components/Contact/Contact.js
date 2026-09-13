import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="contact-title">
          Get in <strong className="purple">Touch</strong>
        </h1>
        <p className="contact-subtitle">
          Feel free to reach out to connect, collaborate, or discuss data analytics and business opportunities!
        </p>

        {/* Contact Channel Cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          {/* Email Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="contact-card contact-channel-card">
              <div className="contact-icon-wrapper large">
                <AiOutlineMail />
              </div>
              <h4 className="contact-card-heading">Email</h4>
              <p className="contact-card-text">inushaacc@gmail.com</p>
              <a
                href="mailto:inushaacc@gmail.com"
                className="btn contact-action-btn"
              >
                Send Email
              </a>
            </div>
          </Col>

          {/* Phone Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="contact-card contact-channel-card">
              <div className="contact-icon-wrapper large">
                <AiOutlinePhone />
              </div>
              <h4 className="contact-card-heading">Phone</h4>
              <p className="contact-card-text">+94 76 889 8584</p>
              <a
                href="tel:+94768898584"
                className="btn contact-action-btn"
              >
                Call Now
              </a>
            </div>
          </Col>

          {/* GitHub Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="contact-card contact-channel-card">
              <div className="contact-icon-wrapper large">
                <AiFillGithub />
              </div>
              <h4 className="contact-card-heading">GitHub</h4>
              <p className="contact-card-text">Inushalakshan</p>
              <a
                href="https://github.com/Inushalakshan"
                target="_blank"
                rel="noreferrer"
                className="btn contact-action-btn"
              >
                Open GitHub
              </a>
            </div>
          </Col>

          {/* LinkedIn Card */}
          <Col lg={3} md={6} sm={12} className="mb-4">
            <div className="contact-card contact-channel-card">
              <div className="contact-icon-wrapper large">
                <FaLinkedinIn />
              </div>
              <h4 className="contact-card-heading">LinkedIn</h4>
              <p className="contact-card-text">inusha-lakshan</p>
              <a
                href="https://www.linkedin.com/in/inusha-lakshan/"
                target="_blank"
                rel="noreferrer"
                className="btn contact-action-btn"
              >
                Connect
              </a>
            </div>
          </Col>
        </Row>

        {/* Collaboration Note & Social Media Connections */}
        <Row style={{ justifyContent: "center" }}>
          <Col lg={8} md={10} sm={12}>
            <div className="contact-card text-center contact-social-card">
              <div className="contact-note-highlight">
                💡 <strong>Let's Collaborate:</strong> I am actively seeking
                opportunities in Data Analytics, Business Intelligence, and
                Power BI dashboard development.
              </div>

              <h4 style={{ color: "#ffffff", marginTop: "30px", marginBottom: "15px", fontWeight: "600" }}>
                FIND ME ON
              </h4>
              <p style={{ color: "#e2d9ec", marginBottom: "20px" }}>
                Feel free to <span className="purple">connect</span> with me
              </p>

              <ul
                className="home-about-social-links"
                style={{
                  justifyContent: "center",
                  display: "inline-flex",
                  gap: "15px",
                  padding: 0,
                  margin: 0,
                }}
              >
                <li className="social-icons" style={{ padding: 0 }}>
                  <a
                    href="https://github.com/Inushalakshan"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="GitHub"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons" style={{ padding: 0 }}>
                  <a
                    href="https://www.linkedin.com/in/inusha-lakshan/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons" style={{ padding: 0 }}>
                  <a
                    href="mailto:inushaacc@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    title="Email"
                  >
                    <AiOutlineMail />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
