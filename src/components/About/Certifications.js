import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaCertificate, FaUsers, FaLanguage } from "react-icons/fa";

function Certifications() {
  const certs = [
    {
      title: "SQL for Data Science",
      issuer: "University of California, Davis",
    },
    {
      title: "Data Analysis and Visualization with Power BI",
      issuer: "Microsoft",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
    },
    {
      title: "SAP Professional Fundamentals",
      issuer: "SAP",
    },
  ];

  return (
    <div style={{ paddingBottom: "30px" }}>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        {certs.map((cert, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card
              className="quote-card-view h-100"
              style={{
                border: "1px solid rgba(200, 137, 230, 0.3)",
                borderRadius: "15px",
                padding: "15px",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              <Card.Body className="text-start">
                <h4 style={{ color: "#c770f0", fontSize: "1.15em", fontWeight: "600" }}>
                  <FaCertificate style={{ marginRight: "10px", color: "#F2C811" }} />
                  {cert.title}
                </h4>
                <p style={{ color: "#ddd", marginBottom: "0", fontSize: "0.95em" }}>
                  <strong>Issued By:</strong> {cert.issuer}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
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
              <h4 style={{ color: "#c770f0", fontSize: "1.2em", fontWeight: "600", marginBottom: "15px" }}>
                <FaUsers style={{ marginRight: "10px" }} />
                Extra-Curricular Activities
              </h4>
              <h6 style={{ color: "white" }}>
                Students’ Association of Information Technology (S@IT)
              </h6>
              <p style={{ color: "#a588c0", fontSize: "0.9em", marginBottom: "5px" }}>
                University of Sri Jayewardenepura
              </p>
              <ul style={{ color: "#ccc", fontSize: "0.9em", paddingLeft: "20px" }}>
                <li>External Links Committee Member (Jan 2026 – Present)</li>
                <li>Active Member (2024 – Present)</li>
              </ul>
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
              <h4 style={{ color: "#c770f0", fontSize: "1.2em", fontWeight: "600", marginBottom: "15px" }}>
                <FaLanguage style={{ marginRight: "10px" }} />
                Languages & Competencies
              </h4>
              <p style={{ color: "#ddd", marginBottom: "8px" }}>
                <strong>Languages:</strong> Sinhala (Native), English (Professional)
              </p>
              <p style={{ color: "#ddd", marginBottom: "0" }}>
                <strong>Key Competencies:</strong> Analytical Thinking, Data Cleaning & Preprocessing, Exploratory Data Analysis, Dashboard Design, Business Communication
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Certifications;
