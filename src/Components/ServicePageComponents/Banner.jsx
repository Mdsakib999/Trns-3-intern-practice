/* eslint-disable react/prop-types */
import CourierVector from "/assets/courier.png";
import ShipVector from "/assets/Ship.png";
import LuggageVector from "/assets/bus-two.png";
import WorldVector from "/assets/world.png";
import DeliveryBoy from "/assets/delivery-boy.png";
import { IoCallOutline } from "react-icons/io5";
import { Zoom } from "react-awesome-reveal";

export const Banner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
      {/* Left Heading - Vertically centered, full width on mobile */}
      <div className="flex items-center justify-center lg:justify-start col-span-1 sm:col-span-2 lg:col-span-1 mb-4 sm:mb-0 h-[180px] sm:h-[212px]">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-8">
        Umfassende Logistiklösungen, maßgeschneidert für Ihren Bedarf
        </h2>
      </div>

      {/* Service Cards - will wrap based on grid layout */}
      <ServiceCard
        image={LuggageVector}
        titleFirstLine="Zollabfertigung"
        description="Effiziente Zollabwicklung und Dokumentation für Importe und Exporte, die die Einhaltung der Vorschriften sicherstellt."
      />
      <ServiceCard
        image={CourierVector}
        titleFirstLine="Projektladung "
        description="Expertise bei überdimensionalen oder komplexen Sendungen, einschließlich Industrieausrüstungen und groß angelegtem Cargo."
      />
      <ServiceCard
        image={ShipVector}
        titleFirstLine="Seefracht"
        description="Inlands- und grenzüberschreitende Transportdienste für Komplettladungen (FTL) und Teilladungen (LTL)."
      />
      <ServiceCard
        image={LuggageVector}
        titleFirstLine="Straßenfracht"
        description="Specialized handling of oversized cargo and complex logistical challenges."
      />
      <ServiceCard
        image={WorldVector}
        titleFirstLine="Lagerung & Distribution"
        description="Sichere Lagerung, Bestandsmanagement und Zustellung der letzten Meile, die auf Ihre Lieferkette zugeschnitten sind."
      />

      {/* Delivery Boy Card */}
      <Zoom>
        <div className="rounded-[20px] bg-black flex justify-center items-center p-4 h-[180px] sm:h-[212px] w-full md:w-60">
          <img
            src={DeliveryBoy}
            alt="Delivery Boy"
            className="h-full w-auto object-contain rounded-[12px]"
          />
        </div>
      </Zoom>

      {/* Contact Card */}
      <Zoom>
        <div className="rounded-[20px] bg-[#F5F5F5] p-6 flex flex-col items-center justify-center text-center h-[180px] sm:h-[212px] w-full md:w-60">
          <p className="text-[14px] text-black leading-[20px]">
            <strong>Buchen</strong> Sie ein Beratungsgespräch mit unseren Logistikspezialisten.
          </p>
          <button className="text-center mt-4 bg-[#FF5C00] text-white font-medium px-3 py-2 rounded-full flex items-center gap-2">
            Kontaktieren
            <IoCallOutline className=" text-xl" />
          </button>
        </div>
      </Zoom>
    </div>
  );
};

// Updated service card with single-line title and unique descriptions
function ServiceCard({ image, titleFirstLine, description }) {
  return (
    <Zoom>
      <div className="rounded-[20px] bg-[#F5F5F5] px-4 sm:px-5 py-5 sm:py-6 h-[180px] sm:h-[212px] w-full md:w-60 flex flex-col justify-between">
        {/* Icon + Title */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={image}
              alt={titleFirstLine}
              className="w-[24px] h-[24px]"
            />
            <div className="flex flex-col">
              <h3 className="text-[16px] font-semibold text-[#1A1A1A] leading-5">
                {titleFirstLine}
              </h3>
            </div>
          </div>
        </div>

        {/* Unique Description */}
        <p className="text-[12px] leading-[18px] text-[#5E5E5E] text-left">
          {description}
        </p>
      </div>
    </Zoom>
  );
}