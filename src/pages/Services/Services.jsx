import { OurProcess } from "../../Components/ServicePageComponents/OurProcess";
import { Banner } from "../../Components/ServicePageComponents/Banner";
import { Opportunities } from "../../Components/Shared/Opportunities/Opportunities";
import { Review } from "../../Components/Shared/Review/Review";

export const Services = () => {
	return (
		<div className="page-wrapper">
			<Banner />
			<OurProcess />
			<Review />
			<Opportunities />
		</div>
	);
};
