"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { product } from "@/lib/product";

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.16),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-25">
        <div className="relative ml-auto h-full w-full max-w-md">
          <Image
            src={product.image}
            alt=""
            fill
            className="object-contain object-right"
            sizes="40vw"
            aria-hidden
          />
        </div>
      </div>

      <div className="container-page relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            আর সুইচ খুঁজে বেড়ানো নয়
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            E27 মোশন সেন্সর হোল্ডার দিয়ে আপনার বাল্বকেই স্মার্ট করুন।
          </p>
          <a href="#order" className="btn-primary mt-8">
            এখনই অর্ডার করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
}
