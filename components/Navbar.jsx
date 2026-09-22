"use client";

import { useEffect, useState } from "react";
import { Menu, X, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "হোম", href: "#home" },
  { label: "ফিচার", href: "#features" },
  { label: "কীভাবে কাজ করে", href: "#how-it-works" },
  { label: "প্রশ্নোত্তর", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-night/80 backdrop-blur-md"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-[72px]">
        <a href="#home" className="flex items-center gap-2.5" onClick={handleNav}>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-md ${
              scrolled ? "bg-primary/10 text-primary" : "bg-glow/15 text-glow"
            }`}
          >
            <Lightbulb className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span
            className={`text-lg font-bold tracking-tight ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            Kenarooz
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted hover:text-dark"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#order" className="btn-primary !px-5 !py-2.5 !text-sm">
            এখনই অর্ডার করুন
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden ${
            scrolled
              ? "border-border text-dark"
              : "border-white/20 text-white"
          }`}
          aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border bg-white md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNav}
                    className="block rounded-md px-3 py-3 text-base font-medium text-text hover:bg-slate-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#order"
                  onClick={handleNav}
                  className="btn-primary w-full"
                >
                  এখনই অর্ডার করুন
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
