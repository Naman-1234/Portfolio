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
              <span>Kalra, A 3rd Year </span>
              <span> Undergraduate at IIITV.</span>
            </div>
          </div>
          <div className='contentright'>
            <div className='content__myimage'>
              <img
                src='images/profile2.jpg'
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
          {/* <a href='/'>
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
          </a> */}
          <a href='https://github.com/Naman-1234'>
            <img
              src='images/github.png'
              alt='Github logo'
              className='socialLinks__images'
            />
          </a>
          <a href='https://www.linkedin.com/in/naman-kalra-9192571aa/'>
            <img
              src='images/linkedinjpg.png'
              alt='Linkedin Logo'
              className='socialLinks__images'
            />
          </a>
          <a href='https://linktr.ee/NamanKalra'>
            <img
              src='images/linktree.png'
              alt='Linktree for Publications'
              className='socialLinks__images'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
