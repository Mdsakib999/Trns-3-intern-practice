import CourierVector from "/assets/courier.png";
import ShipVector from "/assets/Ship.png";
import LuggageVector from "/assets/bus-two.png";
import WorldVector from "/assets/world.png";
import DeliveryBoy from "/assets/delivery-boy.png";

function Banner() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
			{/* Left Heading - Vertically centered, full width on mobile */}
			<div className="flex items-center justify-center lg:justify-start col-span-1 sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0 h-[180px] sm:h-[212px]">
				<h2 className="text-2xl sm:text-3xl font-semibold leading-8">
					Comprehensive logistics solutions tailored to your need
				</h2>
			</div>

			{/* Service Cards - will wrap based on grid layout */}
			<ServiceCard
				image={LuggageVector}
				titleFirstLine="Carrying"
				titleSecondLine="The Load"
			/>
			<ServiceCard
				image={CourierVector}
				titleFirstLine="Post &"
				titleSecondLine="Courier"
			/>
			<ServiceCard
				image={ShipVector}
				titleFirstLine="Fuelling"
				titleSecondLine="Division"
			/>
			<ServiceCard
				image={LuggageVector}
				titleFirstLine="Carrying"
				titleSecondLine="The Load"
			/>
			<ServiceCard
				image={WorldVector}
				titleFirstLine="Custom"
				titleSecondLine="Clearance"
			/>

			{/* Delivery Boy Card */}
			<div className="rounded-[20px] bg-black flex justify-center items-center p-4 h-[180px] sm:h-[212px] w-full md:w-60">
				<img
					src={DeliveryBoy}
					alt="Delivery Boy"
					className="h-full w-auto object-contain rounded-[12px]"
				/>
			</div>

			{/* Contact Card */}
			<div className="rounded-[20px] bg-[#F5F5F5] p-6 flex flex-col items-center justify-center text-center h-[180px] sm:h-[212px] w-full md:w-60">
				<p className="text-[14px] text-black leading-[20px]">
					<strong>Book</strong> a consultation with our logistics specialists.
				</p>
				<button className="text-center mt-4 bg-[#FF5C00] text-white font-medium px-4 sm:px-6 py-2 rounded-full flex items-center gap-2">
					Contact
					<span className="text-white">📦</span>
				</button>
			</div>
		</div>
	);
}

// Updated service card with two-line title and vertical spacing
function ServiceCard({ image, titleFirstLine, titleSecondLine }) {
	return (
		<div className="rounded-[20px] bg-[#F5F5F5] px-4 sm:px-5 py-5 sm:py-6 h-[180px] sm:h-[212px] w-full md:w-60 flex flex-col justify-between">
			{/* Icon + Title (in two lines) */}
			<div>
				<div className="flex items-center gap-3">
					<img
						src={image}
						alt={`${titleFirstLine} ${titleSecondLine}`}
						className="w-[24px] h-[24px]"
					/>
					<div className="flex flex-col">
						<h3 className="text-[16px] font-semibold text-[#1A1A1A] leading-5">
							{titleFirstLine}
						</h3>
						<h3 className="text-[16px] font-semibold text-[#1A1A1A] leading-5">
							{titleSecondLine}
						</h3>
					</div>
				</div>
			</div>

			{/* Description - now at the bottom with vertical spacing */}
			<p className="text-[12px] leading-[18px] text-[#5E5E5E] text-left">
				Free Download Cargo Crate SVG vector file in monocolor and multicolor
				type for Sketch and Figma from Cargo Crate
			</p>
		</div>
	);
}

export default Banner;
