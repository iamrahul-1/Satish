function ImageToVector() {
  return <div>ImageToVector</div>;
}

export default ImageToVector;

// import { Link } from "react-router-dom";
// import img1 from "../../assets/w1.jpg";
// import img2 from "../../assets/w2.jpg";
// import img3 from "../../assets/w3.jpg";
// import img4 from "../../assets/w4.jpg";
// import img5 from "../../assets/w5.jpg";
// import img6 from "../../assets/w6.jpg";
// import { useState, useEffect } from "react";

// const projects = [
//   { img: img1, title: "Logo Design", link: "/logo" },
//   { img: img2, title: "Wedding Album", link: "/wedding-album" },
//   { img: img3, title: "Product Presentation", link: "/product-presentation" },
//   { img: img4, title: "Wedding Photography", link: "/wedding" },
//   { img: img5, title: "Image to Vector", link: "/image-to-vector" },
//   { img: img6, title: "Brochure Design", link: "/brochure" },
// ];

// const Work = () => {
//   const [isVisible, setIsVisible] = useState(false);

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
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <Link to={project.link} key={index} className="block">
//             <div className="relative group shadow-md hover:-translate-y-1 transition-transform duration-200 rounded-md overflow-hidden">
//               <img
//                 src={project.img}
//                 alt={project.title}
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
//                 <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   {project.title}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;
