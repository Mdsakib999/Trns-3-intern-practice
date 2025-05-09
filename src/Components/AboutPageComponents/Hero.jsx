import { Zoom, Slide } from "react-awesome-reveal";
import { Title } from "../Shared/Title";
import ContainerIamge from "/assets/wireframe.jpg";

export const Hero = () => {
	return (
		<div className="mt-16 sm:mt-20 lg:mt-[100px]">
			<div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 py-4 sm:py-5 ">
				<Title title={"Warum Fortana"} />

				<div className="flex flex-col lg:flex-row lg:items-center gap-8 sm:gap-12 lg:gap-10 xl:gap-10 mt-6 sm:mt-8 md:mt-1 w-full ">
					{/* Left content - added w-full to ensure proper width */}
					<div className="w-full lg:w-1/2 ">
						<Slide triggerOnce>
							<div className="flex flex-col gap-6 sm:gap-10 lg:gap-16 xl:gap-20 w-full">
								<h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-semibold leading-tight">
								Nahtlose und intelligente Logistiklösungen für eine vernetzte Welt von morgen.
								</h1>
								<p className="text-xs sm:text-sm opacity-50 max-w-lg">
								Fortana Logistics ist ein vertrauenswürdiger Partner für umfassende und zuverlässige Logistiklösungen weltweit. Wir sind auf Luft-, See- und Straßenfracht spezialisiert und bieten maßgeschneiderte Transportdienste an, um sicherzustellen, dass Ihre Waren pünktlich und in einwandfreiem Zustand ihr Ziel erreichen. Unser Ziel ist es, Ihre Lieferkette zu vereinfachen und zu optimieren, indem wir End-to-End-Lösungen anbieten, die Lagerung, Zollabfertigung und Echtzeitverfolgung umfassen.
								</p>
							</div>
						</Slide>
					</div>

					{/* Hero image - added w-full to ensure proper width */}
					<div className="w-full lg:w-1/2 mt-6 lg:mt-0">
						<Zoom triggerOnce>
							<img
								src={ContainerIamge}
								alt="Container Image"
								className="w-full h-auto object-cover rounded-lg"
							/>
						</Zoom>
					</div>
				</div>
			</div>

			{/* Cards section - responsive grid */}
			<div className="ml-10">
			<Title title={"Unsere Werte"} />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-12 p-4 sm:p-6 mt-8 sm:mt-12 lg:mt-16">
				{/* Card 1 */}
				<div
					className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm"
					data-aos="fade-left"
					data-aos-duration="1000"
				>
					<div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
						1.
					</div>
					<h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
						Custom Clearance
					</h3>
					<p className="text-sm text-gray-600 mt-2">
						Explore our comprehensive range of chartering services. Explore our
						comprehensive range of chartering services.
					</p>
				</div>

				{/* Card 2 */}
				<div
					className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm"
					data-aos="fade-left"
					data-aos-duration="2000"
				>
					<div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
						2.
					</div>
					<h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
						Storage & Packaging
					</h3>
					<p className="text-sm text-gray-600 mt-2">
						Explore our comprehensive range of chartering services. Explore our
						comprehensive range of chartering services.
					</p>
				</div>

				{/* Card 3 */}
				<div
					className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm"
					data-aos="fade-left"
					data-aos-duration="3000"
				>
					<div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
						3.
					</div>
					<h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
						Transport Brokerage
					</h3>
					<p className="text-sm text-gray-600 mt-2">
						Explore our comprehensive range of chartering services. Explore our
						comprehensive range of chartering services.
					</p>
				</div>
			</div>
		</div>
	);
};
