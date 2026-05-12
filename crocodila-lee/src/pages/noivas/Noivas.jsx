import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import NoivasHeader from "./components/NoivasHeader";
import NoivasSection from "./components/NoivasSection";
import bannerNoivas from "../../assets/Logo/noiva_banner.jpg";

function Noivas() {
  return (
    <>
      <Navbar />
      <NoivasHeader banner={bannerNoivas} />
      <NoivasSection/>
      <Footer />
    </>
  );
}

export default Noivas;
