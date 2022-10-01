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
            It is a web travel application using Google Maps. With Geolocation,
            Google Maps API. Fetching restaurants, hotels, and attractions based
            on the location from specialized Rapid APIs, data filtering, and
            much more
          </p>

          {/* CTA ================================================================== */}
          <div className="mt-5 proj-link">
            <a
              href="https://github.com/juvielone/travel_advisor"
              target="_blank"
            >
              <button
                className="btn me-5 btn-code"
                style={{ backgroundColor: "#31363F", color: "white" }}
              >
                Code
                <i class="bi bi-github"></i>
              </button>
            </a>

            <a href="https://mydailyguide.netlify.app/" target="_blank">
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
