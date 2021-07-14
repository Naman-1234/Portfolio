import React from 'react';
import achievementData from '../../Data/achievementsData.json';
import AchievementCard from '../Utilities/achievementCard/achievementCard';
import './Achievements.scss';
function Project() {
  return (
    <div className='achievements' id='projectPage'>
      {/* <div className='project__heading'>
        <h1>Projects</h1>
      </div> */}
      <div className='project__description'>
        <div className='timeline'>
          <ul className='projectList'>
            {achievementData.map((achievement) => {
              // const { heading, date, content } = achievement;
              return (
                <li>
                  <AchievementCard props={achievement} />
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
