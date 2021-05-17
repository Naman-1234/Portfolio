import React,{useEffect, useState} from "react";
import "./Project.scss";
import ProjectCard from "../Utilities/ProjectCard/ProjectCard";
import axios from "axios";
function Project() {
  const [projectData, setProjectData] = useState([]);
  const [showProjectData, setShowProjectData] = useState(false);

  useEffect(() => {
   const projectRepositories=['Image-Editor','BuildWebOnline','Portfolio','Sahaayak'];
   axios.get("https://api.github.com/users/Naman-1234/repos?per_page=100").then(async (result)=>{
     result=result.data;
     //Filtering to get only those included in projectRepositories
     result = await result.filter((repoName)=>{
      return projectRepositories.includes(repoName.name);
    })
    //Taking out only name, description, Date of Creation and its github url
    let repoDetails = await result.map((repo)=>{
      axios.get(`https://api.github.com/users/Naman-1234/${repo}/languages`).then(async (ans)=>{
        const languages = await Object.keys(ans);
        const date = new Date(repo.created_at);
        return {
          heading:repo.name,
          content:repo.description,
          date:date,
          link:repo.url,
          languages:languages
        }
      })
        setProjectData(repoDetails);
        setShowProjectData(true);
      }).catch((err)=>{
        console.log('Inside Languages Error');
      })
   }).catch((err)=>{
     throw new Error(err);
   })
  }, [])
  return (
    <div className="project" id="projectPage" >
      <div className="project__heading">
        <h1>Projects</h1>
      </div>
      <div className="project__description">
        <div className="timeline"  data-aos="flip-up" data-aos-duration="2000">
          <ul>
            {showProjectData && projectData.map((src,index) => {
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
