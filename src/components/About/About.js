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

        <Github />
          <Card className="quote-card-view">
            <Card.Body>
              <p>A bit about me.</p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> I find a great deal of pleasure in being an inspiration, source of energy, and motivation to those around me. I enjoy anything competitive, as well as some relaxing walks/runs while listening to podcasts or books. I am avid about sports and run a soccer league. I love freediving, golf, tennis, rock climbing, boats, cars. I love to teach. For the last 5 years, I have spent about 3 hours a week teaching software and soft skills 1 on 1 with several mentees. As a very curious person, lately, I have been enthralled with Data Science. 
                </li>
              </ul>
            </Card.Body>
          </Card>

          <Card className="quote-card-view">
            <Card.Body>
              <p>Obsessed with Tech</p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> As soon as I’m awake roughly 5:00 am EST, with coffee and bagel in hand, I am already reading Hacker News, and getting updates on the latest and greatest in Tech. One of my favorite books is The 5 AM Club (5AC!). I have a daily routine of compulsively scouring through the kaleidoscope of docs, Github issues, and online community backlogs (Discord, HackerNews, RSS feeds, Quora, StackOverflow, devdocs.io). From home, I often experiment with cutting-edge and bleeding-edge technologies. I believe that understanding the difference between the two is a critical distinction to make.
                </li>
              </ul>
            </Card.Body>
          </Card>

        <Card className="quote-card-view">
          <Card.Body>
            <p>Apart from building great teams and building great software, some other activities I enjoy:</p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Reading and Writing Tech Blogs and building things with my hands!
              </li>
              <li className="about-activity">
                <ImPointRight /> Soccer - I founded and run a soccer league and I'm a huge Messi and Atlanta 5 Stripes fan.
              </li>
              <li className="about-activity">
                <ImPointRight /> Traveling (7 countries and 20 states so far)
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing instruments including piano, guitar, and ukulele.
              </li>              
            </ul>
          </Card.Body>
        </Card>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
