import darkweb from "/assets/webbg.png";

function Opportunities() {
  return (
    <div className="relative my-10 flex justify-center rounded-3xl md:rounded-[40px] bg-black overflow-hidden h-[500px] sm:h-[600px] lg:h-[700px] md:mx-10 mx-2">
      {/* Globe/net image */}
      <img
        src={darkweb}
        alt="Globe network"
        className="absolute bottom-0 w-full object-cover z-10"
      />
      {/* Content */}
      <div className="z-20 text-center mt-10 sm:mt-16 md:mt-20 text-white px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Tap into a World of <br /> Opportunities.
        </h2>
        <button className="inline-flex items-center gap-2 rounded-full border border-white px-4 sm:px-6 py-2 text-sm sm:text-base text-white hover:bg-white hover:text-black transition-all duration-300 mt-10 sm:mt-14 md:mt-20">
          Contact Now
          <span className="bg-[#ff5e00] text-white rounded-full p-1">📞</span>
        </button>
      </div>
    </div>
  );
}

export default Opportunities;
