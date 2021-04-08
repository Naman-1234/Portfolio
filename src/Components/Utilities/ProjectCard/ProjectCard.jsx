import React from 'react'
import "./ProjectCard.scss";
function ProjectCard(props) {
    const {src,aos} = props;
    return (
        <div className="projectCard">
            <img src={src} alt="project" className="projectCard__img" data-aos={aos} data-duration="2000"></img>
        </div>
    )
}

export default ProjectCard
