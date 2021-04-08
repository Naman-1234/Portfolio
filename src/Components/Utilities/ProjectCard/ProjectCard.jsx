import React from 'react'
import "./ProjectCard.scss";
function ProjectCard(props) {
    const {src} = props;
    return (
        <div className="projectCard">
            <img src={src} alt="project" className="projectCard__img"></img>
        </div>
    )
}

export default ProjectCard
