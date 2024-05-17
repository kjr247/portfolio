import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Kyle Rebstock. </span>
              <br/>
              Currently <span className="purple"> Atlanta</span> based. 
          </p>
          <p style={{ textAlign: "justify" }}>
            I am currently employed as a hands on Sr. Software Engineering Manager and Architect at Driverse a DRB Vontier Company.
            <br />
            My passions are integrations, innovating, and building the people around me.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "We can innovate and beat our competition by being faster, better, and cheaper."{" "}
          </p>
          <footer className="blockquote-footer">Kyle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
