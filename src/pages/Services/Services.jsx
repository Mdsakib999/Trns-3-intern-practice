import OurProcess from "../../Components/ServicePageComponents/OurProcess";
import Banner from "../../Components/ServicePageComponents/Banner";
import Opportunities from "../../Components/Shared/Opportunities/Opportunities";
import Review from "../../Components/Shared/Review/Review";

function Services() {
	return (
		<div className="page-wrapper">
			<Banner />
			{/* <div data-aos="fade-left">
			</div> */}
			<div data-aos="fade-right">
				<OurProcess />
			</div>
			<div data-aos="fade-left">
				<Review />
			</div>
			<div data-aos="fade-right">
				<Opportunities />
			</div>
		</div>
	);
}
export default Services;
