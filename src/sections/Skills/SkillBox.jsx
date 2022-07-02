import React from "react";
import { motion } from "framer-motion";
import "./Skill.scss";

const SkillBox = ({ imgSrc, skillName, pt, pl, ml, mr, mt }) => {
  const itemSkill = {
    hidden: { opacity: 0, scale: 2 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.7,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div
      variants={itemSkill}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.9 }}
      className="skill-container img-fluid"
    >
      <img
        src={imgSrc}
        alt="skillSet"
        className="skill-img"
        style={{
          paddingTop: `${pt ? pt : 0}`,
          paddingLeft: `${pl ? pl : 0}`,
        }}
      />

      <h2
        className="skill-name"
        style={{
          marginLeft: `${ml ? ml : 0}`,
          marginRight: `${mr ? mr : 0}`,
          marginTop: `${mt ? mt : 0}`,
        }}
      >
        {skillName}
      </h2>
    </motion.div>
  );
};

export default SkillBox;
