import { useRef, useEffect, useState } from "react";
import { Title } from "../Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import girl from "/assets/girl.png";
import boy from "/assets/boy.png";

export const Review = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // State to handle responsive slidesPerView
  const [slidesPerView, setSlidesPerView] = useState(4);

  // Update slidesPerView based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Small devices: 1 slide
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        // Medium devices: 2 slides
        setSlidesPerView(2);
      } else if (window.innerWidth < 1280) {
        // Large devices: 3 slides
        setSlidesPerView(3);
      } else {
        // Extra large devices: 4 slides
        setSlidesPerView(4);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-10 md:py-16 lg:py-20 relative px-4 md:px-8 lg:px-0">
      <Title title={"CUSTOMER REVIEW"} />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 md:mt-5 mb-6 md:mb-12">
        <p>Here's the value we've brought</p>
        <p>to our clients.</p>
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
          // Bind navigation manually after init
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="bg-black text-white w-full h-60 p-4 rounded-xl"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-black w-full h-60 rounded-xl"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <img
              className="h-60 w-full object-cover rounded-xl"
              src={girl}
              alt="girl"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-black text-white w-full h-60 p-4 rounded-xl"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-black w-full h-60 rounded-xl"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              className="h-60 w-full object-cover rounded-xl"
              src={boy}
              alt="boy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black text-white w-full h-60 p-4 rounded-xl">
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black text-white w-full h-60 p-4 rounded-xl">
            <p>
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
          </div>
        </SwiperSlide>
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
