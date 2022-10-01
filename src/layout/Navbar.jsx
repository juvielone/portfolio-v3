import React from "react";
import { motion } from "framer-motion";
import mainLogo from "./mainLogo.svg";
import "./navbar.scss";

const Navbar = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const xItem = {
    hidden: { opacity: 0, y: -100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.6,
      },
    },
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="navbar navbar-expand-lg mt-5"
      style={{ backgroundColor: "" }}
    >
      <div className="container">
        <div class="container">
          <a class="navbar-brand" href="#">
            <motion.img
              className="d-inline-block align-text-top mainLogo"
              src={mainLogo}
              alt="Juvie logo"
              width="180"
              height="54"
              layoutId="mainLogo-motion"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <motion.div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <motion.li className="nav-item me-5" variants={xItem}>
              <a className="nav-link" href="#aboutMe">
                About
              </a>
            </motion.li>
            <motion.li className="nav-item me-5" variants={xItem}>
              <a className="nav-link" aria-current="page" href="#skillMe">
                Skill
              </a>
            </motion.li>
            <motion.li className="nav-item me-5" variants={xItem}>
              <a className="nav-link" href="#projectsMe">
                Projects
              </a>
            </motion.li>
            <motion.li className="nav-item me-5" variants={xItem}>
              <a className="nav-link">Contact</a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
