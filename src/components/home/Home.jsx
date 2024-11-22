import { motion } from "framer-motion";
import Slider from "./Slider";
import img1 from "../../assets/w1.jpg";
import img2 from "../../assets/w2.jpg";
import img3 from "../../assets/w3.jpg";
import img4 from "../../assets/w4.jpg";
import img5 from "../../assets/w5.jpg";
import img6 from "../../assets/w6.jpg";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="mt-16 bottom-0 left-0 w-full text-center flex flex-col items-center justify-center">
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
        <motion.p className="text-xs md:text-xs lg:text-xs font-light leading-relaxed text-center mx-4 p-4 w-[70%] rounded-lg uppercase justify-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
          penatibus et magnis dis parturient montes viverra quis, feugiat.
        </motion.p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-6">
        <motion.div className="relative">
          <img src={img1} alt="Description" className="w-full h-auto" />
        </motion.div>
        <motion.div className="relative">
          <img src={img2} alt="Description" className="w-full h-auto" />
        </motion.div>
        <motion.div className="relative">
          <img src={img3} alt="Description" className="w-full h-auto" />
        </motion.div>
        <motion.div className="relative">
          <img src={img4} alt="Description" className="w-full h-auto" />
        </motion.div>
        <motion.div className="relative">
          <img src={img5} alt="Description" className="w-full h-auto" />
        </motion.div>
        <motion.div className="relative">
          <img src={img6} alt="Description" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
