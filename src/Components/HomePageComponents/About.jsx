import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { TbArrowZigZag } from "react-icons/tb";
import { CiStar } from "react-icons/ci";
import service from "/assets/vector1.png";
import { Title } from "../Shared/Title";

export const About = () => {
  return (
    <div className="lg:container mx-auto flex items-center justify-between md:mt-60 lg:mt-20 px-4 lg:px-0">
      {/* Text only */}
      <div className="w-full lg:w-1/2 sm:px-10 md:px-0">
        <Title title={"ABOUT US"} />
        <h1 className="text-5xl font-semibold mt-4 mb-10">
          <span className="block">Mühelose Logistik für eine</span>
          <span className="block">globalisierte Zukunft.</span>
        </h1>
        <p className="text-gray-500">
          ZollTrans Logistics ist ein führendes globales Logistik- und
          Speditionsunternehmen, das sich auf Luft-, See- und Straßenfracht
          sowie umfassende Supply-Chain-Lösungen spezialisiert hat. Mit 18
          internationalen Büros und einem Partnernetzwerk in über 100 Ländern
          bedienen wir Branchen wie Elektronik, Pharma, Automobil, Mode und
          verderbliche Waren. Mit über vier Jahrzehnten Expertise und modernster
          Technologie bieten wir Echtzeit-Tracking von Sendungen und einen
          persönlichen Kundenbetreuer, um einen reibungslosen Service zu
          gewährleisten. Unser Engagement für Vertrauen, Integrität und
          Kundenzufriedenheit treibt unsere Mission an, außergewöhnlichen Wert,
          Zuverlässigkeit und Leistung für Kunden jeder Größe zu liefern.
        </p>
        <div className="flex flex-col gap-y-4 mt-10 text-gray-500">
          <p className="flex items-center gap-x-2">
            <TbArrowZigZag
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span> Streben nach kontinuierlicher Serviceverbesserung</span>
          </p>
          <p className="flex items-center gap-x-2">
            <CiStar
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span>Globale Präsenz mit lokalem Expertenwissen</span>
          </p>
          <p className="flex items-center gap-x-2">
            <IoShieldCheckmarkOutline
              className="bg-orange-600 text-white rounded p-0.5"
              size="24"
            />
            <span>Ehrlichkeit, Vertrauen und Integrität prägen uns</span>
          </p>
        </div>
      </div>
      {/* Image */}
      <div className="bg-black rounded-3xl hidden lg:block">
        <img
          src={service}
          alt="Service"
          className="object-cover w-[450px] h-[600px] rounded-3xl"
        />
      </div>
    </div>
  );
};
