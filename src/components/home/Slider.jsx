import { useEffect, useState } from "react";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 -z-10 fixed top-0 left-0 w-full">
        <div className="w-full">
          <div className="relative" data-carousel="slide">
            <div className="relative h-48 sm:h-64 md:h-[400px] lg:h-[600px] xl:h-screen overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute w-full h-full"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Modern Text Overlay with Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end pb-20"
                  >
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider"
                    >
                      {imageFeatures[currentIndex].title}
                    </motion.h2>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {/* <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 left-6 -translate-y-1/2 z-30 
                flex items-center justify-center w-12 h-12 md:w-14 md:h-14
                rounded-full bg-white/10 backdrop-blur-lg
                transition-all duration-300 group"
              onClick={handlePrev}
            >
              <svg
                className="w-6 h-6 text-white transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button> */}

              {/* <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-1/2 right-6 -translate-y-1/2 z-30 
                flex items-center justify-center w-12 h-12 md:w-14 md:h-14
                rounded-full bg-white/10 backdrop-blur-lg
                transition-all duration-300 group"
              onClick={handleNext}
            >
              <svg
                className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button> */}
            </div>
          </div>
        </div>

        {/* Text Section Below Carousel */}
      </div>
    </div>
  );
};

export default Slider;
