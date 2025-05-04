import Title from "../Shared/Title";
import ContainerIamge from "/assets/wireframe.jpg";

function Hero() {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-[100px]">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 py-4 sm:py-5">
        <Title title={"why choose us"} />

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 xl:gap-40 mt-6 sm:mt-8 md:mt-10">
          {/* Left content */}
          <div
            className="flex flex-col gap-6 sm:gap-10 lg:gap-16 xl:gap-20 w-full lg:w-1/2"
            data-aos="fade-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-14">
              <p>Seamless Service</p>
              <p>for a Connected</p>
              <p>World</p>
            </h1>
            <p className="text-xs sm:text-sm opacity-50 max-w-lg">
              Free Download Cargo Crate SVG vector file in monocolor and
              multicolor type for Sketch and Figma from Cargo Crate Vectors svg
              vector collection. Cargo Crate Vectors SVG vector illustration
            </p>
          </div>

          {/* Hero image - responsive width */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0" data-aos="fade-right">
            <img
              src={ContainerIamge}
              alt="Container Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Cards section - responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 mt-8 sm:mt-12 lg:mt-16">
        {/* Card 1 */}
        <div
          className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm"
          data-aos="fade-left"
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
}

export default Hero;
