import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Inusha Lakshan</span>{" "}
            from <span className="purple">Kandy, Sri Lanka</span>.
            <br />
            I am currently an undergraduate pursuing a{" "}
            <span className="purple">B.Sc. in Business Information Systems</span> at the{" "}
            <span className="purple">University of Sri Jayewardenepura</span> (GPA: 3.24).
            <br />
            I am also pursuing the Capstone Pillar at the{" "}
            <span className="purple">Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)</span>, having completed all Business Level core subjects.
            <br />
            <br />
            I am an aspiring Data Analyst who loves working with data, identifying hidden patterns, creating impactful visualizations, and contributing to data-driven decision-making.
            <br />
            <br />
            Some other activities and interests I am passionate about:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Interactive Power BI Dashboards 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Committee Member at S@IT (USJP) 🏛️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Business Analytics & Financial Modeling 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Continuous Learning 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning complex data into clear, actionable business insights!"{" "}
          </p>
          <footer className="blockquote-footer">Inusha Lakshan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
