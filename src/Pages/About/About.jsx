import Hero from "../../Components/AboutPageComponents/Hero";
import Opportunities from "../../Components/Shared/Opportunities/Opportunities";
import Review from "../../Components/Shared/Review/Review";

function About() {
  return (
    <div>
      <Hero />
      <div data-aos="fade-right">
        <Review />
      </div>
      <div data-aos="fade-left">
        <Opportunities />
      </div>
    </div>
  );
}
export default About;
