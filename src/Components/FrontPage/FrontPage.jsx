import React from 'react';
import './FrontPage.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function FrontPage() {
  return (
    <div className='front' id='frontPage'>
      {/* Here the Left Front Page of Front starts from here */}
      <div className='front__left' data-aos='zoom-in' data-aos-duration='1000'>
        {/* Text content and Image starts from here */}
        <div className='content'>
          <div className='contentleft'>
            <div className='content__name'>
              <h1>--Naman Kalra</h1>
            </div>
            <div className='content__description'>
              <span>Hello, My Name is Naman </span>
              <span>Kalra, Focusing on </span>
              <span>Learning......</span>
            </div>
          </div>
          <div className='contentright'>
            <div className='content__myimage'>
              <img
                src='images/profile_without_bg.png'
                alt='My Profile'
                className='myimg'
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* Right Part of Front Page starts from here */}
      <div className='front__right'>
        <div className='socialLinks'>
          <a href='/'>
            <img
              src='images/instagram.png'
              alt='Instagram Logo'
              className='socialLinks__images'
            />
          </a>
          <a href='/'>
            <img
              src='images/facebook.png'
              alt='Facebook Logo'
              className='socialLinks__images'
            />
          </a>
          <a href='/'>
            <img
              src='images/github.png'
              alt='Github logo'
              className='socialLinks__images'
            />
          </a>
          <a href='/'>
            <img
              src='images/linkedin.png'
              alt='Linkedin Logo'
              className='socialLinks__images'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
