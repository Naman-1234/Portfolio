import React from "react";
import "./Project.scss";
import ProjectCard from "../Utilities/ProjectCard/ProjectCard";
const imageSources = [
  {
    src: 'images/project.png',
    aos: 'zoom-in-left'
  },
  {
    src: 'images/project.png',
    aos: 'zoom-in-right'
  },
  {
    src: 'images/project.png',
    aos: 'zoom-in-left'
  },
  {
    src: 'images/project.png',
    aos: 'zoom-in-right'
  }
];
function Project() {
  return (
    <div className="project">
      <div class="project__heading">
        <h1>Projects</h1>
      </div>
      <div className="project__description">
        {imageSources.map((src) => {
          return <ProjectCard src={src.src} aos={src.aos} ></ProjectCard>;
        })}
      </div>
    </div>
  );
}

export default Project;
