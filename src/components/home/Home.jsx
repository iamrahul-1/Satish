import { motion } from "framer-motion";
import Slider from "./Slider";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/w1.jpg";
import img3 from "../../assets/ab.jpg";
import img4 from "../../assets/mf.jpg";
import img5 from "../../assets/wp.jpg";
import img6 from "../../assets/bd.jpg";
import img7 from "../../assets/td.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <Slider />
      <div className="mt-7 bottom-0 left-0 w-full text-center flex flex-col items-center justify-center">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-2xl font-semibold tracking-wide uppercase text-[#C6AC66]"
        >
          <p>Creative Graphic Designer & Visual Artist</p>
        </motion.h6>

        <motion.p className="text-sm md:text-base font-light leading-relaxed text-center mx-4 p-4 text-gray-800">
          Specializing in photography, logo design, and digital illustrations.
          Let's bring your vision to life with unique and innovative designs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4"
        >
          <a
            href="/contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg uppercase tracking-wider font-medium hover:bg-gray-800 transition duration-300"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full px-4 md:px-6 lg:px-0">
          {/* Large Image 1 */}
          <motion.div className="relative lg:col-span-2 md:col-span-2 col-span-1 group">
            <img
              src={img1}
              alt="Image 1"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">Logo Design</span>
            </div>
          </motion.div>

          {/* Small Image 1 */}
          <motion.div className="relative w-full group">
            <img
              src={img2}
              alt="Image 2"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">
                Wedding Album
              </span>
            </div>
          </motion.div>
          {/* Small Image 2 */}
          <motion.div className="relative w-full group">
            <img
              src={img3}
              alt="Image 3"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">Product</span>
            </div>
          </motion.div>
          {/* Large Image 2 */}
          <motion.div className="relative lg:col-span-2 md:col-span-2 col-span-1 group">
            <img
              src={img4}
              alt="Image 4"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">
                Flyer Design
              </span>
            </div>
          </motion.div>
          {/* Small Image 3 */}
          <motion.div className="relative w-full group">
            <img
              src={img5}
              alt="Image 5"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">
                Wedding Photoshoot
              </span>
            </div>
          </motion.div>
          {/* Small Image 4 */}
          <motion.div className="relative w-full group">
            <img
              src={img6}
              alt="Image 6"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">
                Banner Design
              </span>
            </div>
          </motion.div>
          {/* IG Posts Image */}
          <motion.div className="relative w-full md:col-span-2 lg:col-span-1 group">
            <img
              src={img7}
              alt="Image 2"
              className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg md:text-xl">
                Mockup Design
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
