import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import VideoPlayer from "../VideoPlayer";
function ProjectCards(props) {
  return (    
    <Card className="project-card-view">
      {props.children || ''}
      { !props.children && props.demoLinks && props.demoLinks.map((x, idx) => 
          props.demoLinks[idx] ?
            <VideoPlayer key={`${x}-${idx}`} videoSrc={x} imgSrc={props.imgPaths[idx]} />
          :
            <Card.Img key={`${x}-${idx}`} src={props.imgPaths[idx]} alt="card-img" />
        )
      }
      
      <Card.Body >
        <Card.Title >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.contentLink} target="_blank">
          {props.hasCode && <BsGithub /> } &nbsp;
          {props.buttonTitle}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
