import React from "react";
import "./Project.scss";
import ProjectCard from "../Utilities/ProjectCard/ProjectCard";
const imageSources = [
  "images/project.png",
  "images/project.png",
  "images/project.png",
  "images/project.png",
];
function Project() {
  return (
    <div className="project">
      <div class="project__heading">
        <h1>Projects</h1>
      </div>
      <div className="project__description">
        {imageSources.map((src) => {
          return <ProjectCard src={src}></ProjectCard>;
        })}
      </div>
    </div>
  );
}

export default Project;
