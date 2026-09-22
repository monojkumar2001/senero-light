"use client";

import { motion } from "framer-motion";
import { product } from "@/lib/product";

export default function ProductVideo() {
  return (
    <section id="demo" className="section-padding relative scroll-mt-24 overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.08),transparent_50%)]" />

      <div className="container-page relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold tracking-wide text-glow">ডেমো</p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            কীভাবে কাজ করে — এক নজরে দেখুন
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            ইনস্টল থেকে অটো অন/অফ পর্যন্ত পুরো প্রক্রিয়া ভিডিওতে।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-night-soft shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/5">
            <video
              className="aspect-video w-full bg-black object-contain"
              controls
              playsInline
              preload="metadata"
              poster={product.image}
            >
              <source src={product.video} type="video/mp4" />
              আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
