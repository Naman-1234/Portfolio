import React from "react";
import EducationCard from "../Utilities/EducationCard/EducationCard";
import "./Education.scss";
const educationData = [
  {
    Institute: "Indian Institute of Information Technology Vadodara",
    Class: "Bachelor Of Technology (B.Tech) in Computer Science",
    Year: "2019-2023",
    Grade: "",
  },
  {
    Institute: "Gr. Senior Secondary  School",
    Class: "Sr. Secondary Education (Class: 12)",
    Year: "2018-2019",
    Grade: "Percentage Obtained: 93%",
  },
  {
    Institute: "Bhiwani Public  School",
    Class: "SecondaryEducation (Class: 10)",
    Year: "2016-2017",
    Grade: "CGPA: 10",
  },
];
function Education() {
  return (
    <div className="education">
      <div
        className="education__heading"
        data-aos="zoom-in-right"
        data-duration="2000"
      >
        <h1>Education</h1>
      </div>
      <div className="education__description">
        {educationData.map((data) => {
          return (
            <EducationCard
              Institute={data.Institute}
              Class={data.Class}
              Grade={data.Grade}
              Year={data.Year}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Education;
