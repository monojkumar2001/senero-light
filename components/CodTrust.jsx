"use client";

import { motion } from "framer-motion";
import { Banknote, ClipboardList, Truck, Headphones } from "lucide-react";

const trusts = [
  {
    icon: Banknote,
    title: "ক্যাশ অন ডেলিভারি",
    description: "পণ্য হাতে পেয়ে টাকা পরিশোধ করুন।",
  },
  {
    icon: ClipboardList,
    title: "সহজ অর্ডার",
    description: "সহজ ফর্মে অর্ডার সম্পন্ন করুন।",
  },
  {
    icon: Truck,
    title: "সারাদেশে ডেলিভারি",
    description: "ঢাকার ভিতরে ও বাইরে ডেলিভারি সুবিধা।",
  },
  {
    icon: Headphones,
    title: "কাস্টমার সাপোর্ট",
    description: "অর্ডার সংক্রান্ত সাহায্য পাওয়া যায়।",
  },
];

export default function CodTrust() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">বিশ্বাস</p>
          <h2 className="section-title mt-3">ক্যাশ অন ডেলিভারি উপলব্ধ</h2>
          <p className="section-sub">
            সহজে অর্ডার করুন এবং পণ্য পৌঁছালে টাকা দিন।
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trusts.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center"
              >
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
