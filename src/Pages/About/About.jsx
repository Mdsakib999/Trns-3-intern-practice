import { Hero } from "../../Components/AboutPageComponents/Hero";
import { Opportunities } from "../../Components/Shared/Opportunities/Opportunities";
import { Review } from "../../Components/Shared/Review/Review";

export const About = () => {
	return (
		<div className="page-wrapper">
			<Hero />
			<Review />
			<Opportunities />
		</div>
	);
};
