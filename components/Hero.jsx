"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { product } from "@/lib/product";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffe4c7_0%,#fff0de_35%,#fff8f0_70%,#fffbf7_100%)]"
    >
      <div className="container-page max-w-5xl relative z-10 flex flex-col items-center px-4 pb-10 pt-8 text-center sm:pb-10 sm:pt-10 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex w-full flex-col items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Kenarooz"
            width={200}
            height={100}
            priority
            className=" object-contain "
          />

          <h1 className="mt-6 max-w-7xl text-center text-balance font-bold leading-snug text-primary pb-4 text-3xl md:text-3xl lg:text-3xl">
            মানুষ এলেই আলো জ্বলবে—৩৬০° স্মার্ট সেন্সর ল্যাম্প হোল্ডার
          </h1>

          <p className="mt-5 max-w-2xl text-center leading-relaxed text-dark font-bold text-xl md:text-2xl lg:text-2xl">
            বারবার সুইচ খোঁজার ঝামেলা শেষ।
          </p>
          <h2 className="mt-5 max-w-2xl text-center leading-relaxed text-dark font-bold text-md md:text-2xl lg:text-2xl">
            PIR Motion Sensor Light Holder আপনার চলাফেরা শনাক্ত করে স্বয়ংক্রিয়ভাবে লাইট ON/OFF করে।
            স্বয়ংক্রিয়ভাবে লাইট ON/OFF করে।
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative mt-8 w-full  sm:mt-10"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-[0_16px_40px_rgba(253,119,1,0.18)]">
            <Image
              src="/images/hero-banner.png"
              alt={product.nameBn}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 640px) 92vw, 576px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-7 sm:mt-8"
        >
          <a href="#order" className="btn-primary px-8 py-3">
            অর্ডার করুন
          </a>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 leading-[0]"
        aria-hidden
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-10 w-full sm:h-14 lg:h-16"
        >
          <path
            fill="#ffffff"
            d="M0,48 C120,72 240,8 360,28 C480,48 600,78 720,58 C840,38 960,8 1080,24 C1200,40 1320,70 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}
