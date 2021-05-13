/* eslint-disable react/prop-types */
import React from 'react'
import "./ProjectCard.scss";
function ProjectCard(props) {
   const {heading, content, link} = props.props;
   let date = props.props.date;
   date=date.toUTCString();
    return (
        <div className="projectCard">
            <h3 className="date">{date}</h3>
            <h1>{heading}</h1>
            <p>{content}</p>
            <a href={link} target="_blank" rel="noreferrer"><img src="images/github.png" alt="Github Repo"></img> </a>
        </div>
    )
}

export default ProjectCard
