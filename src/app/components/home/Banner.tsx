"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      title: "Gamehok",
      premium: true,
      desc: "Upgrade to premium membership and get",
      highlight: "100",
      additional: "and many other premium features.",
      button: "Get Now",
      link: "View All Feature",
      color: "linear-gradient(183.09deg, #FEEBA6 2.56%, #FFFFFF 104.16%)",
    },
    {
      title: "Gamehok",
      premium: true,
      desc: "Upgrade to premium membership and get",
      highlight: "200",
      additional: "and unlock exclusive items.",
      button: "Get Now",
      link: "View All Feature",
      color: "linear-gradient(183.09deg, #A6FEEB 2.56%, #FFFFFF 104.16%)",
    },
    {
      title: "Gamehok",
      premium: true,
      desc: "Upgrade to premium membership and get",
      highlight: "300",
      additional: "and many other exclusive perks.",
      button: "Get Now",
      link: "View All Feature",
      color: "linear-gradient(183.09deg, #F6A6FE 2.56%, #FFFFFF 104.16%)",
    },
  ];

  return (
    <div className="w-full mt-14">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        className="rounded-2xl shadow-md"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              style={{ background: slide.color }}
              className="text-black rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col"
            >
              <div className="flex  md:flex-row justify-between items-start md:items-center">
                <div className="flex items-start sm:items-center mb-4 md:mb-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold p-2">
                    {slide.title}
                  </h2>
                  {slide.premium && (
                    <Image
                      src="/premium.svg"
                      alt="Premium Icon"
                      width={100}
                      height={100}
                      className="ml-0 sm:ml-3 mt-2 sm:mt-0"
                    />
                  )}
                </div>
                <button className="bg-[#FA7B4D] text-white px-3 sm:px-8 py-2 rounded-lg text-sm sm:text-base md:text-lg">
                  {slide.button}
                </button>
              </div>

              <div className="text-lg sm:text-xl md:text-2xl px-2 my-1  flex items-center gap-1">
                <span className="text-base lg:text-2xl">
                  {slide.desc} {slide.highlight}
                  <Image
                    src="/ticket.svg"
                    width={40}
                    height={40}
                    alt="ticket"
                    className="inline-block px-1"
                  />
                  {slide.additional}
                </span>
              </div>

              <button className="flex items-center gap-2 text-base sm:text-lg md:text-xl text-[#01A74B] px-2 mt-4">
                {slide.link}
                <Image
                  src="/leftchevon.svg"
                  width={20}
                  height={20}
                  alt="arrow"
                />
              </button>
            </motion.section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
