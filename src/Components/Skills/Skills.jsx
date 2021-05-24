import React from 'react';
import './Skills.scss';

const skillsLogos = require('../../Data/Skills.json');
console.log('Skillslogo', skillsLogos);
function Skills() {
  return (
    <div className='skills' id='skillsPage'>
      <div className='skills__heading'>
        <h1>Skills</h1>
      </div>
      <div
        className='skills__description'
        data-aos='zoom-in-right'
        data-aos-duration='2000'
      >
        <div className='description__left'>
          <img src='images/Skills_without_bg.png' alt='Skills' />
        </div>
        <div className='description__right'>
          {skillsLogos.map((src, index) => {
            return (
              <img
                src={src.src}
                alt='logo'
                key={index}
                className='language-img'
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
