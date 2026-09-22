"use client";

const message = "সীমিত অফার — E27 মোশন সেন্সর হোল্ডার · ২+ পিসে ফ্রি ডেলিভারি";

export default function AnnouncementBar() {
  const items = Array.from({ length: 8 }, (_, i) => `${message}-${i}`);

  return (
    <div className="relative z-50 overflow-hidden bg-primary text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap py-3 text-base font-semibold sm:py-3.5 sm:text-lg">
        {items.map((key) => (
          <span key={key} className="inline-flex items-center">
            <span className="px-5">{message}</span>
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
              aria-hidden
            />
          </span>
        ))}
        {items.map((key) => (
          <span
            key={`dup-${key}`}
            className="inline-flex items-center"
            aria-hidden
          >
            <span className="px-5">{message}</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
