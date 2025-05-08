import { Zoom } from "react-awesome-reveal";
import { Title } from "../Shared/Title";
import { FaRegCheckCircle, FaBox } from "react-icons/fa";
import { RiContactsBookUploadLine } from "react-icons/ri";

export const Services = () => {
	const cardItems = [
		{
			id: 1,
			title: "Zollabfertigung",
			body: "Expertise in Zollabwicklungsdiensten für einen reibungslosen grenzüberschreitenden Transport. Wir kümmern uns um Dokumentation, Compliance, Zollabfertigung sowie die Berechnung von Zöllen und Steuern, um kostspielige Verzögerungen zu vermeiden.",
			icon: FaRegCheckCircle,
		},
		{
			id: 2,
			title: "Sichere Lagerung",
			body: "Sichere und zuverlässige Lagerlösungen in hochmodernen Einrichtungen. Bestandsmanagement und Lagermöglichkeiten für sowohl kurzfristige als auch langfristige Bedürfnisse.Echtzeit-Überwachung des Bestands und effiziente Raumausnutzung.",
			icon: FaBox,
		},
		{
			id: 3,
			title: "Transportlösungen",
			body: "Kostengünstige Transportlösungen über verschiedene Transportarten: Straße, See und Luft.Pünktliche und flexible Transportoptionen, um effiziente Lieferzeiten zu gewährleisten.End-to-End-Tracking Ihrer Sendungen für vollständige Transparenz.",
			icon: RiContactsBookUploadLine,
		},
	];

	return (
		<div className="bg-[#F3F2F5] mt-44 flex flex-col items-center px-5 md:px-10 lg:px-16 py-20">
			<Title title={"UNSERE DIENSTLEISTUNGEN"} />
			<div className="text-2xl md:text-5xl text-[#293037] text-center font-semibold  md:py-5 mt-3 lg:w-[80%] lg:leading-14 ">
				<p>
					Maßgeschneiderte Lösungen für jede Sendung, wo immer Sie sie
					benötigen.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
				<Zoom>
					{cardItems.map(({ id, title, body, icon: Icon }) => (
						<div key={id} className="relative">
							<Icon
								className="absolute -top-5 left-10 bg-orange-600 text-white rounded-lg px-2 py-1"
								size={40}
							/>
							<div className="bg-white px-10 pt-10 pb-16 rounded-2xl">
								<h1 className="text-xl font-semibold my-3">{title}</h1>
								<p className="text-sm text-gray-500 text-start">{body}</p>
							</div>
						</div>
					))}
				</Zoom>
			</div>
		</div>
	);
};
