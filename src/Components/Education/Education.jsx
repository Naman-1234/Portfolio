import React from "react";
import EducationCard from "../Utilities/EducationCard/EducationCard";
import "./Education.scss";
const educationData =  require('../../Data/EducationData.json');
function Education() {
  return (
    <div className="education" id="educationPage">
      <div
        className="education__heading"
        data-aos="zoom-in-right"
        data-duration="2000"
      >
        <h1>Education</h1>
      </div>
      <div className="education__description">
        {educationData.map((data, index) => {
          return (
            <EducationCard
              Institute={data.Institute}
              Class={data.Class}
              Grade={data.Grade}
              Year={data.Year}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Education;
