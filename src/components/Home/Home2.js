import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a motivated and detail-oriented aspiring{" "}
              <b className="purple">Data Analyst</b> and{" "}
              <b className="purple">Business Information Systems</b> undergraduate
              with a strong interest in transforming raw data into meaningful business insights.
              <br />
              <br />
              I have foundational and practical expertise in
              <i>
                <b className="purple">
                  {" "}
                  Python, Pandas, NumPy, SQL, Microsoft Excel, and Power BI{" "}
                </b>
              </i>
              — with a passion for uncovering trends, identifying patterns, and solving problems using analytical techniques.
              <br />
              <br />
              My key areas of focus include
              <i>
                <b className="purple">
                  {" "}
                  Data Cleaning & Preprocessing, Data Visualization, Business Analytics,{" "}
                </b>
              </i>
              and Database Design & Management.
              <br />
              <br />
              Whenever possible, I apply my skills to build interactive dashboards in
              <b className="purple"> Power BI </b> and develop exploratory data analysis pipelines using{" "}
              <i>
                <b className="purple">Python (Pandas, NumPy, Matplotlib)</b> and{" "}
                <b className="purple">SQL</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
