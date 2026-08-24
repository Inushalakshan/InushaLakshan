import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi,
  SiMicrosoftexcel,
  SiSap,
  SiJupyter,
} from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
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
        <SiJupyter fontSize={"28px"} color="#F37626" />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSap fontSize={"28px"} color="#0FAAFF" />
        <div className="tech-icons-text">SAP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
