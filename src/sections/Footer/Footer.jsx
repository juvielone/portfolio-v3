import React from "react";

const Footer = () => {
  return (
    <div
      style={{ height: "10rem", backgroundColor: "#00acb4", color: "#eeeeee" }}
      className="fluid-container text-center pt-5"
    >
      <h5>Designed and Made by Juvielone Lagos️</h5>
      <span>©{new Date().getFullYear()} </span>
    </div>
  );
};

export default Footer;
