import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import s1 from "../../assets/work/s1.jpg";
import s2 from "../../assets/work/s2.jpg";
import s3 from "../../assets/work/s3.jpg";
import s4 from "../../assets/work/s4.jpg";
import s5 from "../../assets/work/s5.jpg";
import s6 from "../../assets/work/s6.jpg";
import s7 from "../../assets/work/s7.jpg";
import s8 from "../../assets/work/s8.jpg";
import s9 from "../../assets/work/s9.jpg";
import s10 from "../../assets/work/s10.jpg";
import s11 from "../../assets/work/s11.jpg";
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
      <h2 className="text-4xl text-center mb-11 text-gray-900 font-bold">
        Logo Design
      </h2>
      <div className="flex flex-col md:flex-row gap-10 rounded-2xl">
        {/* Left Page */}
        <div className="space-y-4 flex items-start justify-center flex-col w-full md:w-1/3">
          <img
            src={s1}
            alt="Project"
            className="rounded-xl w-full h-auto shadow-md"
          />
        </div>
        {/* Right Page */}
        <div className="space-y-4 w-full md:w-3/2">
          <img
            src={s2}
            alt="Awarded Work"
            className="rounded-xl w-full h-auto shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-10 rounded-2xl">
        {/* Left Page */}
        <div className="space-y-4 w-full md:w-3/2">
          <img
            src={s5}
            alt="Project"
            className="rounded-xl w-full h-auto shadow-md"
          />
        </div>
        {/* Right Page */}
        <div className="flex flex-col gap-10 justify-center w-full md:w-1/3">
          <div className="space-y-4">
            <img
              src={s3}
              alt="Awarded Work"
              className="rounded-xl w-full h-auto shadow-md"
            />
          </div>
          <div className="space-y-4">
            <img
              src={s4}
              alt="Awarded Work"
              className="rounded-xl w-full h-auto shadow-md"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
