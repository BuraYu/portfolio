import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [buttonColor, setButtonColor] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState(
    "Let's talk about everything"
  );
  const [message, setMessage] = useState(
    "Feel free to contact me via the form or social media below."
  );
  const [messageColor, setMessageColor] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setButtonText("Message Sent!");
          setButtonColor("green");
          setThankYouMessage("Thank you for the Message!");
          setMessage("I will get back to you, shortly.");
          setMessageColor("messageColor");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
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
            <input
              type="submit"
              value={buttonText}
              className={`contact__submit ${buttonColor}`}
            />
          </form>
        </div>

        <div className="contact__message">
          <h3 className={`contact__message-header ${messageColor}`}>
            {thankYouMessage}
          </h3>
          <p className="contact__message-text">{message} </p>
          <div className="contact__socials">
            <SocialIcon
              url="www.xing.de"
              href="https://www.xing.com/profile/Burak_Yueksel072782/"
              className="my-social-icon"
            />
            <SocialIcon
              url="www.github.com"
              href="https://www.github.com/BuraYu"
            />
            <SocialIcon
              url="www.linkedin.com"
              href="https://www.linkedin.com/in/buraky%C3%BCksel-/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
