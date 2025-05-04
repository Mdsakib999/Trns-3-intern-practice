import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbArrowZigZag } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import service from "/assets/vector1.png";
import Title from "../../pages/About/Title";

const About = () => {
  return (
    <div className="container mx-auto  flex items-center justify-between mt-20">
      {/* Text only */}
      <div>
        <Title title={"ABOUT US"} />
        <h1 className="text-5xl font-semibold mt-4 mb-10">
          <p>Seamless Service</p>
          <p>for a Connected</p>
          <p>World</p>
        </h1>
        <p className="text-gray-500">
          Free Download Cargo Crate SVG vector file in monocolor and multicolor
          type for Sketch and Figma from Cargo Crate Vectors svg vector
          collection. Cargo Crate Vectors SVG vector illustration
        </p>
        <div className="flex flex-col gap-y-4 mt-10 text-gray-500">
          <p className="flex items-center gap-x-2">
            <TbArrowZigZag
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span>Cargo Crate Vectors SVG vector illustratio</span>
          </p>
          <p className="flex items-center gap-x-2">
            <CiStar
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span>Cargo Crate Vectors SVG vector illustratio</span>
          </p>
          <p className="flex items-center gap-x-2">
            <IoShieldCheckmarkOutline
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span>Cargo Crate Vectors SVG vector illustratio</span>
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="bg-black rounded-3xl">
        <img src={service} alt="" className=" object-cover" />
      </div>
    </div>
  );
};

export default About;
