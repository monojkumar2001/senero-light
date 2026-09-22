"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plug, Scan, Lightbulb, ArrowDown } from "lucide-react";
import { product } from "@/lib/product";

const steps = [
  {
    icon: Plug,
    title: "হোল্ডার ও বাল্ব লাগান",
    description: "E27 সকেটে হোল্ডার, তারপর নিচে বাল্ব — সহজ ইনস্টল।",
  },
  {
    icon: Scan,
    title: "মোশন ধরা পড়ে",
    description: "PIR সেন্সর ৩৬০° এলাকায় মানুষের চলাচল শনাক্ত করে।",
  },
  {
    icon: Lightbulb,
    title: "আলো অটো অন/অফ",
    description: "কাছে গেলে জ্বলে, চলে গেলে নির্ধারিত সময় পর নিভে যায়।",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">সহজ প্রক্রিয়া</p>
          <h2 className="section-title mt-3">কীভাবে কাজ করে</h2>
          <p className="section-sub">
            কোনো জটিল ওয়্যারিং ছাড়াই তিন ধাপে স্মার্ট আলো।
          </p>
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-center gap-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="flex w-full flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex w-full items-center gap-4 rounded-md bg-white p-5 shadow-card"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-night text-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-dark">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{step.description}</p>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center py-2 text-primary"
                      aria-hidden
                    >
                      <div className="h-5 w-px bg-primary/30" />
                      <ArrowDown className="h-5 w-5" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-100 p-6 shadow-soft sm:p-8">
              <div className="relative mx-auto aspect-square w-full max-w-md">
                <Image
                  src={product.images[2] || product.image}
                  alt={product.nameBn}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 90vw, 440px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
