import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Kyle Rebstock. </span>
              <br/>
              Originally from <span className="purple"> Biloxi, Mississippi.</span> 
              <br/>
              Now based in <span className="purple"> Atlanta, Georgia.</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            I am currently employed as a hands on Sr. Software Engineering Manager and Architect at Driverse a DRB Vontier Company.
            <br />
            My passions are integrations and innovating.
            <br />
            <br />
            Apart from coding, some other activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Soccer - I run a soccer league and I am a huge Messi and Atlanta 5 Stripes fan.
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We can innovate to beat out competition by being faster, better, and/or cheaper."{" "}
          </p>
          <footer className="blockquote-footer">Kyle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
