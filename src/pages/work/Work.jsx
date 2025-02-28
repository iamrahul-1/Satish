// import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`container mx-auto p-8 my-16 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex">
        <div></div>
      </div>
    </motion.div>
  );
};

export default Work;
