import VetApp from "./Feature/VetApp";
import TravelApp from "./Feature/TravelApp";
import GithubApp from "./Feature/GithubApp";
import "./Proj.scss";
const Proj = ({ projects }) => {
  return (
    <>
      <div className="container section-proj" ref={projects} id="projectsMe">
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
