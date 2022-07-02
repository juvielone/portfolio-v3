import { Fragment } from "react";
import { motion } from "framer-motion";
import "./socialStyle.scss";

const Socials = () => {
  const variant = {
    initial: {
      opacity: 0,
      x: -100,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  };
  return (
    <Fragment>
      <motion.div className="position-absolute top-50 end-0 g-icon d-none  d-lg-block d-xl-block">
        <motion.span
          class="bi bi-linkedin sIcon row"
          variants={variant}
          initial="initial"
          animate="animate"
        ></motion.span>
        <motion.span
          class="bi bi-instagram sIcon row"
          variants={variant}
          initial="initial"
          animate="animate"
        ></motion.span>
        <motion.span
          class="bi bi-github sIcon row"
          variants={variant}
          initial="initial"
          animate="animate"
        ></motion.span>
        <motion.span
          class="bi bi-google sIcon row"
          variants={variant}
          initial="initial"
          animate="animate"
        ></motion.span>
      </motion.div>
    </Fragment>
  );
};
export default Socials;
