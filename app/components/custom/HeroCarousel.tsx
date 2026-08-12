"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/assets/projects/IubBongomarine.png",
    title: "PHANTOM-X",
    description: "Defense Rover for Team DEMON71",
  },
  {
    image: "/assets/projects/Shuchimita-circuit.jpg",
    title: "PHOENIX-F1",
    description: "Firefighting Defense Rover",
  },
  {
    image: "/assets/projects/Shuchimita.png",
    title: "AETHER-H1",
    description: "Global IoT Home Automation",
  },
  {
    image: "/assets/projects/Incubator-circuit.jpg",
    title: "Sohoje Vara",
    description: "12 daily essential service providers in one app",
  },
];

const HeroCarousel = () => {
  const renderSlide = (
    imgSrc: string,
    title: string,
    description: string,
    isPriority: boolean
  ) => (
    <div className="relative w-full aspect-[4/5]">
      <Image
        src={imgSrc}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 400px"
        quality={80}
        className="object-cover object-center rounded-t-2xl rounded-b-3xl"
        loading={isPriority ? "eager" : "lazy"}
        priority={isPriority}
      />
      <div
        className="absolute bottom-0 w-full h-20 rounded-b-2xl"
        style={{ backgroundColor: "var(--bg-color-light, #b1cfee)" }}
      ></div>
      <div className="absolute bottom-0 left-0 w-full p-6 bg-opacity-60">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        .hero-carousel .swiper-pagination {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          gap: 6px;
        }

        .hero-carousel .custom-bullet {
          width: 6px;
          height: 6px;
          background-color: gray;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .hero-carousel .swiper-pagination-bullet-active {
          width: 12px;
          height: 6px;
          background-color: white;
        }
      `}</style>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 4000 }}
        className="max-w-sm hero-carousel"
        pagination={{
          clickable: true,
          renderBullet: (index: number, className: string) => {
            return `<div class="${className} custom-bullet"></div>`;
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {renderSlide(
              slide.image,
              slide.title,
              slide.description,
              index === 0
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HeroCarousel;
