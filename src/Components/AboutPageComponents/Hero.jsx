import Title from "../Shared/Title";
import ContainerIamge from "/assets/wireframe.jpg";

function Hero() {
  return (
    <div className="mt-20">
      <div className="px-4 sm:px-8 lg:px-10 py-5">
        <Title title={"why choose us"} />

        {/* Hero section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 mt-10">
          <div className="flex flex-col gap-6 lg:gap-10 w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              Seamless Service for a Connected World
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Free Download Cargo Crate SVG vector file in monocolor and
              multicolor type for Sketch and Figma from Cargo Crate Vectors svg
              vector collection. Cargo Crate Vectors SVG vector illustration.
            </p>
          </div>

          {/* Hero image */}
          <div className="w-full lg:w-1/2">
            <img
              src={ContainerIamge}
              alt="ContainerImage"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 py-10">
        {/* Card 1 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            1.
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
            Custom Clearance
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            2.
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
            Storage & Packaging
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            3.
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
            Transport Brokerage
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
