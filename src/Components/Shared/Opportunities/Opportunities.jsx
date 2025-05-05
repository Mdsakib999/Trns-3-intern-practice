import darkweb from "/assets/webbg.png";

<<<<<<< HEAD
export const Opportunities = () => {
  return (
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
          Tap into a World of <br className="hidden sm:block" /> Opportunities.
        </h2>
        <button className="inline-flex items-center gap-2 rounded-full border border-white px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-white hover:text-black transition-all duration-300 mt-8 sm:mt-12 lg:mt-20">
          Contact Now
          <span className="bg-[#ff5e00] text-white rounded-full p-1">📞</span>
        </button>
      </div>
    </div>
  );
};
=======
function Opportunities() {
	return (
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
					Tap into a World of <br className="hidden sm:block" /> Opportunities.
				</h2>
				<button className="inline-flex items-center gap-2 rounded-full border border-white px-4 sm:px-5 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-white hover:bg-white hover:text-black transition-all duration-300 mt-8 sm:mt-12 lg:mt-20">
					Contact Now
					<span className="bg-[#ff5e00] text-white rounded-full p-1">📞</span>
				</button>
			</div>
		</div>
	);
}

export default Opportunities;
>>>>>>> 6f1a5d5c3a5f88370aaccb950ce93dab61f46245
