"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

const problems = [
  "অন্ধকারে ঢুকে সুইচ খুঁজতে হচ্ছে",
  "সিঁড়িতে ওঠার সময় আলো নেই",
  "রাতে বাথরুমে যেতে বারবার সুইচ চাপতে হচ্ছে",
  "হাত ভর্তি থাকলে লাইট জ্বালানো আরও বিরক্তিকর",
  "বাসার কোনো জায়গায় লাইট জ্বালিয়ে রেখে চলে আসছেন",
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-page mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="section-title">
            রাতে লাইট জ্বালাতে সুইচ খুঁজে বেড়াতে হয়?
          </h2>
          <p className="mt-3 text-lg font-medium text-muted">ভাবুন তো—</p>
        </motion.div>

        <ul className="mt-10 space-y-4">
          {problems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex items-start gap-3 border-b border-border pb-4 text-base text-dark sm:text-lg"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                <X className="h-4 w-4" strokeWidth={3} />
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <p className="text-xl font-semibold text-primary sm:text-2xl">
            এই ছোট ছোট ঝামেলাগুলোই এবার বাদ দিন।
          </p>
          <a href="#order" className="btn-primary mt-6 inline-flex">
            অর্ডার করতে চাই
          </a>
        </motion.div>
      </div>
    </section>
  );
}
