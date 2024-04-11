import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import G1 from "../../Assets/Projects/GaiaGuage/1.png";
import G2 from "../../Assets/Projects/GaiaGuage/2.png";
import GGDemo from "../../Assets/Projects/GaiaGuage/GGDemo.mp4";
import DSABG from "../../Assets/Projects/DSA Notions Table/DSANotionsBG.png";
import DSDemo from "../../Assets/Projects/DSA Notions Table/DSAVid.mp4";
import SJBG from "../../Assets/Projects/SpaceJanitor-DysonSphearArchitect/spaceJanitorBackground2.png";
import SJDemo from "../../Assets/Projects/SpaceJanitor-DysonSphearArchitect/SJDemo.mp4";

import {
  SiMicrosoftazure
} from "react-icons/si";

// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[G2]}
              isBlog={false}
              title="Longevity Gauge"
              description="Built with C# .Net Blazor WebAssembly and running on Azure Static Web Application. Using peer reviewed medical journal data to provide a Longevity Score."
              contentLink={G1}
              demoLinks={[GGDemo]}
              buttonTitle="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              toggleActionFromImgPath={false}
              imgPaths={[SJBG]}
              isBlog={false}
              title="Dyson Sphere Architect"
              description="Built on C# and Unity3D. A space game for building a dyson mesh or dyson sphear to harvest the energy from dying stars and cleaning up the mess when it's done."
              contentLink={SJDemo}
              demoLinks={[SJDemo]}
              buttonTitle="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              toggleActionFromImgPath={false}
              imgPaths={[DSABG]}
              isBlog={false}
              title="DSA Notions Table"
              description="A Data Structures and Algorithms notion table of use cases, edge cases, and optimization paths. A living document of knowledge."
              contentLink="https://lavender-halloumi-36e.notion.site/63025e0e50944ca5918b074b11a0117b?v=9c13bc56f89c449f9133e229e5bac295"
              demoLinks={[DSDemo]}
              buttonTitle="Notion"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              toggleActionFromImgPath={false}
              imgPaths={["https://learn.microsoft.com/en-us/users/kylejacksonrebstock-4203/achievements?tab=applied-skills-tab"]}
              isBlog={false}
              title="Azure"
              description=""
              contentLink="https://learn.microsoft.com/en-us/users/kylejacksonrebstock-4203/achievements?tab=applied-skills-tab"
              demoLinks={["https://learn.microsoft.com/en-us/users/kylejacksonrebstock-4203/achievements?tab=applied-skills-tab"]}
              buttonTitle="Azure Acheivements"
            >
              <Col className="tech-icons">
                <SiMicrosoftazure />
              </Col>
            </ProjectCard>
          </Col>
{/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              contentLink="https://github.com/kjr247/AI_For_Social_Good"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              contentLink="https://github.com/kjr247/Face_And_Emotion_Detection"
              // demoLink="" 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
