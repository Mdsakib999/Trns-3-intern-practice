import { Banner } from "../../Components/HomePageComponents/Banner";
import { About } from "../../Components/HomePageComponents/About";
import { Services } from "../../Components/HomePageComponents/Services";
import { Opportunities } from "../../Components/Shared/Opportunities/Opportunities";
import { Review } from "../../Components/Shared/Review/Review";

export const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <div data-aos="fade-right">
        <Services />
      </div>
      <Review />
      <div data-aos="fade-right">
        <Opportunities />
      </div>
    </div>
  );
};
