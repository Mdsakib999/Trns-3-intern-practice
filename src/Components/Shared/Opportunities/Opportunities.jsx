import { Link } from "react-router-dom";
import darkweb from "/assets/webbg.png";
import { IoCallOutline } from "react-icons/io5";
import { Zoom } from "react-awesome-reveal";
export const Opportunities = () => {
	return (
		<Zoom>
			<div className="relative my-5 sm:my-8 lg:my-10 flex justify-center rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] bg-black overflow-hidden h-[400px] sm:h-[550px] lg:h-[600px] mx-4 sm:mx-6 lg:mx-0">
				{/* Globe/net image */}
				<img
					src={darkweb}
					alt="Globe network"
					className="absolute bottom-0 w-full object-cover z-10"
				/>
				{/* Content */}
				<div className="z-20 text-center mt-10 sm:mt-16 lg:mt-20 text-white px-4 sm:px-6">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
						Tap into a World of <br className="hidden sm:block" />{" "}
						Opportunities.
					</h2>
					<div className="text-sm opacity-50 text-white mt-3 lg:mt-10 flex items-center justify-center flex-col">
						<p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<p> Cumque, est quos quas doloremque libero ipsam.</p>
						<p>Doloribus libero earum sed consequuntur.</p>
					</div>
					<Link to="/contact">
						<button className="inline-flex items-center cursor-pointer gap-4 font-semibold rounded-full  px-3 lg:px-4 py-2 text-sm sm:text-base text-black hover:bg-orange-500 hover:text-white mt-8 sm:mt-12 lg:mt-16 bg-white">
							Contact Now
							<IoCallOutline className="bg-[#ff5e00] rounded-full text-white text-4xl p-2" />
						</button>
					</Link>
				</div>
			</div>
		</Zoom>
	);
};
