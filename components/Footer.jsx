"use client";

import { Lightbulb } from "lucide-react";
import { product } from "@/lib/product";

const links = [
  { label: "হোম", href: "#home" },
  { label: "ফিচার", href: "#features" },
  { label: "কীভাবে কাজ করে", href: "#how-it-works" },
  { label: "প্রশ্নোত্তর", href: "#faq" },
  { label: "অর্ডার করুন", href: "#order" },
];

export default function Footer() {
  return (
    <footer className="bg-white pb-24 pt-12 md:pb-12">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold text-dark">Kenarooz</span>
            </div>
            <p className="mt-3 text-sm text-muted">{product.nameBn}</p>
          </div>

          <nav aria-label="ফুটার">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6">
          <p className="text-sm text-muted">
            © ২০২৬ Kenarooz। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
