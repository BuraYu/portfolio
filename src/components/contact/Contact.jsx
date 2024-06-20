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
  //add image next the form?
  //add notification that the email is sent -> send change the button :D
  //required
  //design

  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__form-wrapper">
          <h2 className="contact__header">Fill the Form. It's easy.</h2>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <label className="contact__label">Name</label>
            <input type="text" name="user_name" className="contact__input" />
            <label className="contact__label">Email</label>
            <input type="email" name="user_email" className="contact__input" />
            <label className="contact__label">Message</label>
            <textarea name="message" className="contact__textarea" />
            <input type="submit" value="Send" className="contact__submit" />
          </form>
        </div>

        <div className="contact__message">
          <h3 className="contact__message-header">Hello</h3>
          <p className="contact__message-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            nobis quibusdam quae beatae. Eligendi laudantium cum hic veniam est
            dolor, mollitia fuga dolores voluptatem eius minus ut nesciunt esse
            rem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
