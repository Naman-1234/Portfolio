import React from 'react'
import "./EducationCard.scss";
function EducationCard(props) {
    // eslint-disable-next-line react/prop-types
    const {Institute, Class, Year, Grade} = props
    return (
        <div className="education-card" data-aos="zoom-in" data-duration="2000">
            <h2 className="heading2">{Institute}</h2>
            <h4 className="heading4">{Class}</h4>

            {Grade !=='' &&<h4 className="heading4">{Grade}</h4>}
            <h4 className="heading4">{Year}</h4>
        </div>
    )
}

export default EducationCard
