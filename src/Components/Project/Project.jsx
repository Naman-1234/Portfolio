import React from "react";
import "./Project.scss";
import ProjectCard from "../Utilities/ProjectCard/ProjectCard";

const aosData = "flip-up";
const imageSources = [
  {
    heading: 'Heading 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.',
    date: '27 May 2021',
    src: "images/project.png",
    aos: aosData,
  },
  {
    heading: 'Heading 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.',
    date: '27 May 2021',
    src: "images/project.png",
    aos: aosData,
  },
  {
    heading: 'Heading 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.',
    date: '27 May 2021',
    src: "images/project.png",
    aos: aosData,
  },
  {
    heading: 'Heading 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.',
    date: '27 May 2021',
    src: "images/project.png",
    aos: aosData,
  },
];
function Project() {
  return (
    <div className="project"  >
      <div className="project__heading">
        <h1>Projects</h1>
      </div>
      <div className="project__description">
        <div className="timeline"  data-aos="flip-up" data-aos-duration="2000">
          <ul>
            {imageSources.map((src,index) => {
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
