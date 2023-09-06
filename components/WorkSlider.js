import React from "react";

// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Icons
import { BsArrowRight } from "react-icons/bs";

// Required modules
import { Navigation, Pagination } from "swiper";

// Next image
import Image from "next/image";

// Link
import Link from "next/link";

export const workSlider = {
  slides: [
    {
      type: "front-end",
      images: [
        {
          title: "Welpalla Signature",
          path: "/thumb5.png",
          link: "https://welpalla-signature.com/",
        },
        {
          title: "Student Progress Viewer",
          path: "/thumb8.png",
          link: "https://student-progress-viewer.vercel.app/",
        },
        {
          title: "Personal Portfolio",
          path: "/thumb6.png",
          link: "https://personal-portfolio1-sooty.vercel.app/",
        },
        {
          title: "Siyakma Academy",
          path: "/thumb7.png",
          link: "https://siyakmaacademy.com/",
        },
      ],
    },
    {
      type: "full-stack",
      images: [
        {
          title: "Pharmacy Management System",
          path: "/thumb16.png",
          link: "https://github.com/ChamilSachintha/Pharmacy-Management-System",
        },
      ],
    },
    {
      type: "UI/UX",
      images: [
        
        {
          title: "Space Travel App",
          path: "/thumb14.png",
          link: "https://www.behance.net/gallery/179123389/Space-Travel-Mobile-App-UIUX-Design",
        },
        {
          title: "Brain Tumor Detection AI Website UI",
          path: "/thumb11.png",
          link: "https://www.behance.net/gallery/179109025/Brain-Tumor-Detection-AI-Website-UI",
        },
        
        {
          title: "Food Ordering - Customer App",
          path: "/thumb9.png",
          link: "https://www.behance.net/gallery/179062255/Food-Ordering-Customer-App",
        },
     
        {
          title: "Online Grocery Ordering App UI Design",
          path: "/thumb12.png",
          link: "https://www.behance.net/gallery/179110357/Online-Grocery-Ordering-App-UI-Design",
        },
        {
          title: "Resort Website UI/UX Design",
          path: "/thumb13.png",
          link: "https://www.behance.net/gallery/179113783/Resort-Website-UIUX-Design",
        },
        {
          title: "Food Ordering - Rider App",
          path: "/thumb10.png",
          link: "https://www.behance.net/gallery/179067551/Food-Ordering-Rider-App",
        },
        {
          title: "Academic Calendar UI",
          path: "/thumb15.png",
          link: "https://www.behance.net/gallery/179137501/Academic-Calendar-UI-Design",
        },
      ],
    },
  ],
};

const WorkSlider = ({ activeTab }) => {
  const filteredSlides = workSlider.slides.filter(
    (slide) => slide.type === activeTab
  );

  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className=""
    >
      {filteredSlides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link key={index} href={`${image.link}`} target="_blank">
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={index}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* Image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt={image.title}
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* Title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* Title part 1 */}
                            <div className="delay-100 drop-shadow-md">LIVE</div>
                            {/* Title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 drop-shadow-md">
                              PROJECT
                            </div>
                            {/* Icon*/}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 drop-shadow-md">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
