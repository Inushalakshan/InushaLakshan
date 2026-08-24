import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiPowerbi,
  SiSap,
  SiMicrosoftexcel,
} from "react-icons/si";
import {
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaProjectDiagram,
} from "react-icons/fa";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"28px"} color="#4584b6" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize={"28px"} color="#150458" />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy fontSize={"28px"} color="#013243" />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"28px"} color="#F2C811" />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={"28px"} color="#217346" />
        <div className="tech-icons-text">MS Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartLine fontSize={"26px"} color="#e34c26" />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap fontSize={"28px"} color="#0FAAFF" />
        <div className="tech-icons-text">SAP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase fontSize={"26px"} color="#336791" />
        <div className="tech-icons-text">Database Design</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaChartBar fontSize={"26px"} color="#a855f7" />
        <div className="tech-icons-text">Data Visualization</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram fontSize={"26px"} color="#38bdf8" />
        <div className="tech-icons-text">Data Preprocessing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
