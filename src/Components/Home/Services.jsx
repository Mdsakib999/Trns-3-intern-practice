import Title from "../../pages/About/Title";
import { FaRegCheckCircle, FaBox } from "react-icons/fa";
import { RiContactsBookUploadLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="bg-[#F3F2F5] mt-44 flex flex-col items-center px-16 py-20">
      <Title title={"OUR SERVICES"} />
      <h1 className="text-5xl text-[#293037] text-center font-semibold mt-3">
        <p>Everything You Need</p>
        <p>We Have! </p>
      </h1>
      <div className="flex items-center justify-between gap-10 mt-12">
        <div className="relative">
          <FaRegCheckCircle
            className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
            size="40"
          />
          <div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
            <h1 className="text-xl font-semibold my-3">Custom Clearance </h1>
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
            <h1 className="text-xl font-semibold my-3">Storage & Packaging </h1>
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
            <h1 className="text-xl font-semibold my-3">Transport Brokerage </h1>
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

export default Services;
