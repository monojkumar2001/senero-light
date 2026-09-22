"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const order = document.getElementById("order");
      if (!order) {
        setVisible(window.scrollY > 420);
        return;
      }
      const rect = order.getBoundingClientRect();
      const inOrderView = rect.top < window.innerHeight && rect.bottom > 80;
      setVisible(window.scrollY > 420 && !inOrderView);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 backdrop-blur-md md:hidden"
        >
          <a href="#order" className="btn-primary w-full shadow-soft">
            এখনই অর্ডার করুন
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
