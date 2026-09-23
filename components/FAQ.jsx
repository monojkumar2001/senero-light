"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "এই প্রোডাক্টটি কী?",
    answer:
      "এটি একটি E27 মোশন সেন্সর বাল্ব হোল্ডার। সাধারণ সকেট ও বাল্বের মাঝে লাগিয়ে আপনার আলোকে স্বয়ংক্রিয় মোশন লাইটে রূপান্তর করে।",
  },
  {
    question: "কীভাবে ইনস্টল করব?",
    answer:
      "বিদ্যুৎ বন্ধ করে সকেটে হোল্ডার ঘুরিয়ে লাগান, তারপর নিচে বাল্ব লাগান। TIME ও LUX নব দিয়ে সেটিং অ্যাডজাস্ট করতে পারবেন।",
  },
  {
    question: "কোন বাল্ব ব্যবহার করা যাবে?",
    answer:
      "স্ট্যান্ডার্ড E27 বাল্ব ব্যবহার করা যায়। সর্বোচ্চ লোড ৬০W। LED বাল্ব ব্যবহার করলে আরও সাশ্রয়ী।",
  },
  {
    question: "মোশন সেন্সর কতদূর পর্যন্ত কাজ করে?",
    answer:
      "PIR ৩৬০° ডিটেকশন — সাধারণত প্রায় ৬ মিটার পর্যন্ত চলাচল ধরতে পারে (পরিবেশভেদে ভিন্ন হতে পারে)।",
  },
  {
    question: "TIME ও LUX কী করে?",
    answer:
      "TIME নব দিয়ে আলো কতক্ষণ জ্বলবে সেট করেন (প্রায় ১০ সেকেন্ড থেকে ৫ মিনিট)। LUX নব দিয়ে রাত/দিন মোড ও আলোর সংবেদনশীলতা ঠিক করেন।",
  },
  {
    question: "প্যাকেজের দাম কত?",
    answer:
      "১ পিস: ৳৩৯০। ২ পিস: ৳৭৫০। ৩ পিস: ৳১০৫০। ৪ পিস: ৳১৪০০। সব প্যাকেজে ডেলিভারি চার্জ আলাদা।",
  },
  {
    question: "ডেলিভারি চার্জ কত?",
    answer:
      "সব প্যাকেজে ডেলিভারি চার্জ প্রযোজ্য — ঢাকার ভিতরে ৳৬০, ঢাকার বাইরে ৳১১০।",
  },
  {
    question: "কীভাবে অর্ডার করব?",
    answer:
      "প্যাকেজ বেছে নিন, নাম-মোবাইল-ঠিকানা পূরণ করুন, ডেলিভারি এলাকা নির্বাচন করে অর্ডার নিশ্চিত করুন। ক্যাশ অন ডেলিভারি উপলব্ধ।",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding scroll-mt-24 bg-slate-50">
      <div className="container-page">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-kicker">সাহায্য</p>
          <h2 className="section-title mt-3">প্রায় জিজ্ঞাসিত প্রশ্ন</h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="overflow-hidden rounded-lg border border-border bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-primary">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
