import Banner from "../../Components/HomePageComponents/Banner";
import About from "../../Components/HomePageComponents/About";
import Services from "../../Components/HomePageComponents/Services";
import Opportunities from "../../Components/Shared/Opportunities/Opportunities";
import Review from "../../Components/Shared/Review/Review";

const Home = () => {
  return (
    <div>
      <div data-aos="flip-left">
        <Banner />
      </div>
      <div data-aos="fade-left">
        <About />
      </div>
      <div data-aos="fade-right">
        <Services />
      </div>
      <div data-aos="fade-left">
        <Review />
      </div>
      <div data-aos="fade-right">
        <Opportunities />
      </div>
    </div>
  );
};

export default Home;
