import React, { useRef, useEffect } from "react";
import Title from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import girl from "/assets/girl.png";
import boy from "/assets/boy.png";

const Review = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	return (
		<div className="py-20 relative">
			<Title title={"CUSTOMER REVIEW"} />
			<h1 className="text-5xl font-semibold mt-5 mb-12">
				<p>Here’s the value we’ve brought</p>
				<p>to our clients.</p>
			</h1>

			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={4}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onInit={(swiper) => {
					// Bind navigation manually after init
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
			>
				<SwiperSlide>
					<div className="bg-black text-white w-72 h-60 p-4 rounded-xl">
						<p>
							Organically grow the holistic world view of disruptive innovation
							via workplace diversity and empowerment.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-black w-72 h-60 rounded-xl">
						<img className="h-60 object-cover" src={girl} alt="girl" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-black text-white w-72 h-60 p-4 rounded-xl">
						<p>
							Leverage agile frameworks to provide a robust synopsis for
							strategy foster collaborative thinking to further the overall
							value proposition.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-black w-72 h-60 rounded-xl">
						<img className="h-60 object-cover" src={boy} alt="boy" />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-black text-white w-72 h-60 p-4 rounded-xl">
						<p>
							Organically grow the holistic world view of disruptive innovation
							via workplace diversity and empowerment.
						</p>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="bg-black text-white w-72 h-60 p-4 rounded-xl">
						<p>
							Organically grow the holistic world view of disruptive innovation
							via workplace diversity and empowerment.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>

			{/* Navigation buttons */}
			<div className="flex justify-center gap-4 mt-10">
				<button
					ref={prevRef}
					className="bg-orange-600 text-white w-10 h-10 rounded-full cursor-pointer"
				>
					←
				</button>
				<button
					ref={nextRef}
					className="bg-orange-600 text-white w-10 h-10 rounded-full cursor-pointer"
				>
					→
				</button>
			</div>
		</div>
	);
};

export default Review;
