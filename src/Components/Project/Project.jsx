import React from "react";
import "./Project.scss";
import ProjectCard from "../Utilities/ProjectCard/ProjectCard";
import projectData from "../../Data/Project.json";

function Project() {
  return (
    <div className="project" id="projectPage" >
      <div className="project__heading">
        <h1>Projects</h1>
      </div>
      <div className="project__description">
        <div className="timeline"  data-aos="flip-up" data-aos-duration="2000">
          <ul>
            {projectData.map((src,index) => {
              return (
                <li key={index} >
                  <ProjectCard props={src} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
