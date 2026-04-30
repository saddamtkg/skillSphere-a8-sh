"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ slides = [] }) => {
  // This shows a simple fallback if no hero data is found.
  if (!slides.length) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-center text-sm text-slate-500">No hero data found.</p>
      </section>
    );
  }

  return (
    <section
      className="hero-slider relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-lg"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={slides.length > 1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1100}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        simulateTouch={false}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative min-h-[360px] md:min-h-[520px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/52" />

              <div className="relative z-10 flex min-h-[360px] flex-col justify-center px-6 py-10 md:min-h-[520px] md:px-14">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-2xl text-3xl font-bold leading-tight text-white md:text-6xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mt-4 max-w-xl text-sm leading-6 text-slate-200 md:text-base"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-7"
                >
                  <Link
                    href="/courses"
                    className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    {slide.ctaText || "Explore Courses"}
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
