"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { packages, formatPrice, product } from "@/lib/product";

function PackageVisual() {
  return (
    <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-md bg-white/10">
      <Image
        src={product.image}
        alt=""
        fill
        className="object-contain p-2"
        sizes="96px"
      />
    </div>
  );
}

export default function OfferSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.18),transparent_50%)]" />

      <div className="container-page relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold tracking-wide text-glow">অফার</p>
          <h2 className="mt-3 text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            আজই স্মার্ট বাল্ব হোল্ডার নিন
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            প্যাকেজ বেছে নিন। ডেলিভারি: ঢাকার ভিতরে ৳৬০, বাইরে ৳১১০।
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((item, index) => (
            <motion.a
              key={item.quantity}
              href="#order"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`relative rounded-md border p-4 text-center transition hover:-translate-y-1 sm:p-5 ${
                item.quantity === 3
                  ? "border-glow/50 bg-glow/10"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              {item.badge && (
                <span className="absolute -top-2.5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {item.badge}
                </span>
              )}

              <PackageVisual />

              <p className="text-base font-bold text-white">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-glow">
                {formatPrice(item.price)}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                + ডেলিভারি ৳৬০ / ৳১১০
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto mt-10 flex max-w-lg flex-col overflow-hidden rounded-md border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-5 sm:p-8"
        >
          <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold tracking-wide text-white">
            সীমিত সময়
          </span>

          <div className="relative mx-auto mb-4 h-28 w-28 shrink-0 overflow-hidden rounded-md bg-white/10 sm:mx-0 sm:mb-0">
            <Image
              src={product.image}
              alt={product.nameBn}
              fill
              className="object-contain p-2"
              sizes="112px"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="pr-20 text-xl font-bold text-white sm:text-2xl">
              {product.shortNameBn}
            </h3>

            <div className="mt-4 flex flex-wrap items-end gap-4">
              <div>
                <p className="text-sm text-slate-400">নিয়মিত মূল্য</p>
                <p className="text-lg text-slate-500 line-through">
                  {formatPrice(product.regularPrice)}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-glow">অফার মূল্য</p>
                <p className="text-4xl font-bold tracking-tight text-white">
                  {formatPrice(packages[0].price)}
                </p>
              </div>
            </div>

            <a href="#order" className="btn-primary mt-6 w-full text-lg">
              এখনই অর্ডার করুন
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
