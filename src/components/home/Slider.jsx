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
    }, 5000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center md:h-screen h-auto flex-grow bg-zinc-900 -z-10 w-full">
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full h-48 sm:h-64 md:h-[400px] lg:h-[600px] xl:h-screen">
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
                    className="text-3xl md:text-5xl lg:text-9xl font-bold text-white mb-20 tracking-wider mestika"
                  >
                    {imageFeatures[currentIndex].title}
                  </motion.h2>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
