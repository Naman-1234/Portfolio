/* eslint-disable react/prop-types */
import React from "react";
import Languages from "../Project-Data-Github/Languages";
import "./ProjectCard.scss";
function ProjectCard(props) {
  const { heading, content, link, name } = props.props;
  let date = props.props.date;
  date = date.toUTCString();
  console.log("Name is ", name);
  return (
    <div className="projectCard">
      <h3 className="date">{date}</h3>
      <h1>{heading}</h1>
      <p>{content}</p>
      <div className="languages">
        <Languages repo={name} />
      </div>
      <h1>Hi there</h1>
      <a href={link} target="_blank" rel="noreferrer">
        <img src="images/github.png" alt="Github Repo"></img>
      </a>
    </div>
  );
}

export default ProjectCard;
