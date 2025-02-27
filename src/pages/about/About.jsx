import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // Importing motion for animations
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="w-full mt-12 text-white h-auto md:h-[110vh]">
      <div className="flex flex-col items-center justify-center md:h-screen h-auto flex-grow px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-wide uppercase mt-5"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base font-light leading-relaxed text-center mx-4 p-4 mt-4"
        >
          Hello! I'm a passionate graphic designer and photographer with a keen
          eye for detail and creativity. With a deep love for visual
          storytelling, I specialize in wedding photoshoots and album designing,
          ensuring that every moment is captured beautifully and preserved
          forever. Whether it's crafting stunning wedding albums, designing
          unique branding materials, or capturing the raw emotions of a special
          day, my goal is to bring every story to life with artistic elegance
          and precision.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-wide uppercase mt-8"
        >
          What I offer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm md:text-base font-light leading-relaxed mx-4 md:mx-64 p-4 mt-4 text-left"
        >
          🎨 Graphic Design: Logo creation, branding, and marketing materials.
          <br />
          📷 Photography: Professional wedding photoshoots, candid moments, and
          event coverage.
          <br /> 📖 Album Designing: Custom-designed wedding albums
          <br />
          <br />
          that turn your memories into timeless treasures. With a strong
          foundation in both design and photography, I ensure that every project
          is a perfect blend of creativity, professionalism, and visual appeal.
          Let's create something amazing together! 💫
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold tracking-wide uppercase mt-8"
        >
          Want to Collaborate?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm flex items-center md:justify-center md:text-base font-light leading-relaxed mx-4 md:mx-64 p-4 w-full mt-5 text-left flex-wrap gap-2"
        >
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl pr-3" />{" "}
            shgroup2435@gmail.com
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="text-2xl pr-3" />{" "}
            9016725326
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />{" "}
            Jailrod Chandrakala, Jaiplaza Complex, Mangrol, Gujarat-362225
          </div>
        </motion.p>
        Let’s bring your vision to life!
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <a
            href="/contact"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg uppercase tracking-wider font-medium hover:bg-gray-700 transition duration-300 "
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
