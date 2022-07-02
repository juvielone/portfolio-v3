import React from "react";
import profile from "./profile.jpg";
import shapes from "./shapes.svg";
import { motion } from "framer-motion";

import "./About.scss";

const About = () => {
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
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

  const svgAnimation = {
    hidden: { rotate: -200, opacity: 1 },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 1.3,
      },
    },
  };
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
        className="container about-section"
      >
        <div className="row">
          <div className="col-lg-6">
            <figure class="figure">
              <motion.img
                variants={itemMain}
                src={profile}
                class="figure-img img-fluid rounded mx-5 profile"
                alt="Profile"
              />
            </figure>
          </div>
          <div className="col-lg-6">
            <motion.h1 variants={itemMain} className="about-heading">
              About Me
              <motion.svg
                width="80"
                height="60"
                viewBox="0 0 101 85"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={svgAnimation}
                  d="M70.12 84.64L0 14.52C19.36 -4.84 50.76 -4.84 70.12 14.52C89.48 33.88 89.48 65.28 70.12 84.64Z"
                  fill="#3AC1C8"
                  fill-opacity="0.91"
                />
                <motion.path
                  d="M78.6401 52.4699L100.16 30.95H57.1201L78.6401 52.4699Z"
                  fill="#40454D"
                />
              </motion.svg>
            </motion.h1>

            <motion.p variants={item} className="about-desc">
              <span>02. </span>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Exercitationem nobis deleniti expedita
              repellendus consequatur commodi animi nam vero vitae laboriosam
              quo, eaque aliquid esse quae sunt voluptates tempora eum
              obcaecati?
            </motion.p>

            <motion.a href="google.com">
              <motion.h2
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="resume-cta"
              >
                View My Resume
                <i class="bi bi-arrow-right-circle resume-icon"></i>
              </motion.h2>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
