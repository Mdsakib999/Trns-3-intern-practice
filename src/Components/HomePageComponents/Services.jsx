import { Title } from "../Shared/Title";
import { FaRegCheckCircle, FaBox } from "react-icons/fa";
import { RiContactsBookUploadLine } from "react-icons/ri";

export const Services = () => {
	return (
		<div className="bg-[#F3F2F5] mt-44 flex flex-col items-center px-5 md:px-10 lg:px-16 py-20">
			<Title title={"UNSERE DIENSTLEISTUNGEN"} />
			<div className="text-2xl md:text-5xl text-[#293037] text-center font-semibold  md:py-5 mt-3 lg:w-[80%] lg:leading-14 ">
				<p>Maßgeschneiderte Lösungen für jede Sendung, wo immer Sie sie benötigen.</p>
				
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				<div data-aos="fade-right" className="relative">
					<FaRegCheckCircle
						className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
						size="40"
					/>
					<div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
						<h1 className="text-xl font-semibold my-3">Custom Clearance </h1>
						<p className="text-sm text-gray-500">
							Explore our comprehensive range of chartering services. Explore
							our comprehensive range of chartering services.{" "}
						</p>
					</div>
				</div>
				<div data-aos="fade-right" className="relative">
					<FaBox
						className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
						size="40"
					/>
					<div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
						<h1 className="text-xl font-semibold my-3">Storage & Packaging </h1>
						<p className="text-sm text-gray-500">
							Explore our comprehensive range of chartering services. Explore
							our comprehensive range of chartering services.{" "}
						</p>
					</div>
				</div>
				<div data-aos="fade-right" className="relative">
					<RiContactsBookUploadLine
						className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
						size="40"
					/>
					<div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
						<h1 className="text-xl font-semibold my-3">Transport Brokerage </h1>
						<p className="text-sm text-gray-500">
							Explore our comprehensive range of chartering services. Explore
							our comprehensive range of chartering services.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
