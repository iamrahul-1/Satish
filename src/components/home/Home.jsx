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
          className=" text-xs sm:text-xs md:text-xs lg:text-sm font-light tracking-wider uppercase"
        >
          <h6>design & photographer</h6>
        </motion.h6>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=" text-lg my-4 md:text-lg lg:text-lg font-light tracking-wider uppercase"
        >
          Creative Elements
        </motion.h4>
        <motion.p className="text-xs md:text-xs lg:text-xs font-light leading-relaxed text-center mx-4 p-4 w-[70%] rounded-lg uppercase justify-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
          penatibus et magnis dis parturient montes viverra quis, feugiat.
        </motion.p>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-full max-w-5xl">
          {/* Large Image 1 */}
          <motion.div className="relative col-span-2 group">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Logo Design</span>
            </div>
          </motion.div>
          {/* Small Image 1 */}
          <motion.div className="relative w-full group">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Wedding Album</span>
            </div>
          </motion.div>
          {/* Small Image 2 */}
          <motion.div className="relative w-full group">
            <img
              src={img3}
              alt="Image 3"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Product</span>
            </div>
          </motion.div>
          {/* Large Image 2 */}
          <motion.div className="relative col-span-2 group">
            <img
              src={img4}
              alt="Image 4"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Wedding Photography</span>
            </div>
          </motion.div>
          {/* Small Image 3 */}
          <motion.div className="relative w-full group">
            <img
              src={img5}
              alt="Image 5"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Image to Vector</span>
            </div>
          </motion.div>
          {/* Small Image 4 */}
          <motion.div className="relative w-full group">
            <img
              src={img6}
              alt="Image 6"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Broucher Design</span>
            </div>
          </motion.div>
          {/* IG Posts Image */}
          <motion.div className="relative w-full group">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">IG Posts</span>
            </div>
          </motion.div>
          {/* Hidden post */}
          <motion.div className="relative w-full h-[40rem] group lg:hidden md:block sm:block">
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-black text-lg">And Many More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
