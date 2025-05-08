import worldbg from "/assets/world-map-bg.png";
import locationIcon from "/assets/Location.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { Slide, Zoom } from "react-awesome-reveal";

export const Location = () => {
	const Locations = [
		{
			id: 1,
			name: "Fontana Logistik und Spedition GmbH",
			icon: <FaLocationDot aria-label="Location" />,
			type: "text",
		},
		{
			id: 2,
			name: "customs@fontanalogistik.de",
			icon: <MdEmail aria-label="Email" />,
			type: "email",
		},
		{
			id: 3,
			name: "+494074303440",
			icon: <MdPhone aria-label="Phone" />,
			type: "phone",
		},
	];
	const LocationPin = [
		{
			id: 1,
			top: "30%",
			left: "20%",
		},
		{
			id: 2,
			top: "55%",
			left: "53%",
		},
		{
			id: 3,
			top: "22%",
			left: "77%",
		},
	];

	return (
		<div className="bg-[#FAFAFA] mt-20">
			<div className="flex flex-col lg:flex-row justify-between py-10 px-4 sm:px-6 lg:px-10 gap-10 w-full">
				{/* Text section */}
				<div className="w-full lg:w-1/2">
					<Slide triggerOnce>
						<div className="w-full">
							<h1 className="text-3xl font-semibold">Contact Information</h1>
							<div className="mt-10 flex flex-col gap-6">
								{Locations.map((location) => {
									const isEmail = location.type === "email";
									const isPhone = location.type === "phone";
									const linkHref = isEmail
										? `mailto:${location.name}`
										: isPhone
										? `tel:${location.name}`
										: null;

									const Wrapper = linkHref ? "a" : "div";

									return (
										<Wrapper
											key={location.id}
											href={linkHref || undefined}
											className={`flex items-center gap-4 transition-all duration-300 ${
												linkHref ? "hover:scale-105 cursor-pointer" : ""
											}`}
											target={isEmail ? "_blank" : undefined}
											rel={isEmail ? "noopener noreferrer" : undefined}
										>
											<div className="text-xl bg-orange-500 text-white rounded-md w-10 h-10 flex items-center justify-center">
												{location.icon}
											</div>
											<h2 className="text-lg sm:text-xl break-all">
												{location.name}
											</h2>
										</Wrapper>
									);
								})}
							</div>
						</div>
					</Slide>
				</div>

				{/* Image section */}
				<div className="w-full lg:w-1/2 relative">
					<Zoom triggerOnce>
						<div className="w-full relative">
							<img
								src={worldbg}
								alt="World Map Background"
								className="w-full h-auto object-contain"
							/>
							{LocationPin.map((pin) => (
								<div
									key={pin.id}
									className="absolute animate-bounce"
									style={{
										top: pin.top,
										left: pin.left,
										transform: "translate(-50%, -100%)",
									}}
								>
									<img
										src={locationIcon}
										alt="Location Pin"
										className="w-3.5 h-3.5 md:w-6 md:h-6"
									/>
								</div>
							))}
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
};
