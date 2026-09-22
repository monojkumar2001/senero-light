"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { product } from "@/lib/product";

const steps = [
  {
    number: "০১",
    title: "হোল্ডার লাগান",
    description: "বিদ্যুৎ বন্ধ করে সাধারণ E27 সকেটে সেন্সর হোল্ডার ঘুরিয়ে লাগান।",
  },
  {
    number: "০২",
    title: "বাল্ব লাগান",
    description: "হোল্ডারের নিচের সকেটে আপনার বাল্ব (সর্বোচ্চ ৬০W) ঘুরিয়ে দিন।",
  },
  {
    number: "০৩",
    title: "অটো আলো উপভোগ করুন",
    description: "কাছে গেলে আলো জ্বলে, চলে গেলে নিভে যায় — TIME/LUX চাইলে অ্যাডজাস্ট করুন।",
  },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-slate-100 to-white p-8 shadow-soft sm:p-10">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <Image
                src={product.images[1] || product.image}
                alt={product.nameBn}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2"
        >
          <p className="section-kicker">সমাধান</p>
          <h2 className="section-title mt-3">
            সাধারণ বাল্বকেই বানিয়ে নিন স্মার্ট মোশন লাইট
          </h2>
          <p className="section-sub">
            নতুন লাইট কেনার দরকার নেই। আপনার আগের E27 বাল্ব দিয়েই স্বয়ংক্রিয়
            অন/অফ সুবিধা পাবেন।
          </p>

          <ol className="mt-8 space-y-5">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 border-b border-border pb-5 last:border-0"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
