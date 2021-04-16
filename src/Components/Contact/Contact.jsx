import React from "react";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact">
      <div
        className="contact__heading"
        data-aos="zoom-in-right"
        data-duration="2000"
      >
        <h1>Contact Me</h1>
      </div>
      <div className="contact__description">
        <div className="up">
        <div className="up__left">
        <form >
        <div className="name">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required></input>
        </div>
        <div className="email">
            <label htmlFor="name">Email:</label>
            <input type="email" id="email"></input>
            </div>
            <div className="description_label">
            <label htmlFor="description">Description:</label>
            </div>
            <div className="description__text">
            <textarea cols="50" rows="10" style={{resize:"none"}}>Enter your message here</textarea>
            </div>
            <div className="submit_button">
                <button type="button" role="button">Send</button>
            </div>
            </form>
        </div>
     
        <div className="up__right">

        </div>
        </div>
        <div className="down">
        <p>Made with ❤️ by Naman</p>
        </div>
    </div>
    </div>
  );
}

export default Contact;
