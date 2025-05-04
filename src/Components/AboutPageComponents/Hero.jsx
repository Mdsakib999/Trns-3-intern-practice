import Title from "../Shared/Title";
import ContainerIamge from "/assets/wireframe.jpg";
function Hero() {
  return (
    <div className="mt-[100px]">
      <div className="mx-10 py-5">
        <Title title={"why choose us"} />

        {/* Hero section */}
        <div className="flex gap-40">
          <div className="flex flex-col gap-20 w-1/3">
            <h1 className="text-6xl font-semibold">
              Seamless Service for a Connected World{" "}
            </h1>
            <p className="text-sm opacity-50">
              Free Download Cargo Crate SVG vector file in monocolor and
              multicolor type for Sketch and Figma from Cargo Crate Vectors svg
              vector collection.Cargo Crate Vectors SVG vector illustration
            </p>
          </div>
          {/* Hero image */}
          <div className="w-1/3">
            <img src={ContainerIamge} alt="ContainerImage" className="" />
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Card 1 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            1.
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Custom Clearance
          </h3>
          <p className="text-gray-600 mt-2">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>
        {/* Card 2 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            2.
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Storage & Packaging
          </h3>
          <p className="text-gray-600 mt-2">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>
        {/* Card 3 */}
        <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="absolute -top-3 left-4 bg-orange-500 text-white rounded-md px-3 py-1 text-sm font-semibold shadow-md">
            3.
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">
            Transport Brokerage
          </h3>
          <p className="text-gray-600 mt-2">
            Explore our comprehensive range of chartering services. Explore our
            comprehensive range of chartering services.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
