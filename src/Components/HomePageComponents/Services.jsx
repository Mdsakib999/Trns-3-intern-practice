import { Title } from "../Shared/Title";
import { FaRegCheckCircle, FaBox } from "react-icons/fa";
import { RiContactsBookUploadLine } from "react-icons/ri";
export const Services = () => {
  return (
    <div className="bg-[#F3F2F5] mt-10 flex flex-col items-center px-5 md:px-10 lg:px-16 py-10">
      <Title title={"OUR SERVICES"} />
      <h1 className="text-2xl  md:text-5xl font-semibold leading-tight mb-6 text-center">
        <span className="block">Everything You Need</span>
        <span className="block text-primary">We Have!</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        <div className="relative">
          <FaRegCheckCircle
            className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
            size="40"
          />
          <div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
            <h1 className="text-xl font-semibold my-3 whitespace-nowrap">
              Custom Clearance{" "}
            </h1>
            <p className="text-sm text-gray-500">
              Explore our comprehensive range of chartering services. Explore
              our comprehensive range of chartering services.{" "}
            </p>
          </div>
        </div>
        <div className="relative">
          <FaBox
            className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
            size="40"
          />
          <div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
            <h1 className="text-xl font-semibold my-3 whitespace-nowrap">
              Storage & Packaging{" "}
            </h1>
            <p className="text-sm text-gray-500">
              Explore our comprehensive range of chartering services. Explore
              our comprehensive range of chartering services.{" "}
            </p>
          </div>
        </div>
        <div className="relative">
          <RiContactsBookUploadLine
            className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
            size="40"
          />
          <div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
            <h1 className="text-xl font-semibold my-3 whitespace-nowrap">
              Transport Brokerage{" "}
            </h1>
            <p className="text-sm text-gray-500">
              Explore our comprehensive range of chartering services. Explore
              our comprehensive range of chartering services.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
