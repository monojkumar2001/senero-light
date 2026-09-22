"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { product, formatPrice, packages } from "@/lib/product";

const points = [
  "E27 স্ট্যান্ডার্ড সকেট ও বাল্ব",
  "PIR ৩৬০° মোশন ডিটেকশন",
  "কাছে গেলে অটো অন, চলে গেলে অটো অফ",
  "TIME ও LUX অ্যাডজাস্টমেন্ট",
  `লোড ক্ষমতা ${product.specs.load}`,
];

const specs = [
  { label: "সকেট", value: product.specs.socket },
  { label: "ভোল্টেজ", value: product.specs.voltage },
  { label: "ডিটেকশন", value: product.specs.detection },
  { label: "দূরত্ব", value: product.specs.distance },
  { label: "টাইমার", value: product.specs.timeDelay },
  { label: "LUX", value: product.specs.lux },
];

const gallery = product.images.slice(0, 4);

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrev = () =>
    setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);

  const showNext = () =>
    setActiveIndex((prev) => (prev + 1) % gallery.length);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % gallery.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <section className="section-padding bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => openLightbox(activeIndex)}
            className="group relative block w-full overflow-hidden rounded-md bg-gradient-to-br from-slate-100 to-slate-50 p-8 text-left sm:p-12"
            aria-label="বড় করে দেখুন"
          >
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Image
                src={gallery[activeIndex] || product.image}
                alt={product.nameBn}
                fill
                className="object-contain transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 90vw, 450px"
              />
            </div>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-night/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
              <ZoomIn className="h-3.5 w-3.5" />
              ক্লিক করে খুলুন
            </span>
          </button>

          <div className="mt-4 grid grid-cols-4 gap-2">
            {gallery.map((src, i) => {
              const selected = activeIndex === i;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => openLightbox(i)}
                  className={`relative aspect-square overflow-hidden rounded-md bg-slate-50 ring-offset-2 transition hover:ring-2 hover:ring-primary/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    selected ? "ring-2 ring-primary" : "ring-1 ring-border"
                  }`}
                  aria-label={`${product.nameBn} ছবি ${i + 1} খুলুন`}
                >
                  <Image
                    src={src}
                    alt={`${product.nameBn} ${i + 1}`}
                    fill
                    className="object-contain p-1"
                    sizes="100px"
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">প্রোডাক্ট</p>
          <h2 className="section-title mt-3">{product.nameBn}</h2>

          <p className="mt-3 text-lg font-semibold text-primary">
            মাত্র {formatPrice(packages[0].price)}
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-text">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {specs.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-slate-50 px-3 py-3"
              >
                <p className="text-xs text-muted">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-dark">{item.value}</p>
              </div>
            ))}
          </div>

          <a href="#order" className="btn-primary mt-8">
            এখনই অর্ডার করুন
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-night/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="প্রোডাক্ট ছবি"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="বন্ধ করুন"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="আগের ছবি"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 md:right-16"
              aria-label="পরের ছবি"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-[75vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[activeIndex]}
                alt={`${product.nameBn} বড় ছবি ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 95vw, 768px"
                priority
              />
            </motion.div>

            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeIndex === i ? "bg-glow" : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`ছবি ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
