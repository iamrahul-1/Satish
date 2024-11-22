import img1 from "../../assets/w1.jpg";
import img2 from "../../assets/w2.jpg";
import img3 from "../../assets/w3.jpg";
import img4 from "../../assets/w4.jpg";
import img5 from "../../assets/w5.jpg";
import img6 from "../../assets/w6.jpg";

const projects = [
  { img: img1, title: "Logo Design" },
  { img: img2, title: "Wedding Album" },
  { img: img3, title: "Product Presentation" },
  { img: img4, title: "Wedding Photography" },
  { img: img5, title: "Image to Vector" },
  { img: img6, title: "Brochure Design" },
];

const Work = () => {
  return (
    <div className="container mx-auto p-8 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group shadow-md hover:-translate-y-1 transition-transform duration-200"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
