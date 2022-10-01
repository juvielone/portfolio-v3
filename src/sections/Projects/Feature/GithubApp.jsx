import React from "react";
import gitlap from "../img/git-lap.png";
import gitcp from "../img/git-cp.png";

const GithubApp = () => {
  return (
    <>
      <div className="row proj-content">
        <div className="col-lg-6 pt-5">
          <h2 className="pb-3 proj-title">DevFinder</h2>
          {/* Skill Req ============================================== */}
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i className="bi bi-github pe-2"></i>
            Github API
          </button>
          {/* ============================================ */}

          <button
            type="button"
            class="btn ms-3"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i class="fa-brands fa-react pe-2"></i>
            React
          </button>
          {/* ============================================ */}

          <p className="pt-5">
            Devfinder is a web application that lets you search a piece of
            github developer information such as location, company, and their
            newly created repositories
          </p>

          {/* CTA ================================================================== */}
          <div className="mt-5 proj-link">
            <a href="https://github.com/juvielone/devfinder" target="_blank">
              <button
                className="btn me-5 btn-code"
                style={{ backgroundColor: "#31363F", color: "white" }}
              >
                Code
                <i class="bi bi-github"></i>
              </button>
            </a>

            <a href="https://devfinder-nine.vercel.app/" target="_blank">
              <span className="cta-link">View Project</span>
              <i class="bi bi-arrow-right-circle"></i>
            </a>
          </div>
        </div>

        {/*  */}
        <div className="col-lg-6 row">
          <div className="col-lg-6">
            <img src={gitlap} alt="vet pc" className="mockup-pc" />
          </div>
          <div className="col-lg-6">
            <img src={gitcp} alt="vet cp" className="mockup-cp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubApp;
