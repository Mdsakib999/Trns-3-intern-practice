import CourierVector from "/assets/courier.png";
import ShipVector from "/assets/Ship.png";
import LuggageVector from "/assets/bus-two.png";
import WorldVector from "/assets/world.png";
import DeliveryBoy from "/assets/delivery-boy.png";

function Banner() {
  return (
    <div className="grid grid-cols-12 gap-6 px-8 py-16 bg-white">
      {/* Left Heading */}
      <div className="col-span-3 flex items-start">
        <h2 className="text-3xl font-semibold leading-snug">
          Comprehensive logistics solutions tailored to your need
        </h2>
      </div>

      {/* Top Row - Cards */}
      <div className="col-span-9 grid grid-cols-3 gap-6">
        <ServiceCard image={LuggageVector} title="Carrying The Load" />
        <ServiceCard image={CourierVector} title="Post & Courier" />
        <ServiceCard image={ShipVector} title="Fuelling Division" />
      </div>

      {/* Bottom Row: 2 Cards + Image */}
      <div className="col-span-9 grid grid-cols-3 gap-6 mt-6">
        <ServiceCard image={LuggageVector} title="Carrying The Load" />
        <ServiceCard image={WorldVector} title="Custom Clearance" />
        <div className="rounded-[20px] bg-black flex justify-center items-center p-4 h-[212px] w-[228px]">
          <img
            src={DeliveryBoy}
            alt="Delivery Boy"
            className="h-full w-auto object-contain rounded-[12px]"
          />
        </div>
      </div>

      {/* Contact Box */}
      <div className="col-span-3 mt-6 rounded-[20px] bg-[#F5F5F5] p-6 flex flex-col justify-between w-[228px] h-[212px]">
        <p className="text-[14px] text-black leading-[20px]">
          <strong>Book</strong> a consultation with our logistics specialists.
        </p>
        <button className="mt-4 bg-[#FF5C00] text-white font-medium px-6 py-2 rounded-full self-start flex items-center gap-2">
          Contact
          <span className="text-white">📦</span>
        </button>
      </div>
    </div>
  );
}

// Reusable service card
function ServiceCard({ image, title }) {
  return (
    <div className="rounded-[20px] bg-[#F5F5F5] px-5 py-6 w-[228px] h-[212px] flex flex-col justify-start">
      {/* Icon + Title */}
      <div className="flex items-center gap-3">
        <img src={image} alt={title} className="w-[24px] h-[24px]" />
        <h3 className="text-[16px] font-semibold text-[#1A1A1A] leading-[22px]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-[12px] leading-[18px] text-[#5E5E5E] text-left">
        Free Download Cargo Crate SVG vector file in monocolor and multicolor
        type for Sketch and Figma from Cargo Crate
      </p>
    </div>
  );
}

export default Banner;
