import { useRef, useEffect, useState } from "react";
import { Title } from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import girl from "/assets/girl.png";
import boy from "/assets/boy.png";
import { Slide } from "react-awesome-reveal";

export const Review = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const [slidesPerView, setSlidesPerView] = useState(4);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setSlidesPerView(1);
			} else if (window.innerWidth < 1024) {
				setSlidesPerView(2);
			} else if (window.innerWidth < 1280) {
				setSlidesPerView(3);
			} else {
				setSlidesPerView(4);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const reviews = [
		{
			type: "text",
			content:
				"Wir haben im Laufe der Jahre mit mehreren Spediteuren gearbeitet, aber ZollTrans hebt sich deutlich ab. Ihr Kundenservice ist unübertroffen und ihre Technologie hält uns bei jedem Schritt informiert.",
			author: "Supply Chain Manager, Pharmaindustrie",
		},
		{
			type: "image",
			image: girl,
			alt: "girl",
		},
		{
			type: "text",
			content:
				"ZollTrans war entscheidend für die Optimierung unserer globalen Logistikprozesse. Die Echtzeitverfolgung und die proaktive Kommunikation geben uns volles Vertrauen bei jeder Lieferung.",
			author: "Leiter Logistik, Elektronikunternehmen",
		},
		{
			type: "image",
			image: boy,
			alt: "boy",
		},
		{
			type: "text",
			content:
				"ZollTrans hat uns geholfen, in mehreren Märkten effizient zu expandieren. Ihre Fachkompetenz und Flexibilität machen sie zu einem echten strategischen Partner.",
			author: "Leiter Betrieb, Lebensmittel- & Agrarbranche",
		},
	];

	return (
		<div className="py-10 md:py-16 lg:py-20 relative px-4 md:px-8 lg:px-0">
			<Title title={"Kundenbewertungen"} />
			<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-5 mb-6 md:mb-12">
				<p className="md:w-[80%] lg:w-[70%]">
					Unser Mehrwert – bestätigt durch unsere Kunden
				</p>
			</h1>

			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={slidesPerView}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				className="mySwiper"
			>
				{reviews.map((review, index) => (
					<SwiperSlide key={index}>
						<div className="bg-black text-white w-full h-60 rounded-xl overflow-hidden flex items-center justify-center">
							{review.type === "text" ? (
								<Slide direction="up">
									<div className="p-6 text-sm md:text-base lg:text-lg">
										<p className="text-sm">
											"{review.content}"
											<br />
											<span className="block mt-3 text-sm italic">
												— {review.author}
											</span>
										</p>
									</div>
								</Slide>
							) : (
								<Slide direction="right">
									<div className="w-full h-full flex items-center justify-center">
										<img
											className="h-full w-full object-cover"
											src={review.image}
											alt={review.alt}
											loading="eager"
											onError={(e) => {
												console.error(`Failed to load image: ${review.alt}`);
											}}
										/>
									</div>
								</Slide>
							)}
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation buttons */}
			<div className="flex justify-center gap-4 mt-6 md:mt-10">
				<button
					ref={prevRef}
					className="bg-orange-600 text-white w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer flex items-center justify-center"
				>
					←
				</button>
				<button
					ref={nextRef}
					className="bg-orange-600 text-white w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer flex items-center justify-center"
				>
					→
				</button>
			</div>
		</div>
	);
};
