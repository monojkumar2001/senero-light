"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  HandCoins,
  Star,
  Gift,
  Leaf,
  BadgeCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { packages, formatPrice, product } from "@/lib/product";

const trustItems = [
  { icon: ShieldCheck, label: "সুরক্ষিত ও নির্ভরযোগ্য" },
  { icon: Truck, label: "সারা বাংলাদেশে ডেলিভারি" },
  { icon: HandCoins, label: "ক্যাশ অন ডেলিভারি" },
];

const offerThemes = {
  1: {
    tagline: "বেস্ট চয়েস",
    accent: "#2f9e44",
    accentDark: "#1e7a32",
    soft: "from-emerald-50 via-white to-white",
    ring: "hover:ring-emerald-200",
    featured: false,
    compareAt: 850,
  },
  2: {
    tagline: "জনপ্রিয় প্যাক",
    accent: "#1d6fd8",
    accentDark: "#1557ad",
    soft: "from-sky-50 via-white to-white",
    ring: "hover:ring-sky-200",
    featured: false,
    compareAt: 1600,
  },
  3: {
    tagline: "বেস্ট ভ্যালু",
    accent: "#7c3aed",
    accentDark: "#5b21b6",
    soft: "from-violet-50 via-white to-white",
    ring: "hover:ring-violet-200",
    featured: true,
    compareAt: 2450,
  },
  4: {
    tagline: "সুপার সেভার",
    accent: "#e03131",
    accentDark: "#c92a2a",
    soft: "from-rose-50 via-white to-white",
    ring: "hover:ring-rose-200",
    featured: false,
    compareAt: 3600,
  },
};

function PackageImages({ count, accent }) {
  const layout =
    count === 1
      ? "grid-cols-1 max-w-[120px]"
      : count === 2
        ? "grid-cols-2 max-w-[150px]"
        : count === 3
          ? "grid-cols-3 max-w-[180px]"
          : "grid-cols-2 max-w-[150px]";

  return (
    <div className="relative flex min-h-[132px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0 rounded-full opacity-70 blur-2xl"
        style={{
          background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
        }}
      />
      <div className={`relative mx-auto grid w-full place-items-center gap-1.5 ${layout}`}>
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.08 + i * 0.05 }}
            className="relative aspect-square w-full"
          >
            <Image
              src={product.image}
              alt=""
              fill
              className="object-contain drop-shadow-[0_8px_16px_rgba(15,23,42,0.12)]"
              sizes="72px"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function OfferSection() {
  return (
    <section id="offer" className="section-padding scroll-mt-24 bg-[#f3f4f6]">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#1e7a32] via-[#24963c] to-[#1e7a32] text-white shadow-[0_10px_30px_rgba(30,122,50,0.25)]"
        >
          <div className="grid divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-center gap-2.5 px-4 py-3.5 text-center text-sm font-semibold sm:text-[15px]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-4 w-4 shrink-0 text-white" />
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="flex w-full max-w-xl items-center gap-4">
            <span className="h-px flex-1 bg-slate-300" />
            <h2 className="shrink-0 text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              আজকের বিশেষ অফার
            </h2>
            <span className="h-px flex-1 bg-slate-300" />
          </div>
          <div className="mt-2 flex items-center gap-1 text-[#b45309]">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </motion.div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((item, index) => {
            const theme = offerThemes[item.quantity];
            const savings = theme.compareAt - item.price;
            const perUnit = Math.round(item.price / item.quantity);

            return (
              <motion.a
                key={item.quantity}
                href="#order"
                onClick={() => {
                  try {
                    sessionStorage.setItem(
                      "preferredPackage",
                      String(item.quantity)
                    );
                  } catch {
                    /* ignore */
                  }
                }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b ${theme.soft} shadow-[0_10px_28px_rgba(15,23,42,0.07)] ring-2 ring-transparent transition duration-300 ${theme.ring} ${
                  theme.featured
                    ? "border-transparent shadow-[0_14px_36px_rgba(124,58,237,0.18)] xl:-translate-y-1"
                    : "border-slate-200/90"
                }`}
                style={
                  theme.featured
                    ? { borderColor: `${theme.accent}55` }
                    : undefined
                }
              >
                {theme.featured && (
                  <span
                    className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm"
                    style={{ backgroundColor: theme.accent }}
                  >
                    <Sparkles className="h-3 w-3" />
                    সেরা
                  </span>
                )}

                <div
                  className="relative px-3 py-3 text-center text-base font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentDark} 100%)`,
                  }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.18)_50%,transparent_65%)] opacity-60" />
                </div>

                <div className="flex flex-1 flex-col px-4 pb-5 pt-5 text-center">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    মাত্র
                  </p>
                  <p
                    className="mt-1 text-[2rem] font-extrabold leading-none tracking-tight"
                    style={{ color: theme.accent }}
                  >
                    {formatPrice(item.price)}
                  </p>
                  <p
                    className="mt-2 inline-flex self-center rounded-full px-3 py-1 text-xs font-bold"
                    style={{
                      color: theme.accent,
                      backgroundColor: `${theme.accent}14`,
                    }}
                  >
                    {theme.tagline}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    পিস প্রতি ≈ {formatPrice(perUnit)}
                  </p>

                  <div className="my-4">
                    <PackageImages count={item.quantity} accent={theme.accent} />
                  </div>

                  <div
                    className="relative overflow-hidden rounded-xl px-3 py-3 text-sm font-bold text-white shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accentDark} 0%, ${theme.accent} 100%)`,
                    }}
                  >
                    <span className="relative z-10">
                      সাশ্রয় {formatPrice(savings)}
                    </span>
                    <span className="pointer-events-none absolute -right-2 -top-3 h-12 w-12 rounded-full bg-white/10" />
                    <span className="pointer-events-none absolute -bottom-4 -left-2 h-14 w-14 rounded-full bg-white/10" />
                  </div>

                  <p className="mt-2.5 text-sm text-slate-400 line-through decoration-slate-300">
                    {theme.compareAt} TK
                  </p>

                  <span
                    className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:brightness-110 group-hover:shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentDark} 100%)`,
                    }}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    অর্ডার করুন
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="h-px flex-1 bg-slate-300" />
          <div className="flex items-center gap-2 text-slate-700">
            <Gift className="h-5 w-5 text-[#2f9e44]" />
            <p className="text-sm font-semibold sm:text-base">
              বেশি নিলে বেশি সাশ্রয়!
            </p>
          </div>
          <span className="h-px flex-1 bg-slate-300" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:p-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#2f9e44]">
                <Leaf className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-slate-800 sm:text-[15px]">
                বিদ্যুৎ সাশ্রয়ী পরিবেশবান্ধব
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#2f9e44]">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-slate-800 sm:text-[15px]">
                লং লাস্টিং টেকসই প্রোডাক্ট
              </p>
            </div>
          </div>

          <a
            href="#order"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1e7a32] px-6 py-3.5 text-base font-bold text-white shadow-[0_8px_20px_rgba(30,122,50,0.28)] transition hover:bg-[#196b2c] hover:shadow-[0_10px_24px_rgba(30,122,50,0.34)]"
          >
            <ShoppingCart className="h-5 w-5" />
            এখনই অর্ডার করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
}
