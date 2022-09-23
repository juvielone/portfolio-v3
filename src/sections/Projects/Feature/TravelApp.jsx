import React from "react";
import tripTAB from "../img/trip-tablet.png";
import tripCP from "../img/trip-pc.png";

const TravelApp = () => {
  return (
    <>
      <div className="row proj-content">
        <div className="col-lg-6 pt-5">
          <h2 className="pb-3 proj-title">Daily Guide</h2>
          {/* Skill Req ============================================== */}
          <button
            type="button"
            class="btn"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i className="bi bi-google pe-2"></i>
            Google Map API
          </button>
          {/* ============================================ */}

          <button
            type="button"
            class="btn ms-3"
            style={{ backgroundColor: "#00ADB5", color: "white" }}
          >
            <i class="fa-solid fa-globe pe-2"></i>
            Rapid API
          </button>
          {/* ============================================ */}

          <button
            type="button"
            class="btn ms-3"
            style={{
              backgroundColor: "#00ADB5",
              color: "white",
              marginTop: "1rem",
            }}
          >
            <i class="fa-brands fa-react pe-2"></i>
            React
          </button>
          {/* ============================================ */}

          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            soluta quaerat vel nobis ab temporibus mollitia, recusandae delectus
            neque, pariatur excepturi ea voluptates saepe totam culpa explicabo
            unde ipsum. Ad.
          </p>

          {/* CTA ================================================================== */}
          <div className="mt-5 proj-link">
            <button
              className="btn me-5 btn-code"
              style={{ backgroundColor: "#31363F", color: "white" }}
            >
              Code
              <i class="bi bi-github"></i>
            </button>

            <a href="" className="">
              <span className="cta-link">View Project</span>
              <i class="bi bi-arrow-right-circle"></i>
            </a>
          </div>
        </div>

        {/*  */}
        <div className="col-lg-6 row">
          <div className="col-lg-6">
            <img src={tripTAB} alt="vet pc" className="mockup-tablet" />
          </div>
          <div className="col-lg-6">
            <img src={tripCP} alt="vet cp" className="mockup-cp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TravelApp;
