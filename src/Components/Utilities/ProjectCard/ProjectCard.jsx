/* eslint-disable react/prop-types */
import React from 'react';
import './ProjectCard.scss';
import Languages from '../Project-Data-Github/Languages';
function ProjectCard(props) {
  const { heading, content, name, techStack } = props.props;
  let date = props.props.date;
  let link = props.props.link;
  date = date.toUTCString();
  link = link
    .toString()
    .replace('https://api.github.com/repos/', 'https://github.com/');
  return (
    <div className='projectCard' data-aos='zoom-in' data-duration='2000'>
      <h3 className='date'>{date}</h3>
      <h1>{heading}</h1>
      <p>
        {content?.map((listItem) => {
          return (
            <>
              <span className='contentListitem'>{listItem}</span>
              <br></br>
            </>
          );
        })}
      </p>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src='images/github.png' alt='Github Repo'></img>
      </a>

      <div className='languages'>
        <h1>Tech Stack Used:</h1>
        <div className='gridContainer'>
          {techStack?.map((skill) => {
            return (
              <>
                <span className='skillSpan'>{skill}</span>
              </>
            );
          })}
          {/* <Languages repo={name} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
