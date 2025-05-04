import bannerImage from "/assets/cargo.png";

const Banner = () => {
  const transportModes = ["AIR", "ROAD", "OCEAN", "AIR", "ROAD"];

  return (
    <div className="w-full my-4 sm:my-6 md:my-8 lg:my-10 px-2 sm:px-4">
      <div className="relative max-w-7xl mx-auto z-0 overflow-hidden">
        {/* Heading */}
        <div className="absolute top-3 left-3 xs:top-4 xs:left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-10">
          <h1 className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl space-y-0 xs:space-y-1 sm:space-y-2">
            <p className="drop-shadow-md">FLEXIBLE</p>
            <p className="drop-shadow-md">LOGISTICS &</p>
            <p className="drop-shadow-md">CARGO SOLUTIONS</p>
          </h1>
        </div>

        {/* Main Image */}
        <img
          src={bannerImage}
          alt="Cargo"
          className="backdrop-blur-3xl w-full h-auto object-cover"
        />

        {/* Bottom bar - Single responsive layout that wraps naturally */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex flex-wrap items-center justify-center text-white bg-black/80 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            {transportModes.map((item, index) => (
              <div
                key={index}
                className="flex items-center mx-2 sm:mx-3 md:mx-4 my-1"
              >
                <p className="font-extrabold">{item}</p>
                {index < transportModes.length - 1 && (
                  <div className="border-l h-4 sm:h-6 md:h-8 lg:h-10 border-gray-400 ml-2 sm:ml-3 md:ml-4"></div>
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
