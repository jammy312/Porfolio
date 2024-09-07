import React from "react";
import { motion } from "framer-motion";
import "../styles/Transition.css";
const Transition = <T extends JSX.IntrinsicAttributes>(
  OgComponent: React.FC<T>
) => {
  return (props: T) => {
    return (
      <motion.div
        className="motion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OgComponent {...props} />
      </motion.div>
    );
  };
};

export default Transition;
