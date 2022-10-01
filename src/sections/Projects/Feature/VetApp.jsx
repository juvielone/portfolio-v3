import React from "react";
import vetpc from "../img/vet-pc.png";
import vetcp from "../img/vet-cp.png";
const VetApp = () => {
  return (
    <>
      <div className="row proj-content">
        <div className="col-lg-6 pt-5">
          <h2 className="pb-3 proj-title">Vet Appointment</h2>
          {/* Skill Req ============================================== */}
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i className="fa-solid fa-leaf pe-2"></i>
            MERN STACK
          </button>
          {/* ============================================ */}

          <button
            type="button"
            class="btn ms-3"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i class="fa-brands fa-react pe-2"></i>
            Redux
          </button>
          {/* ============================================ */}

          <p className="pt-5">
            A full stack appointment system that book and record the user's pet
            service and check-up. Powered by JSON Web Token to validate and
            reject users' login and registration. This app is handled by
            intensive state management "Redux" Admin has CRUD control on user
            and appointment created.
          </p>

          {/* CTA ================================================================== */}
          <div className="mt-5 proj-link">
            <a href="https://github.com/juvielone/vet2" target="_blank">
              <button
                className="btn me-5 btn-code"
                style={{ backgroundColor: "#31363F", color: "white" }}
              >
                Code
                <i class="bi bi-github"></i>
              </button>
            </a>

            <a href="https://vet-app.onrender.com/" target="_blank">
              <span className="cta-link">View Project</span>
              <i class="bi bi-arrow-right-circle"></i>
            </a>
          </div>
        </div>

        {/*  */}
        <div className="col-lg-6 row">
          <div className="col-lg-6">
            <img src={vetpc} alt="vet pc" className="mockup-pc" />
          </div>
          <div className="col-lg-6">
            <img src={vetcp} alt="vet cp" className="mockup-cp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VetApp;
