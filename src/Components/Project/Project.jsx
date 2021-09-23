import React, { useEffect, useState } from 'react';
import './Project.scss';
import ProjectCard from '../Utilities/ProjectCard/ProjectCard';
import axios from 'axios';
import projectstaticData from '../../Data/projectStaticData.json';
function Project() {
  const [projectData, setProjectData] = useState([]);
  const [showProjectData, setShowProjectData] = useState(false);

  function compare(a, b) {
    // const millisecondsOfA = a.date.getTime();
    // const millisecondsOfB = b.date.getTime();
    // if (millisecondsOfA > millisecondsOfB) return -1;
    // if (millisecondsOfA < millisecondsOfB) return 1;
    // return 0;
    console.log('Number is ', a.number, b.number);
    if (a.number > b.number) return 1;

    if (a.number < b.number) return -1;
    return 0;
  }
  useEffect(() => {
    const projectRepositories = [
      'Sahaayak',
      'BuildWebOnline',
      'Image-Editor',
      'Bank-Management-System',
      'Compare-Github-Profile',
    ];
    axios
      .get('https://api.github.com/users/Naman-1234/repos?per_page=100')
      .then(async (result) => {
        result = result.data;
        //Filtering to get only those included in projectRepositories
        result = await result.filter((repoName) => {
          return projectRepositories.includes(repoName.name);
        });
        //Taking out only name, description, Date of Creation and its github url
        let repoDetails = await result.map((repo) => {
          const date = new Date(repo.created_at);
          const projectStaticDetails = projectstaticData.filter(
            (data) => data.heading === repo.name
          );
          return {
            number: projectStaticDetails[0]?.number,
            heading: repo.name,
            // content: repo.description,
            content: projectStaticDetails[0]?.explanation,
            date: date,
            link: repo.url,
            name: repo.name,
            techStack: projectStaticDetails[0]?.techStack,
          };
        });

        await repoDetails.sort(compare);
        setProjectData(repoDetails);
        setShowProjectData(true);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  return (
    <div className='project' id='projectPage'>
      {/* <div className='project__heading'>
        <h1>Projects</h1>
      </div> */}
      <div className='project__description'>
        <div className='timeline'>
          <ul className='projectList'>
            {showProjectData &&
              projectData.map((src, index) => {
                return (
                  <li key={index} className='listitem'>
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
