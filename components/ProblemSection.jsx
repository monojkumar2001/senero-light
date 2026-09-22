"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Search,
  PowerOff,
  LightbulbOff,
  Hand,
} from "lucide-react";

const problems = [
  {
    icon: Moon,
    title: "অন্ধকারে ঘরে ঢোকা",
    description: "সুইচ খুঁজে পেতে আগেই অন্ধকারে পা ফেলতে হয়।",
  },
  {
    icon: Search,
    title: "রাতে সুইচ খোঁজা",
    description: "ঘুম থেকে উঠে আলো জ্বালাতে হিমশিম খেতে হয়।",
  },
  {
    icon: PowerOff,
    title: "আলো বন্ধ ভুলে যাওয়া",
    description: "দিনভর আলো জ্বলে থেকে বিদ্যুৎ অপচয় হয়।",
  },
  {
    icon: LightbulbOff,
    title: "অন্ধকার সিঁড়ি ও করিডোর",
    description: "অন্ধকার পথে চলাচল অসুবিধাজনক ও ঝুঁকিপূর্ণ।",
  },
  {
    icon: Hand,
    title: "বারবার সুইচ চাপা",
    description: "প্রতিবার হাতে সুইচ অন-অফ করতে হয় — ক্লান্তিকর।",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-slate-50 soft-grid">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">সমস্যাটি চেনা</p>
          <h2 className="section-title mt-3">
            এখনও হাতে সুইচ খুঁজে আলো জ্বালাচ্ছেন?
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`border-b border-border pb-5 ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                }`}
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mt-12 text-center text-xl font-semibold text-primary sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          একবার লাগালেই সমাধান।
        </motion.p>
      </div>
    </section>
  );
}
