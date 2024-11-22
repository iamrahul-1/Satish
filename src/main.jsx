import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Work from "./pages/work/Work.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import Logo from "./pages/imageSection/Logo.jsx";
import Wedding from "./pages/imageSection/Wedding.jsx";
import WeddingAlbum from "./pages/imageSection/WeddingAlbum.jsx";
import ProductPresentation from "./pages/imageSection/ProductPresentation.jsx";
import ImageToVector from "./pages/imageSection/ImageToVector.jsx";
import Brochure from "./pages/imageSection/Brochure.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/work" element={<Work />} />
      <Route path="/logo" element={<Logo />} />
      <Route path="/wedding" element={<Wedding />} />
      <Route path="/wedding-album" element={<WeddingAlbum />} />
      <Route path="/product-presentation" element={<ProductPresentation />} />
      <Route path="/image-to-vector" element={<ImageToVector />} />
      <Route path="/brochure" element={<Brochure />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
