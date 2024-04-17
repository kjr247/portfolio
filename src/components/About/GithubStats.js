import React from "react";
import { Row } from "react-bootstrap";

function GithubStats() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <img style={{ paddingBottom: "15px" }} height="282" src="https://github-readme-stats.vercel.app/api/top-langs/?username=kjr247&theme=tokyonight&hide_progress=true&hide=ShaderLab,ApacheConf,HLSL,Batchfile,PHP" />
        <img style={{ paddingBottom: "15px" }} height="200" src="https://github-readme-stats.vercel.app/api?username=kjr247&theme=tokyonight&rank_icon=github&show_icons=true&include_all_commits=true&hide=prs,contribs" />
    </Row>
  );
}

export default GithubStats;
