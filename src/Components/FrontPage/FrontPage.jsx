import React from 'react'
import "./FrontPage.scss";
function FrontPage() {
    return (
        <div className="front">
            <div className="front__left">
            <div className="content">
            <div className="contentleft">
            <div className="content__name">
            <h1>--Naman Kalra</h1>   
            </div>
            <div className="content__description">
                <span>Hello, My Name is Naman </span>
                <span>Kalra, Focusing on </span>
                <span>Learning......</span>
            </div>
            </div>
            <div className="contentright">
            <div className="content__myimage">
                <img src="images/profile.jpg" alt="My Profile" className="myimg"></img>
            </div>
            </div>
            </div>
            </div>
            <div className="front__right">
            <div className="links">
                        <a href="/" ><img src="images/instagram.png" alt="Instagram Logo" className="links__images" /></a>
                        <a href="/"><img src="images/facebook.png" alt="Facebook Logo" className="links__images"/></a>
                        <a href="/"><img src="images/github.png" alt="Github logo" className="links__images"/></a>
                        <a href="/" ><img src="images/linkedin.png" alt="Linkedin Logo" className="links__images"/></a>
                        </div>
                </div>
            </div>
    )
}

export default FrontPage
