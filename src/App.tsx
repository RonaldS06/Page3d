import Footer from "./components/Footer";
import NavbarApp from "./components/NavbarApp";
import Home from "./pages/home/banner/Home";
import ImgGallery from "./pages/home/gallery/ImgGallery";
import Planet from "./pages/home/planet/Planet";

function App() {
  return (
    <>
      <NavbarApp />
      <Home />
      <ImgGallery />
      <Planet />
      <Footer />
    </>
  );
}

export default App;
