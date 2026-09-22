"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  User,
  Footprints,
  Lightbulb,
  DoorOpen,
  Timer,
  ArrowRight,
} from "lucide-react";
import { product } from "@/lib/product";

const onFlow = [
  { icon: User, label: "আপনি" },
  { icon: Footprints, label: "কাছে এলেন" },
  { icon: Lightbulb, label: "LIGHT ON" },
];

const offFlow = [
  { icon: Footprints, label: "চলে গেলেন" },
  { icon: DoorOpen, label: "এলাকা খালি" },
  { icon: Lightbulb, label: "LIGHT OFF" },
];

const delayOptions = ["১০ সেকেন্ড", "৩২ সেকেন্ড", "৫ মিনিট"];

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
          <p className="section-kicker">কীভাবে কাজ করে</p>
          <h2 className="section-title mt-3">
            আপনি কাছে গেলেই আলো জ্বলে উঠবে
          </h2>
          <p className="section-sub">
            PIR মোশন সেন্সর আপনার চলাফেরা শনাক্ত করে স্বয়ংক্রিয়ভাবে লাইট ON/OFF
            করে — সুইচে হাত দেওয়ার দরকার নেই।
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-border bg-white p-6 sm:p-8"
          >
            <p className="text-sm font-semibold text-primary">কাছে গেলে</p>
            <h3 className="mt-1 text-xl font-bold text-dark">
              আপনি কাছে গেলেই — LIGHT ON
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {onFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-2">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-night text-glow">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-xs font-medium text-dark sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                    {index < onFlow.length - 1 && (
                      <ArrowRight className="mb-5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="border border-border bg-white p-6 sm:p-8"
          >
            <p className="text-sm font-semibold text-primary">চলে গেলে</p>
            <h3 className="mt-1 text-xl font-bold text-dark">
              নির্দিষ্ট সময় পর — LIGHT OFF
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {offFlow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-2">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-muted">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-xs font-medium text-dark sm:text-sm">
                        {item.label}
                      </span>
                    </div>
                    {index < offFlow.length - 1 && (
                      <ArrowRight className="mb-5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 grid items-center gap-8 border border-border bg-white p-6 sm:p-8 lg:grid-cols-[1fr_280px]"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Timer className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-dark">Delay Time</h3>
                <p className="text-sm text-muted">
                  লাইট কতক্ষণ ON থাকবে, প্রয়োজন অনুযায়ী সেট করুন
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              {delayOptions.map((option, index) => (
                <div key={option} className="flex items-center gap-2 sm:gap-3">
                  <span className="border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                    {option}
                  </span>
                  {index < delayOptions.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted" aria-hidden />
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">
              রেঞ্জ: {product.specs.timeDelay} · ডিটেকশন: {product.specs.detection} · দূরত্ব:{" "}
              {product.specs.distance}
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[220px]">
            <Image
              src={product.images[2] || product.image}
              alt={product.nameBn}
              fill
              className="object-contain"
              sizes="220px"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-base text-muted sm:text-lg">
            অর্থাৎ, সুইচে হাত দেওয়ার প্রয়োজনই নেই।
          </p>
          <a href="#order" className="btn-primary mt-6 inline-flex">
            অর্ডার করতে চাই
          </a>
        </motion.div>
      </div>
    </section>
  );
}
