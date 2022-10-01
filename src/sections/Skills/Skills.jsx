import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";
import SkillBox from "./SkillBox";
import bstrapSkill from "./img/bootstrap.png";
import figma from "./img/figma.png";
import js from "./img/js.png";
import mongo from "./img/mongo.png";
import sql from "./img/sql.png";
import node from "./img/node.png";
import php from "./img/php.png";
import redux from "./img/redux.png";
import reactSkill from "./img/react.png";

const Skills = () => {
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
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.section
        id="skillMe"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        exit="exit"
        className="container skill-section"
        style={{ paddingBottom: "30vh" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <motion.h1 variants={item}>
              Skills &
              <br /> &emsp; Technologies
            </motion.h1>
          </div>

          <div className="col-lg-6 col-md-6 row">
            {/* ============================  Skills =============================*/}
            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox imgSrc={reactSkill} skillName="React" ml="1.8rem" />
            </motion.div>

            <motion.div className=" col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={bstrapSkill}
                skillName="Bootsrap"
                pt="0.5rem"
                ml="1rem"
              />
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={js}
                skillName="JavaScript"
                pt="0.5rem"
                pl="0.5rem"
                ml="1rem"
                mt="0.4rem"
              />
            </motion.div>

            <motion.div className=" col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={node}
                skillName="Node.js"
                pt="0.5rem"
                pl="0.5rem"
                ml="1.5rem"
                mt="0.5rem"
              />
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox imgSrc={php} pt="1.5rem" skillName="" />
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={mongo}
                pt="0.5rem"
                pl="1.5rem"
                ml="1rem"
                skillName="MongoDB"
              />
            </motion.div>

            <motion.div className=" col-lg-3 col-sm-6 col-6">
              <SkillBox imgSrc={sql} pt="0.5rem" pl="0.5rem" skillName="" />
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={redux}
                pt="0.5rem"
                pl="0.5rem"
                ml="1.8rem"
                mt="0.4rem"
                skillName="Redux"
              />
            </motion.div>

            <motion.div className="col-lg-3 col-sm-6 col-6">
              <SkillBox
                imgSrc={figma}
                pt="0.5rem"
                pl="1.5rem"
                ml="1.7rem"
                mt="0.5rem"
                skillName="Figma"
              />
            </motion.div>

            <motion.div
              className="col-lg-3 col-sm-12 skill-arrow"
              variants={item}
              transition={{ delay: 2 }}
            >
              <a href="#" className="cta-link">
                <motion.h2
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cta-skills"
                >
                  View All Skills
                  <i class="bi bi-arrow-right-circle-fill arrow-icon"></i>
                </motion.h2>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
