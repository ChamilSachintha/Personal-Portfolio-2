// Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";

// Required modules
import { Navigation, Pagination } from "swiper";

// Next image
import Image from "next/image";

import Flag from "react-flagkit";

// Testimonial data
export const testimonialSlider = [
  {
    image: "/client_IshanDahanayaka.jpg",
    name: "Ishan Dahanayaka",
    position:
      "BSc Eng. (Hons), PG. Dip(Structural), CEng, MIESL, Bridge & Structural Design Engineer",
    country: "Sri Lanka",
    icon: <Flag country="LK" />,
    message:
      '"I had privilege of working with Chamil Sachintha when we have joined our hands in organizing of first ever Inter University Debate competition (Engineering) organized by YMS, IESL which was successfully concluded in 2021. Competition was completely held in virtual platform, since the covid pandemic situation and Chamil has done remarkable role as the host throughout the event. As the Chief Organizer of the event, I highly recommend his expertise, dedication and team working skill and any team would be lucky to have Chamil in their team. I wish him every success in all his endeavors."',
  },
  {
    image: "/client_vasile96.jpg",
    name: "vasile96",
    position: "Customer",
    country: "UK",
    icon: <Flag country="GB" />,
    message:
      '"Number 1! Great to work with! The best guy that I worked with! Superfast! Highly recommended!"',
  },
  {
    image: "/client_familiaoffice.jpg",
    name: "familiaoffice",
    position: "Customer",
    country: "Japan",
    icon: <Flag country="JP" />,
    message:
      '"Perfect work as always! Trustable person! Great communication and took all my revisions and changed them to exactly what if asked for!"',
  },
  {
    image: "/client_hussain629.jpg",
    name: "hussain629",
    position: "Customer",
    country: "Hong Kong",
    icon: <Flag country="HK" />,
    message: '"Good and fast work bro delivery on time thank you so much"',
  },
  {
    image: "/client_sergiosombrao.jpg",
    name: "sergiosombrao",
    position: "Customer",
    country: "Brazil",
    icon: <Flag country="BR" />,
    message: '"Very good and fast job 5star"',
  },
  {
    image: "/client_cannoneye.jpg",
    name: "cannoneye",
    position: "Customer",
    country: "Australia",
    icon: <Flag country="AU" />,
    message:
      '"Time Value great communication Happy returning Customer Thank you so much."',
  },
  {
    image: "/client_entzibasllari.jpg",
    name: "entzibasllari",
    position: "Customer",
    country: "UK",
    icon: <Flag country="GB" />,
    message: '"The best."',
  },
  {
    image: "/client_DamithDisanayaka.jpg",
    name: "Damith Disanayaka",
    position:
      "Chartered Civil Engineer | B.Sc. Eng (Hons) | MIE(SL) | Executive Engineer, PRDD, NWP",
    country: "Sri Lanka",
    icon: <Flag country="LK" />,
    message:
      '"I met Mr. Chamil Sachintha when I was the Chairman for Young Members Section (YMS) of the Institution of Engineers Sri Lanka (IESL) for the session 2020/21. It was the first time YMS organized the Inter University Debate competition among the seven engineering faculties in SL. We had to conduct the entire event in virtual platform due to the pandemic situation and Mr. Chamil was the one of active members in the organizing committee. He was the host for all the matches. It was a big task since it was the first experience of most of us for having a debate competition in virtual platform. Mr. Chamil did an amazing work and it was miraculous for me to work with this young, energetic and enthusiastic personality."',
  },
  {
    image: "/client_DineshPiyasamara.jpg",
    name: "Dinesh Piyasamara",
    position: "Content Creator | Intern Software Engineer",
    country: "Sri Lanka",
    icon: <Flag country="LK" />,
    message:
      '"Chamil is an enthusiastic and passionate person, with a strong background in full-stack, front-end web development, UI/UX design, and related areas. He has a continuous effort to be the best in his professional doings."',
  },
  {
    image: "/client_hasnainahmad619.jpg",
    name: "hasnainahmad619",
    position: "Graphic Designer",
    country: "Pakistan",
    icon: <Flag country="PK" />,
    message:
      '"It would a good experience to work with him. He is very Nice and Polite."',
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* Avatar, name and position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* Avatar */}
                  <div className="mb-2 mx-auto rounded-full overflow-hidden">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* Name */}
                  <div className="text-lg text-[20px]">{person.name}</div>
                  {/* Position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                  {/* COuntry name and flag */}
                  <div className="flex items-center justify-center mt-1">
                    <FaMapMarkerAlt className="w-5 h-5 text-accent" />
                    {/* Country name */}
                    <div className="text-[15px] pl-1 mt-1 font-light">
                      {person.country}
                    </div>
                    {/* Flag icon */}
                    <div className="pl-1">{person.icon}</div>
                  </div>
                </div>
              </div>
              {/* Quote and message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* Quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* Message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
