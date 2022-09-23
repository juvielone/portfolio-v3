import React from "react";
import VetApp from "./Feature/VetApp";
import TravelApp from "./Feature/TravelApp";
import GithubApp from "./Feature/GithubApp";
import "./Proj.scss";
const Proj = () => {
  return (
    <>
      <div className="container section-proj">
        <section className="pb-5 pt-5">
          <h1 className="pb-5 text-center">Some of my Works</h1>

          <VetApp />
          <TravelApp />
          <GithubApp />
        </section>
      </div>
    </>
  );
};

export default Proj;
