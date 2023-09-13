import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: "10rem",
  height: "6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "20rem",
  paddingLeft: "42rem",
};
const loadingCircle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  backgroundColor: "#398378",
  borderRadius: "10rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.2,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
    </motion.div>
  );
};

export default Loader;
