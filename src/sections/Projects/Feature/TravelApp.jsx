import React from "react";
import tripTAB from "../img/trip-tablet.png";
import tripCP from "../img/trip-pc.png";
import { motion } from "framer-motion";

const TravelApp = () => {
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="row proj-content"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
      >
        <motion.div className="col-lg-6 pt-5" variants={item}>
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
        </motion.div>

        {/*  */}
        <motion.div className="col-lg-6 row" variants={item}>
          <div className="col-lg-6">
            <img
              src={tripTAB}
              alt="vet pc"
              className="mockup-tablet travel-img"
            />
          </div>
          <div className="col-lg-6">
            <img src={tripCP} alt="vet cp" className="mockup-cp" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TravelApp;
