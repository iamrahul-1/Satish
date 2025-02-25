import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
