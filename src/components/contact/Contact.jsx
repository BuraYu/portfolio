import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  //add notification that the email is sent -> send change the button :D
  //required

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__form-wrapper">
          <h2 className="contact__header">
            Fill the Form. <br />
            It's easy.
          </h2>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <label className="contact__label"></label>
            <input
              type="text"
              name="user_name"
              className="contact__input"
              placeholder="Name"
            />
            <label className="contact__label"></label>
            <input
              type="email"
              name="user_email"
              className="contact__input"
              placeholder="Email"
            />
            <label className="contact__label"></label>
            <textarea
              name="message"
              className="contact__textarea"
              placeholder="Write your message"
            />
            <input type="submit" value="Send" className="contact__submit" />
          </form>
        </div>

        <div className="contact__message">
          <h3 className="contact__message-header">
            Let's talk about everything
          </h3>
          <p className="contact__message-text">
            Feel free to contact me via the form or social media below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
