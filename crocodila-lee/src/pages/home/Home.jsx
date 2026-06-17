import Navbar from "../../components/Navbar";
import HomeHeader from "./components/HomeHeader";
import HomeNoivas from "./components/HomeNoivas";
import HomePresentation from "./components/HomePresentation";
import HomeCinema from "./components/HomeCinema";
import HomeTransforma from "./components/HomeTransforma"
import Footer from "../../components/Footer";
import HomeDepoimentos from "./components/HomeDepoimentos";

import bannerHome from '../../assets/Logo/telainicial_banner_semBug122.jpg';

function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader banner = {bannerHome} />
      <HomePresentation />
      <HomeNoivas />
      <HomeTransforma/>
      <HomeDepoimentos/>
      <Footer/>
    </>
  );
}

export default Home;
