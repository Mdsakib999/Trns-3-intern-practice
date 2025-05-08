import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Title } from "../Shared/Title";
import { Fade, Zoom } from "react-awesome-reveal";

export const ContactUS = () => {
	return (
		<Zoom>
			<div className="mt-20 px-4 sm:px-8 lg:px-12">
				<div className="py-5">
					<Title title={"Kontaktieren Sie uns"} />
				</div>

				{/* Header section */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
					<h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold ">
					Nehmen Sie Kontakt mit uns auf.
					Wir sind hier, um Ihnen zu helfen.
					</h1>

					{/* Social icons */}
					<div className="flex md:flex-col gap-4">
						<div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white transition">
							<FaFacebookF />
						</div>
						<div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white transition">
							<FaInstagram />
						</div>
						<div className="border rounded-full p-3 hover:bg-orange-500 hover:text-white transition">
							<FaTwitter />
						</div>
					</div>
				</div>

				{/* Form section */}
				<div className="space-y-6 mt-10">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
						<div className="flex flex-col">
							<label className="text-sm mb-1">Ihr Name</label>
							<input
								type="text"
								className="border-b-2 focus:outline-none px-2 py-1"
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-sm mb-1">E-Mail-Adresse</label>
							<input
								type="email"
								className="border-b-2 focus:outline-none px-2 py-1"
							/>
						</div>
						<div className="flex flex-col">
							<label className="text-sm mb-1">Telefonnummer (optional)</label>
							<input
								type="text"
								className="border-b-2 focus:outline-none px-2 py-1"
							/>
						</div>
					</div>

					<div className="flex flex-col">
						<label className="text-sm mb-1">Nachricht</label>
						<textarea
							className="border-b-2 focus:outline-none px-2 py-1"
							rows="4"
						></textarea>
					</div>

					<button className="flex items-center bg-orange-500 text-white py-2 px-3 rounded-full space-x-2 hover:bg-orange-600 transition shadow-orange-100 shadow-xl">
						<span>Nachricht Senden</span>
						<div className="border rounded-full p-2 bg-white">
							<IoIosSend className="text-orange-500 text-xl" />
						</div>
					</button>
				</div>
			</div>
		</Zoom>
	);
};
