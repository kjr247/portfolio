import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import GithubStats from "./GithubStats";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Open-Source <strong className="purple"></strong>
      </h1>      
      <GitHubCalendar
        style={{ paddingBottom: "15px" }}
        username="kjr247"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <GithubStats />
    </Row>
  );
}

export default Github;
