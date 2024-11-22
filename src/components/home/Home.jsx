import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import { FaPlus } from "react-icons/fa";
import Slider from "./Slider";

const Home = () => {
  const images = [image1, image2, image3];

  const imageFeatures = [
    {
      title: "Wedding Album",
      // description: "Description for first image",
    },
    {
      title: "Visiting Cards",
      // description: "Description for second image",
    },
    {
      title: "Logos",
      // description: "Description for third image",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Slider />
      <div className="absolute bottom-0 left-0 w-full text-center">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-xs sm:text-xs md:text-xs lg:text-sm font-light tracking-wider uppercase"
        >
          <h6>design & photographer</h6>
        </motion.h6>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-lg my-4 md:text-lg lg:text-lg font-light tracking-wider uppercase"
        >
          Creative Elements
        </motion.h4>
        <motion.p className="text-xs md:text-xs lg:text-xs font-light leading-relaxed text-center mx-4 p-4 bg-black/30 rounded-lg shadow-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
          penatibus et magnis dis parturient montes viverra quis, feugiat.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
