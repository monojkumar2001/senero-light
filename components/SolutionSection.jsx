"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="section-padding bg-[#f3f4f6]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl bg-white shadow-soft"
        >
          <div className="relative w-full">
            <Image
              src="/images/solition-bg.png"
              alt="ইনস্টল করতে কোনো Electrician লাগবে না — মাত্র ৩টি সহজ ধাপে মোশন সেন্সর হোল্ডার লাগান"
              width={1200}
              height={1400}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={false}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mx-auto mt-10 max-w-2xl text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 text-lg font-bold text-dark sm:text-xl">
              <Clock className="h-6 w-6 text-primary" strokeWidth={2.2} />
              Delay Time
            </span>
          </div>
          <p className="mt-3 text-lg font-bold tracking-tight text-dark sm:text-xl md:text-2xl">
            16 Seconds{" "}
            <span className="text-primary" aria-hidden>
              →
            </span>{" "}
            32 Seconds{" "}
            <span className="text-primary" aria-hidden>
              →
            </span>{" "}
            300 Seconds
          </p>
          <p className="mt-2 text-sm text-muted sm:text-base">
            আপনার প্রয়োজন অনুযায়ী আলোর সময় নির্ধারণ করতে পারবেন।
          </p>

          <a href="#order" className="btn-primary mt-8 px-10 py-3.5 text-lg">
            অর্ডার করতে চাই
          </a>
        </motion.div>
      </div>
    </section>
  );
}
