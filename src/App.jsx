import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[80%] max-w-5xl">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
