import { Slide, Zoom } from "react-awesome-reveal";
import { Title } from "../Shared/Title";
import ContainerImage from "/assets/Container.png";

export const OurProcess = () => {
	const processSteps = [
		{
			number: "1. Beratung & Planung",
			text: "Wir analysieren Ihre Logistikbedürfnisse und entwickeln maßgeschneiderte Lösungen.",
			active: true,
		},
		{
			number: "2. Beratung & Planung",
			text: "Wir übernehmen alle Buchungen und die nötige Dokumentation gemäß internationalen Vorschriften.",
			active: false,
		},
		{
			number: "3. Transport & Tracking",
			text: "Wir kümmern uns um den Transport per Luft, See oder Straße und bieten Echtzeit-Tracking.",
			active: false,
		},
	];

	return (
		<div className="bg-[#F4F4F4] w-full  rounded-md">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
				<Title title={"Unser Prozess"} />

				<h1 className="text-xl sm:text-2xl md:text-3xl font-semibold my-6 md:my-10 lg:my-12">
				Bei Fortana Logistics sorgen wir für eine nahtlose, effiziente und transparente Logistiklösung, die Ihr Geschäft voranbringt.
				</h1>

				<div className="flex flex-col lg:flex-row gap-10 lg:gap-8 md:items-center ">
					<div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10 lg:gap-14 ">
						<Slide>
							{processSteps.map((step, index) => (
								<div key={index} className="md:max-w-lg ">
									<h3
										className={`text-xl md:text-2xl font-bold ${
											step.active ? "text-orange-500" : "opacity-50"
										}`}
									>
										{step.number}
									</h3>
									<p className="text-sm opacity-50 mt-2 ml-7">{step.text}</p>
								</div>
							))}
						</Slide>
					</div>

					<div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
						<Zoom>
							<img
								src={ContainerImage}
								alt="Container"
								className="w-full h-auto object-cover rounded-lg"
							/>
						</Zoom>
					</div>
				</div>
			</div>
		</div>
	);
};
