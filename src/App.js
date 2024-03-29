import React, { Fragment, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import SocialIcons from "./layout/Socials/Socials"
import "./App.scss"

import Navbar from "./layout/Navbar";
import Loader from "./layout/Load/Loader";
import Heading from "./sections/Hero/Heading";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Proj from "./sections/Projects/Proj";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";


function App() {

  const [loading, setLoading] = useState(true)

  const projects = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);


  return <Fragment>
    <AnimateSharedLayout type="crossfade" >

      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>

        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Navbar scrollToSection={scrollToSection} />
            <Heading projects={projects} scrollToSection={scrollToSection} />
            <SocialIcons />
            <About />
            <Skills />
            <Proj projects={projects} />
            <Contact />
            <Footer />
          </motion.div>
        )}



      </AnimatePresence>
    </AnimateSharedLayout>

  </Fragment >
}

export default App;
