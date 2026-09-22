"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { product, formatPrice, packages } from "@/lib/product";

import "swiper/css";
import "swiper/css/pagination";

const slides = product.images;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-glow text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 soft-grid mix-blend-soft-light" />

      <div className="container-page relative grid min-h-[88vh] items-center gap-10 py-14 lg:grid-cols-2 lg:gap-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="mt-5 max-w-xl text-balance text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.25]">
            Motion Sensor Bulb Holder 360 Degrees Intelligent Induction
            Integrated PIR Motion Sensor E27 Lamp Socket
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            সাধারণ E27 বাল্বকে স্মার্ট মোশন লাইটে বদলান। সকেটে লাগান, বাল্ব
            ঘুরান — আর কোনো সুইচ খোঁজার ঝামেলা নেই।
          </p>

          <div className="mt-6 flex flex-wrap items-end gap-3">
            <p className="text-3xl font-bold text-glow">
              {formatPrice(packages[0].price)}
            </p>
            <p className="pb-1 text-slate-400 line-through">
              {formatPrice(product.regularPrice)}
            </p>
            <p className="pb-1 text-sm text-slate-400">
              থেকে শুরু · ২+ পিসে ফ্রি ডেলিভারি
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#order" className="btn-primary">
              এখনই অর্ডার করুন
            </a>
            <a href="#demo" className="btn-secondary">
              ভিডিও দেখুন
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow/30 blur-3xl sm:h-80 sm:w-80"
            animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="hero-swiper relative mx-auto aspect-square w-full max-w-[440px]">
            <Swiper
              modules={[Autoplay, Pagination]}
              loop
              speed={750}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              className="h-full w-full"
            >
              {slides.map((src, i) => (
                <SwiperSlide key={src}>
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${product.nameBn} — ছবি ${i + 1}`}
                      fill
                      priority={i === 0}
                      className="object-contain drop-shadow-[0_30px_60px_rgba(251,191,36,0.25)]"
                      sizes="(max-width: 768px) 90vw, 440px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
