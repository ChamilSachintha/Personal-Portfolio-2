// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import { RxArrowTopRight, RxLayout, RxVideo, RxMix, RxImage, RxLaptop } from "react-icons/rx";

// Required modules
import { FreeMode, Pagination } from "swiper";

// Link
import Link from "next/link";

// Service data
export const serviceData = [
  {
    icon: <RxLaptop />,
    title: "Front-End",
    description:
      "Transforming design concepts into interactive and user-friendly interfaces that captivate and engage users.",
  },
  {
    icon: <RxMix />,
    title: "UI / UX",
    description:
      "Designing intuitive, user-friendly interfaces that enhance usability and create seamless experiences.",
  },
  {
    icon: <RxVideo />,
    title: "Video Editing",
    description:
      "Editing raw footage into clear, compelling videos that tell your story and keep your audience engaged.",
  },
  {
    icon: <RxImage />,
    title: "Graphic Design",
    description:
      "Crafting clean, engaging visuals that communicate your message clearly and enhance your brand’s identity.",
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
        1024: {
    slidesPerView: 4, // Show all 4 on larger screens
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
            <a href="#work">
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group curser-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* Icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* Title and description */}
                <div className="mb-8">
                  <div className="mb-2 text-base">{item.title}</div>
                  <p className="max-w-[350px] text-sm leading-normal ">
                    {item.description}
                  </p>
                </div>
                {/* Arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
