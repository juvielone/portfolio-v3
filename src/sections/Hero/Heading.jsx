import "./Hero.scss";
import { motion } from "framer-motion";
import { container, yItem, xItem } from "../../animations/animations";
const Heading = ({ projects, scrollToSection }) => {
  return (
    <>
      <section className="container heading-section">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="row main-heading"
        >
          <div className="col-lg-9 col-sm-12">
            <motion.h1 variants={yItem}>Juvielone Joshua Lagos</motion.h1>

            <div className="row mt-3">
              <motion.h2
                variants={yItem}
                className="col-lg-3  col-md-5 col-sm-12"
              >
                {" "}
                [ joo-vee-lohn ]
              </motion.h2>

              <motion.h2
                variants={yItem}
                className="col-lg-5 col-md-5 col-sm-12"
              >
                <i>web developer</i>
              </motion.h2>
            </div>
          </div>

          <motion.div variants={xItem} className="row mt-4">
            <div className="col-lg-5 col-md-12 col-sm-5">
              <p>
                <span>01.</span> A full stack web developer, with experience in
                creating and managing static and dynamic pages through the web.
                I build and design modern intuitive websites and applications .
              </p>
            </div>
          </motion.div>

          <motion.div className="row" variants={yItem}>
            <div className="col-lg-3 col-md-6 col-sm-12 btn-group">
              <button
                onClick={() => scrollToSection(projects)}
                className="btn btn-primary btn-proj btn-xl"
              >
                View Projects <i class="bi bi-stack iconer-1"></i>
              </button>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 btn-group">
              <button className="btn btn-outline-primary btn-con">
                Get In Touch <i class="bi bi-person-fill iconer-2"></i>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Heading;
