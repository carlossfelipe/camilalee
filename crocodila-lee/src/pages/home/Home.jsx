import Navbar from "../../components/navbar";
import HomeHeader from "./components/HomeHeader";
import HomeNoivas from "./components/HomeNoivas";
import HomePresentation from "./components/HomePresentation";
import HomeCinema from "./components/HomeCinema";
import HomeTransforma from "./components/HomeTransforma"
import Footer from "../../components/Footer";
import HomeDepoimentos from "./components/HomeDepoimentos";
function Home() {
  return (
    <>
      <Navbar />
      <HomeHeader />
      <HomePresentation />
      <HomeNoivas />
      <HomeCinema/>
      <HomeTransforma/>
      <HomeDepoimentos/>
      <Footer/>
    </>
  );
}

export default Home;
