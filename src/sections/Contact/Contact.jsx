import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div
      id="contact-section"
      className="text-center pt-5"
      style={{ paddingBottom: "8rem" }}
    >
      <h1 className="pt-5">Get In Touch</h1>
      <p className="pt-5 contact-msg container">
        Hi, I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>

      <a
        href="mailto: juvielonejoshua27@gmail.com"
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <button
          style={{
            padding: "1rem",
            fontSize: "1.2rem",
            backgroundColor: "#00acb4",
            color: "#eeeeee",
          }}
          className="btn btn-primary btn-projs mt-5"
        >
          Say Hello <i class="bi bi-send-fill"></i>
        </button>
      </a>
    </div>
  );
};

export default Contact;
