import Banner from "../../Components/Home/Banner";
import About from "../../Components/Home/About";
import Services from "../../Components/Home/Services";
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
