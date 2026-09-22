"use client";

import { motion } from "framer-motion";
import { Zap, Radar, Plug, Settings2 } from "lucide-react";

const benefits = [
  {
    icon: Radar,
    title: "৩৬০° মোশন সেন্সর",
    description: "চারপাশের চলাচল ধরে আলো স্বয়ংক্রিয়ভাবে নিয়ন্ত্রণ করে।",
  },
  {
    icon: Zap,
    title: "অটো অন/অফ",
    description: "কাছে গেলে জ্বলে, চলে গেলে নিভে যায় — হাত লাগে না।",
  },
  {
    icon: Plug,
    title: "E27 সকেট",
    description: "সাধারণ হোল্ডারে লাগান, নিচে আপনার বাল্ব ঘুরিয়ে দিন।",
  },
  {
    icon: Settings2,
    title: "TIME ও LUX সেট",
    description: "সময় ও আলোর সংবেদনশীলতা নিজের মতো অ্যাডজাস্ট করুন।",
  },
];

export default function BenefitStrip() {
  return (
    <section className="border-y border-border bg-white py-10 sm:py-12">
      <div className="container-page grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="text-center lg:text-left"
            >
              <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold text-dark sm:text-base">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
