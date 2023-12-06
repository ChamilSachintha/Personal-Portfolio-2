// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import { RxArrowTopRight, RxLayout, RxLayers, RxMix } from "react-icons/rx";

// Required modules
import { FreeMode, Pagination } from "swiper";

// Link
import Link from "next/link";

// Service data
export const serviceData = [
  // {
  //   icon: <RxLayers />,
  //   title: "Full-Stack",
  //   description:
  //     "Crafting comprehensive solutions that seamlessly integrate front-end and back-end technologies for an end-to-end experience.",
  // },
  {
    icon: <RxLayout />,
    title: "Front-End",
    description:
      "Transforming design concepts into interactive and user-friendly interfaces that captivate and engage users.",
  },
  {
    icon: <RxMix />,
    title: "UI / UX",
    description:
      "Elevating digital experiences through intuitive user interfaces and thoughtful user experiences that leave a lasting impact.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Link href="/work">
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group curser-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* Title and description */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal ">
                    {item.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
