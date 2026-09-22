"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wrench,
  Cable,
  Drill,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { product } from "@/lib/product";

const highlights = [
  {
    icon: Cable,
    title: "কোনো নতুন wiring নেই",
    description: "পুরনো সকেটেই লাগানো যায়",
  },
  {
    icon: Drill,
    title: "ড্রিলিং করার দরকার নেই",
    description: "দেয়াল কাটা বা গর্ত করার ঝামেলা নেই",
  },
  {
    icon: Sparkles,
    title: "ঝামেলামুক্ত ইনস্টল",
    description: "কয়েক মিনিটেই কাজ শেষ",
  },
];

const installSteps = [
  {
    number: "০১",
    title: "হোল্ডারে সেন্সর লাগান",
    description: "বিদ্যুৎ বন্ধ করে E27 সকেটে মোশন সেন্সর হোল্ডার ঘুরিয়ে লাগান।",
  },
  {
    number: "০২",
    title: "E27 বাল্ব লাগান",
    description: "হোল্ডারের নিচে আপনার আগের বাল্ব (সর্বোচ্চ ৬০W) ঘুরিয়ে দিন।",
  },
  {
    number: "০৩",
    title: "ব্যবহার শুরু করুন",
    description: "সুইচ অন করুন — কাছে গেলে আলো জ্বলে, চলে গেলে নিভে যায়।",
  },
];

const bulbTypes = [
  "LED",
  "CFL",
  "Energy Saver",
  "Halogen",
  "Incandescent",
];

const whyBest = [
  "সহজ ও দ্রুত ইনস্টলেশন",
  "ইলেকট্রিশিয়ান লাগে না",
  "নতুন বা পুরনো জায়গায় ব্যবহারযোগ্য",
  "রুম, বাথরুম, করিডোর, সিঁড়ি, গ্যারেজে উপযোগী",
];

export default function EasyInstall() {
  return (
    <section id="easy-install" className="section-padding scroll-mt-24 bg-white">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="section-kicker">সহজ ইনস্টল</p>
            <h2 className="section-title mt-3">
              ইনস্টল করতে কোনো Electrician{" "}
              <span className="text-primary">লাগবে না!</span>
            </h2>
            <p className="section-sub mt-4">
              নতুন ওয়্যারিং, ড্রিলিং বা জটিল সেটআপ ছাড়াই আপনার সাধারণ E27
              বাল্বকে স্মার্ট মোশন লাইটে বদলান — {product.brand} দিয়ে।
            </p>

            <div className="mt-8 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Wrench className="h-6 w-6" />
              </span>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                পুরনো হোল্ডারে ঘুরিয়ে লাগান, বাল্ব বসান, সুইচ অন করুন — কাজ শেষ।
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="space-y-3"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 border border-border bg-slate-50 px-4 py-3.5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-dark">{item.title}</p>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto mt-12 aspect-[4/3] w-full max-w-4xl overflow-hidden bg-slate-100"
        >
          <Image
            src="/images/easy-install-guide.png"
            alt={`${product.brand} — সহজ ইনস্টল গাইড`}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </motion.div>

        <div className="mt-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">ইনস্টলেশন</p>
              <h3 className="mt-2 text-2xl font-bold text-dark sm:text-3xl">
                মাত্র ৩টি সহজ ধাপ
              </h3>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <CheckCircle2 className="h-6 w-6 shrink-0" />
              <p className="text-sm font-semibold sm:text-base">
                Screw it on. Turn it on. Done!
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {installSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative border border-border bg-slate-50 p-5"
              >
                {index < installSteps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-primary md:block"
                    aria-hidden
                  />
                )}
                <span className="inline-flex h-10 w-10 items-center justify-center bg-primary text-sm font-bold text-white">
                  {step.number}
                </span>
                <h4 className="mt-4 text-lg font-semibold text-dark">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            আপনার আগের বাল্ব দিয়েই চলবে — নতুন লাইট কেনার দরকার নেই।
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-night p-6 text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-glow">
              Compatibility
            </p>
            <h4 className="mt-2 text-xl font-bold">E27 Base Compatible</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              সাধারণ E27 বাল্বকেই স্মার্ট মোশন লাইটে রূপান্তর করুন —{" "}
              {product.brand} হোল্ডার দিয়ে।
            </p>
            <div className="relative mt-5 mx-auto h-28 w-28">
              <Image
                src={product.images[0]}
                alt="E27 মোশন সেন্সর হোল্ডার"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="border border-border bg-white p-6"
          >
            <h4 className="text-lg font-bold text-dark">
              কোন বাল্বে ব্যবহার করবেন?
            </h4>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {bulbTypes.map((type) => (
                <div
                  key={type}
                  className="border border-border bg-slate-50 px-2 py-3 text-center"
                >
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {type.slice(0, 1)}
                  </span>
                  <p className="mt-2 text-xs font-medium text-dark">{type}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted">সর্বোচ্চ লোড: {product.specs.load}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="border border-border bg-white p-6"
          >
            <h4 className="text-lg font-bold text-dark">কেন এটা সেরা?</h4>
            <ul className="mt-4 space-y-3">
              {whyBest.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
