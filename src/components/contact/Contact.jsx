import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;
