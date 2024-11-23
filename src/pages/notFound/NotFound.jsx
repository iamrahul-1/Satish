import Image from "../../assets/sky.jpeg";
import notFound from "../../assets/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center text-white">
        <div
          className="bg-black/50 p-8 rounded-lg"
          style={{
            backgroundImage: `url(${notFound})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <h2 className="text-3xl mt-4">Page Not Found</h2> */}
        <h2 className="mt-2 uppercase">Page Not Found</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-white hover:text-black"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
