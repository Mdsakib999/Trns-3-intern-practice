import { OurProcess } from "../../Components/ServicePageComponents/OurProcess";
import { Banner } from "../../Components/ServicePageComponents/Banner";
import { Opportunities } from "../../Components/Shared/Opportunities/Opportunities";
import { Review } from "../../Components/Shared/Review/Review";

export const Services = () => {
	return (
		<div className="page-wrapper">
			<div data-aos="fade-left">
				<Banner />
			</div>
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
};
