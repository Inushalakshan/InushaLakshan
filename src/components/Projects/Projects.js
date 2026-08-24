import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the data analytics and visualization projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Telecom Customer Data Analysis & Power BI Dashboard"
              description="End-to-end data analytics project on telecommunication customer behavior. Performed extensive data cleaning, preprocessing, and statistical exploration with Python, Pandas, NumPy, and Matplotlib. Built an interactive Power BI dashboard featuring dynamic KPIs, churn insights, and demographic breakdowns to support data-driven business decisions."
              ghLink="https://github.com/inushalakshan/telecommunication-company-data-analysis"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Netflix Data Analysis"
              description="Exploratory Data Analysis (EDA) on the global Netflix dataset using Python, Pandas, NumPy, and Matplotlib. Discovered actionable insights into content release patterns over time, genre popularity, movie durations vs. TV seasons, and country-level production distributions with structured visualizations."
              ghLink="https://github.com/inushalakshan/netflix-data-analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
