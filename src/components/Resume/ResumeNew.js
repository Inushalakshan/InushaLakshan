import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Soumyajit_Behera.pdf";
import { AiOutlineDownload, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Container style={{ maxWidth: "900px", marginTop: "30px", marginBottom: "40px" }}>
          <h2 className="project-heading" style={{ fontSize: "1.8em", marginBottom: "25px" }}>
            Professional <strong className="purple">References</strong>
          </h2>
          <Row>
            <Col md={6} className="mb-4 text-start">
              <Card
                className="quote-card-view h-100"
                style={{
                  border: "1px solid rgba(200, 137, 230, 0.3)",
                  borderRadius: "15px",
                  padding: "15px",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <Card.Body>
                  <h4 style={{ color: "#c770f0", fontSize: "1.2em", fontWeight: "600" }}>
                    <FaUserTie style={{ marginRight: "10px" }} />
                    Ms. U. S. Samarasinghe
                  </h4>
                  <p style={{ color: "#e2d9ec", marginBottom: "8px", fontStyle: "italic" }}>
                    Lecturer - University of Sri Jayewardenepura (USJP)
                  </p>
                  <p style={{ color: "#ccc", margin: "4px 0", fontSize: "0.95em" }}>
                    <AiOutlinePhone style={{ marginRight: "6px" }} /> 075 400 1344
                  </p>
                  <p style={{ color: "#ccc", margin: "4px 0", fontSize: "0.95em" }}>
                    <AiOutlineMail style={{ marginRight: "6px" }} /> upekshasamarasinghe@sjp.ac.lk
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4 text-start">
              <Card
                className="quote-card-view h-100"
                style={{
                  border: "1px solid rgba(200, 137, 230, 0.3)",
                  borderRadius: "15px",
                  padding: "15px",
                  background: "rgba(255, 255, 255, 0.02)",
                }}
              >
                <Card.Body>
                  <h4 style={{ color: "#c770f0", fontSize: "1.2em", fontWeight: "600" }}>
                    <FaUserTie style={{ marginRight: "10px" }} />
                    Mr. Nalinda Amarasinghe
                  </h4>
                  <p style={{ color: "#e2d9ec", marginBottom: "8px", fontStyle: "italic" }}>
                    Teacher - IT
                  </p>
                  <p style={{ color: "#ccc", margin: "4px 0", fontSize: "0.95em" }}>
                    <AiOutlinePhone style={{ marginRight: "6px" }} /> 077 594 6969
                  </p>
                  <p style={{ color: "#ccc", margin: "4px 0", fontSize: "0.95em" }}>
                    <AiOutlineMail style={{ marginRight: "6px" }} /> nalinda594@gmail.com
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
