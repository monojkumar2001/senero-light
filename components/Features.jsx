"use client";

import { motion } from "framer-motion";
import {
  Radar,
  Zap,
  Hand,
  Plug,
  Timer,
  SunMoon,
  Home,
  Leaf,
} from "lucide-react";
import { product } from "@/lib/product";

const features = [
  {
    icon: Radar,
    title: "PIR ৩৬০° সেন্সর",
    description: `চারপাশের চলাচল ধরে — ডিটেকশন দূরত্ব ${product.specs.distance}।`,
  },
  {
    icon: Zap,
    title: "স্বয়ংক্রিয় অন/অফ",
    description: "কাছে গেলে আলো জ্বলে, চলে গেলে নিজে থেকে নিভে যায়।",
  },
  {
    icon: Hand,
    title: "হাত ছাড়াই ব্যবহার",
    description: "প্রতিবার সুইচ চাপার ঝামেলা শেষ।",
  },
  {
    icon: Plug,
    title: "স্ট্যান্ডার্ড E27",
    description: "সাধারণ হোল্ডার ও বাল্বের সাথে সরাসরি কাজ করে।",
  },
  {
    icon: Timer,
    title: "TIME অ্যাডজাস্ট",
    description: `আলো কতক্ষণ জ্বলবে সেট করুন — ${product.specs.timeDelay}।`,
  },
  {
    icon: SunMoon,
    title: "LUX কন্ট্রোল",
    description: "শুধু রাতে বা সারাদিন — আলোর সংবেদনশীলতা ঠিক করুন।",
  },
  {
    icon: Home,
    title: "ঘরের যেকোনো জায়গা",
    description: "সিঁড়ি, করিডোর, বারান্দা, গ্যারেজ ও স্টোররুমে উপযোগী।",
  },
  {
    icon: Leaf,
    title: "বিদ্যুৎ সাশ্রয়ী",
    description: "অপ্রয়োজনীয় আলো জ্বলা বন্ধ করে খরচ কমায়।",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding scroll-mt-24 bg-white">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">ফিচার</p>
          <h2 className="section-title mt-3">
            স্মার্ট আলোর জন্য যা যা দরকার
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
