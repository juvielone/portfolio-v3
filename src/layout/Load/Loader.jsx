import React from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = ({ setLoading }) => {
  // Variants
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
        delay: 0.8,
      },
    },
  };

  const itemMain = {
    hidden: { opacity: 0, rotate: 200 },
    show: {
      opacity: 1,
      rotate: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  return (
    <motion.div
      className="container-svg "
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      layoutId="mainLogo-motion"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.svg
        width="30rem"
        height="30rem"
        viewBox="0 0 69 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="svg-logo"
      >
        <motion.path
          d="M24.4402 29.9971L24.4407 29.9963C24.5778 29.7951 24.8333 29.5028 25.1178 29.2192C25.2452 29.0922 25.3707 28.9746 25.4856 28.8737C25.4945 29.314 25.5 29.8916 25.5 30.5202V32.5H23.5045C23.5249 32.191 23.6152 31.7885 23.7674 31.3569C23.9399 30.8681 24.1784 30.3799 24.4402 29.9971Z"
          fill="#00ACB4"
          stroke="#00ACB4"
          variants={item}
        />
        <motion.path
          d="M14.0423 34.0379C13.972 34.1078 13.991 34.6219 14.087 35.1483C14.2971 36.3226 14.9221 37.4709 15.8022 38.2961C16.8735 39.3049 17.9643 39.8001 19.4566 39.9713C20.8468 40.1236 22.486 39.6606 23.6081 38.8036C24.0482 38.4674 24.7369 37.7504 25.0306 37.3314C25.6489 36.4432 26.0572 35.0532 25.9935 34.0761C25.9868 34.0189 25.6489 34 24.5268 34H23.0663L23.0026 34.4441C22.8111 35.713 21.7845 36.7605 20.5027 36.9889C18.8573 37.2742 17.1862 36.0559 17.0075 34.4313L16.9629 34.0317L15.5218 34.0123C14.731 34.0062 14.0675 34.0189 14.0423 34.0379Z"
          fill="#00ACB4"
          variants={itemMain}
        />
        <motion.path
          d="M31.2955 33.4545H33.0724V37.6477C33.0724 38.1463 32.9531 38.5778 32.7145 38.9421C32.478 39.3043 32.1477 39.5845 31.7237 39.7827C31.2997 39.9787 30.8075 40.0767 30.2472 40.0767C29.6825 40.0767 29.1882 39.9787 28.7642 39.7827C28.3402 39.5845 28.0099 39.3043 27.7734 38.9421C27.5391 38.5778 27.4219 38.1463 27.4219 37.6477V33.4545H29.1989V37.4943C29.1989 37.6967 29.2436 37.8778 29.3331 38.0376C29.4226 38.1953 29.5462 38.3189 29.7038 38.4084C29.8636 38.4979 30.0447 38.5426 30.2472 38.5426C30.4517 38.5426 30.6328 38.4979 30.7905 38.4084C30.9482 38.3189 31.0717 38.1953 31.1612 38.0376C31.2507 37.8778 31.2955 37.6967 31.2955 37.4943V33.4545ZM35.7068 33.4545L37.0491 38.0696H37.1002L38.4426 33.4545H40.4497L38.2892 40H35.8602L33.6997 33.4545H35.7068ZM42.8571 33.4545V40H41.0801V33.4545H42.8571ZM43.6992 40V33.4545H48.4165V34.8864H45.4762V36.0114H48.1737V37.4432H45.4762V38.5682H48.4038V40H43.6992Z"
          fill="#222831"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5, type: "spring", stiffness: 30 }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
