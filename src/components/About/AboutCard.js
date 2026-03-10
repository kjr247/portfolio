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
              <span className="purple"> Atlanta</span> based. 
          </p>
          <p style={{ textAlign: "justify" }}>
            I am currently employed as a hands on Director Of Software Engineering Management and Architect at an enterprise level corporation in the Healthcare Industry.
            <br />
            My passions are integrations, innovating, and building the people around me.
            <br />
            <br />
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "The sweet spot is innovating to be faster, better, and cheaper while building the people around us."{" "}
          </p>
          <footer className="blockquote-footer">Kyle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
