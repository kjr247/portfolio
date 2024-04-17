import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { ImPointRight } from "react-icons/im";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />

        <Card className="quote-card-view">
          <Card.Body>
            <p>Apart from coding, some other activities I enjoy:</p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Soccer - I run a soccer league and I am a big Messi and Atlanta 5 Stripes fan.
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Traveling
              </li>
            </ul>
            </Card.Body>
          </Card>
      </Container>
    </Container>
  );
}

export default About;
