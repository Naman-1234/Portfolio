import React from 'react'
import "./Skills.scss";

const skillsLogos = require('../../Data/Skills.json');
console.log('Skillslogo', skillsLogos);
function Skills() {
    return (
        <div className="skills">
            <div className="skills__heading">
            <h1>Skills</h1>
            </div>
            <div className="skills__description">
            {
                skillsLogos.map((src, index)=>{
                    return <img src={src.src} alt="logo" key={index} />
                })
            }
            </div>
        </div>
    )
}

export default Skills
