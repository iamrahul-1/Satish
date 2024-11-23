function Brochure() {
  return <div>Brochure</div>;
}

export default Brochure;

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Brochure = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const brochureItems = [
//     {
//       id: 1,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/bw-img-1.jpg",
//       alt: "Brochure 1",
//     },
//     {
//       id: 2,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/bw-img-1.jpg",
//       alt: "Brochure 2",
//     },
//     {
//       id: 3,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/gallery-masonry-3.jpg   ",
//       alt: "Brochure 3",
//     },
//     {
//       id: 4,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/bw-img-1.jpg",
//       alt: "Brochure 4",
//     },
//     {
//       id: 5,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/bw-img-1.jpg",
//       alt: "Brochure 5",
//     },
//     {
//       id: 6,
//       image:
//         "https://shade.qodeinteractive.com/wp-content/uploads/2017/04/bw-img-1.jpg",
//       alt: "Brochure 6",
//     },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div
//       className={`container mx-auto p-8 my-16 transition-all duration-1000 transform ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <h1 className="text-4xl font-bold mb-12 text-center">Brochure Samples</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {brochureItems.map((item) => (
//           <motion.div
//             key={item.id}
//             whileHover={{ scale: 1.05 }}
//             className="relative group cursor-pointer"
//           >
//             <div className="overflow-hidden rounded-lg shadow-lg">
//               <img
//                 src={item.image}
//                 alt={item.alt}
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Brochure;
