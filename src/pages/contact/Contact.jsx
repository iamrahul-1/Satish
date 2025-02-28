import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="max-w-md mx-auto p-6 backdrop-blur-lg bg-slate-300 bg-opacity-25 rounded-lg shadow-md mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl text-gray-200 font-semibold text-center mb-4">
        Contact Us
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full p-2 border border-gray-300 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg uppercase tracking-wider font-medium bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
