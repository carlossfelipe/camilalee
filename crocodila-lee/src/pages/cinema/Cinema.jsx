import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import CinemaHeader from "./components/CinemaHeader";
import CinemaSection from "./components/CinemaSection";
import banner from "../../assets/Logo/audiovisual_banner.jpg";

function Noivas() {
  return (
    <>
      <Navbar />
      <CinemaHeader banner={banner} />
      <CinemaSection/>
      <Footer />
    </>
  );
}

export default Noivas;
