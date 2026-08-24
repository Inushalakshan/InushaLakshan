import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col md={12} className="text-start">
        <Card className="quote-card-view mb-4" style={{ border: "1px solid rgba(200, 137, 230, 0.3)", borderRadius: "15px", padding: "20px" }}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h3 style={{ color: "#c770f0", fontSize: "1.4em", fontWeight: "600" }}>
                <FaGraduationCap style={{ marginRight: "10px" }} />
                B.Sc. in Business Information Systems
              </h3>
              <span style={{ color: "#a588c0", fontStyle: "italic" }}>2024 – 2027</span>
            </div>
            <h5 style={{ color: "whitesmoke", marginTop: "5px" }}>
              University of Sri Jayewardenepura
            </h5>
            <p style={{ color: "#e2d9ec", margin: "10px 0 5px" }}>
              <strong>GPA:</strong> <span className="purple">3.24</span>
            </p>
            <p style={{ color: "#ccc", fontSize: "0.95em" }}>
              <strong>Key Modules:</strong> Data Analysis For Managers, Database Design & Management, Business Analytics, Systems Analysis & Design.
            </p>
          </Card.Body>
        </Card>

        <Card className="quote-card-view mb-4" style={{ border: "1px solid rgba(200, 137, 230, 0.3)", borderRadius: "15px", padding: "20px" }}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h3 style={{ color: "#c770f0", fontSize: "1.4em", fontWeight: "600" }}>
                <FaGraduationCap style={{ marginRight: "10px" }} />
                Chartered Accountancy (Business Level & Capstone)
              </h3>
              <span style={{ color: "#a588c0", fontStyle: "italic" }}>2024 – Present</span>
            </div>
            <h5 style={{ color: "whitesmoke", marginTop: "5px" }}>
              Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)
            </h5>
            <p style={{ color: "#ccc", fontSize: "0.95em", marginTop: "8px" }}>
              Completed all Core Subjects in the Business Level and currently pursuing the Capstone Pillar.
            </p>
          </Card.Body>
        </Card>

        <Card className="quote-card-view mb-4" style={{ border: "1px solid rgba(200, 137, 230, 0.3)", borderRadius: "15px", padding: "20px" }}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <h3 style={{ color: "#c770f0", fontSize: "1.4em", fontWeight: "600" }}>
                <FaGraduationCap style={{ marginRight: "10px" }} />
                G.C.E. Advanced Level & Ordinary Level
              </h3>
              <span style={{ color: "#a588c0", fontStyle: "italic" }}>2014 – 2023</span>
            </div>
            <h5 style={{ color: "whitesmoke", marginTop: "5px" }}>
              Sri Chandananda Buddhist College, Kandy
            </h5>
            <ul style={{ color: "#ccc", fontSize: "0.95em", marginTop: "8px", paddingLeft: "20px" }}>
              <li>
                <strong>G.C.E. A/L:</strong> 3 A passes in Accounting, Business Studies, and Information & Communication Technology (ICT).
              </li>
              <li>
                <strong>G.C.E. O/L:</strong> 4 A passes and 4 B passes.
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Education;
