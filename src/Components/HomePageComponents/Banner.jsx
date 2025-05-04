import bannerImage from "/assets/cargo.png";

const Banner = () => {
  return (
    <div className="w-full my-10 px-4">
      <div className="relative max-w-7xl mx-auto z-0">
        {/* Heading + Image */}
        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10">
          <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl space-y-1 sm:space-y-2">
            <p>FLEXIBLE</p>
            <p>LOGISTICS &</p>
            <p>CARGO SOLUTIONS</p>
          </h1>
        </div>

        <img src={bannerImage} alt="Cargo" className="backdrop-blur-3xl" />

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex flex-wrap items-center justify-center gap-4 text-white bg-black/80 px-4 sm:px-8 py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {["AIR", "ROAD", "OCEAN", "AIR", "ROAD"].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <p className="font-extrabold">{item}</p>
                {index < 4 && (
                  <div className="hidden sm:block border-l h-6 sm:h-10 border-gray-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
