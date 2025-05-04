import bannerImage from "/assets/cargo.png";

const Banner = () => {
	return (
		<div className="my-10">
			<div className="relative container mx-auto">
				{/* Heading + Image */}
				<h1 className="absolute font-extrabold text-6xl space-y-3">
					<p>FLEXIBLE</p>
					<p>LOGISTICS &</p>
					<p>CARGO SOLUTIONS</p>
				</h1>
				<img src={bannerImage} alt="" />

				{/* Bottom bar */}
				<div className="absolute -mt-24 left-0 right-0">
					<div className="flex items-center justify-between text-white bg-black px-10 py-4 text-3xl">
						<p className="font-extrabold">AIR</p>
						<p className="border h-16 text-gray-400"> </p>
						<p className="font-extrabold">ROAD</p>
						<p className="border h-16 text-gray-400"> </p>
						<p className="font-extrabold">OCEAN</p>
						<p className="border h-16 text-gray-400"> </p>
						<p className="font-extrabold">AIR</p>
						<p className="border h-16 text-gray-400"> </p>
						<p className="font-extrabold">ROAD</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
