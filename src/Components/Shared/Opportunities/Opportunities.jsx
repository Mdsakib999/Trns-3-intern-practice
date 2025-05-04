import darkweb from "/assets/webbg.png";

function Opportunities() {
  return (
    <div className="relative my-10 flex items-center justify-center rounded-[40px] bg-black overflow-hidden h-[600px]">
      {/* Globe/net image */}
      <img
        src={darkweb}
        alt="Globe network"
        className="absolute bottom-0 w-full object-cover z-10"
      />
      {/* Content */}
      <div className="z-20 text-center text-white px-6">
        <h2 className="text-6xl font-semibold">
          Tap into a World of <br /> Opportunities.
        </h2>
        <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all duration-300">
          Contact Now
          <span className="bg-[#ff5e00] text-white rounded-full p-1">📞</span>
        </button>
      </div>
    </div>
  );
}

export default Opportunities;
