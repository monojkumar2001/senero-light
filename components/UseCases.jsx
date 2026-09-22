"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  Footprints,
  ArrowUpFromLine,
  DoorOpen,
  Car,
  Warehouse,
  Trees,
} from "lucide-react";

const useCases = [
  {
    icon: BedDouble,
    title: "শোবার ঘর",
    description:
      "রাতে ঘুম থেকে উঠলে সুইচ খুঁজে পাওয়ার ঝামেলা নেই — চলাফেরা করলেই আলো জ্বলে ওঠে।",
  },
  {
    icon: Bath,
    title: "বাথরুম",
    description:
      "ভেজা হাতে সুইচ স্পর্শ না করেই রাতে বাথরুম ব্যবহার করা যায়, দ্রুত ও নিরাপদে।",
  },
  {
    icon: Footprints,
    title: "করিডোর",
    description:
      "হাঁটার সঙ্গে সঙ্গে করিডোর আলোকিত হয়, তাই অন্ধকারে হোঁচট খাওয়ার ভয় থাকে না।",
  },
  {
    icon: ArrowUpFromLine,
    title: "সিঁড়ি",
    description:
      "অন্ধকার সিঁড়িতে ওঠানামায় নিরাপদ চলাচল — পা ফেললেই পথ আলো হয়ে যায়।",
  },
  {
    icon: DoorOpen,
    title: "বারান্দা",
    description:
      "দরজা খুলে বারান্দায় এলেই আলো জ্বলে ওঠে, চাবি বা ব্যাগ নিয়ে হাত ব্যস্ত থাকলেও সুবিধা।",
  },
  {
    icon: Car,
    title: "গ্যারেজ",
    description:
      "গাড়ি বা বাইক নিয়ে প্রবেশ করলেই আলো চালু হয়, পার্কিং ও নামার সময় আর অন্ধকার লাগে না।",
  },
  {
    icon: Warehouse,
    title: "স্টোররুম",
    description:
      "জিনিস খুঁজতে গেলেই আলো জ্বলে — বাক্স, সরঞ্জাম বা মালামাল সহজে চোখে পড়ে।",
  },
  {
    icon: Trees,
    title: "বারান্দা/আউটডোর*",
    description:
      "ছাদযুক্ত বারান্দা বা আউটডোর এলাকায় ব্যবহার উপযোগী — বৃষ্টির সরাসরি সংস্পর্শ এড়িয়ে চলুন।",
  },
];

export default function UseCases() {
  return (
    <section className="section-padding bg-slate-50 soft-grid">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">ব্যবহারের স্থান</p>
          <h2 className="section-title mt-3">কোথায় ব্যবহার করবেন?</h2>
          <p className="section-sub">
            বাড়ির নানা জায়গায় সাধারণ বাল্বকে স্মার্ট করে তোলে।
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="text-center"
              >
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-card">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
