// import "./home.css";
import background from "./bg.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat px-4 md:px-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <button className="btn px-4 py-2 text-base md:text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-lg transform transition-transform hover:scale-105  hover:blur-none">
        Get Started
      </button>
    </div>
  );
};

export default Home;
