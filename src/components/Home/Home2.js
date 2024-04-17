import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body">
              <br />With 14 years of experience,
              <br />
              I am fluent in
              <i>
                <b className="purple"> C#, TypeScript, SQL, and many other languages and stacks. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Web Technologies </b> and
                {" "}
                <b className="purple">
                  Cloud Architecture.
                </b>
              </i>
              <br />
              <br />
              ✔ Awarded 6 times publicly by the National Automotive Dealership Association. <br />
              ✔ Processed Billions of dollars worth of Medical Records from 5 major EMR systems<br />
              ✔ Guided regional A/B testing, we increased revenue by $20 million<br />
              ✔ Reduced costs, converting entire infrastructure with Terraform IAC<br />
              ✔ Reduced time-to-market by 50% servicing multibillion-dollar clients<br />
              ✔ Improved call center solutions, saving $100k/year; increasing NPS scores by 25%.<br />
              ✔ Reduced costs on expensive databases by $80k annually with 40% CPU saved.<br />
              ✔ Maintained 13 environments available with four 9s of uptime<br />
              ✔ Implemented integrations with over 30,000 auto parts distribution centers<br />
              
              <br />
              I also apply my passion for developing products in personal projects
              with <b className="purple">.Net</b> and
              
              <b className="purple">
                {" "}
                Typescript
                {" "}
              </b>
              ecosystems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              <span className="purple">CONNECT </span>WITH ME ON
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kjr247"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kjr247"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kylerebstock/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
