import Banner from "../../Components/HomePageComponents/Banner";
import About from "../../Components/HomePageComponents/About";
import Services from "../../Components/HomePageComponents/Services";
import Opportunities from "../../Components/Shared/Opportunities/Opportunities";
import Review from "../../Components/Shared/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Review />
      <Opportunities />
    </div>
  );
};

export default Home;
