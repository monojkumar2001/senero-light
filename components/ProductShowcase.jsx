"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    src: "/images/product-hq-1.webp",
    alt: "Infrared Sensor Lamp Holder with packaging",
  },
  {
    src: "/images/product-hq-2.webp",
    alt: "E27 Motion Sensor Bulb Socket features",
  },
  {
    src: "/images/product-hq-3.webp",
    alt: "Motion sensor bulb holder product view",
  },
  {
    src: "/images/product-hq-4.webp",
    alt: "Sensor holder detail view",
  },
  {
    src: "/images/product-hq-5.webp",
    alt: "Infrared Sensor Lamp Holder and box",
  },
];

export default function ProductShowcase() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
            ইনফ্রারেড সেন্সর বাল্ব হোল্ডার
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-dark sm:text-base md:text-lg">
            স্মার্ট ইনফ্রারেড সেন্সর প্রযুক্তি মানুষের চলাচল শনাক্ত করে
            স্বয়ংক্রিয়ভাবে বাল্ব জ্বালিয়ে দেয়। ৩৬০° ডিটেকশন কভারেজের কারণে
            ঘরের বিভিন্ন কোণ থেকেও আপনার উপস্থিতি সহজেই শনাক্ত করতে পারে।
          </p>
        </motion.div>

        <motion.div
          className="showcase-swiper relative mx-auto mt-8 w-full max-w-xl sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-soft">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop
              speed={650}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onBeforeInit={(swiper) => {
                if (typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
              onSwiper={(swiper) => {
                if (typeof swiper.params.navigation === "boolean") return;
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              className="pb-11"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.src}>
                  <div className="relative aspect-square w-full bg-white">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="(max-width: 640px) 92vw, 576px"
                      priority={slide.src === slides[0].src}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button
            ref={prevRef}
            type="button"
            className="absolute left-2 top-[calc(50%-1.375rem)] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/95 text-dark shadow-md outline-none ring-1 ring-black/10 transition hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary sm:left-3 sm:h-10 sm:w-10"
            aria-label="আগের ছবি"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="absolute right-2 top-[calc(50%-1.375rem)] z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white/95 text-dark shadow-md outline-none ring-1 ring-black/10 transition hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary sm:right-3 sm:h-10 sm:w-10"
            aria-label="পরের ছবি"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
