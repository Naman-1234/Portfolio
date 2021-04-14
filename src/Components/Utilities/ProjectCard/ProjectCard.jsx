/* eslint-disable react/prop-types */
import React from 'react'
import "./ProjectCard.scss";
function ProjectCard(props) {
    //! Look at this line output
    const para = props.props;
    console.log('Para is ',para);
    return (
        <div className="projectCard">
            <h3 className="date">{para.date}</h3>
            <h1>{para.heading}</h1>
            <p>{para.content}</p>
        </div>
    )
}

export default ProjectCard
