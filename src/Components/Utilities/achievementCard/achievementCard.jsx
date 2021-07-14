import React from 'react';
import './achievementCard.scss';
function achievementCard(props) {
  const { heading, content, date } = props.props;
  return (
    <div className='achievementCard' data-aos='zoom-in' data-duration='2000'>
      <h1>{heading}</h1>
      <h3 className='date'>{date}</h3>
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
    </div>
  );
}

export default achievementCard;
