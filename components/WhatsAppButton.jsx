"use client";

const WHATSAPP_NUMBER = "8801575875504";
const WHATSAPP_MESSAGE =
  "হ্যালো, E27 মোশন সেন্সর বাল্ব হোল্ডার সম্পর্কে জানতে চাই।";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-এ মেসেজ করুন +8801575875504"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-6 md:right-6"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden
      >
        <path d="M16.004 3C8.832 3 3 8.832 3 16.004c0 2.3.6 4.54 1.74 6.52L3 29l6.64-1.72A12.95 12.95 0 0 0 16.004 29C23.168 29 29 23.168 29 16.004 29 8.832 23.168 3 16.004 3zm0 23.6a10.55 10.55 0 0 1-5.38-1.48l-.38-.22-3.94 1.02 1.06-3.84-.24-.4a10.56 10.56 0 0 1-1.62-5.66c0-5.84 4.76-10.6 10.6-10.6s10.6 4.76 10.6 10.6-4.76 10.58-10.6 10.58zm5.82-7.92c-.32-.16-1.88-.92-2.16-1.02-.3-.12-.5-.16-.72.16-.22.32-.82 1.02-1 1.22-.18.22-.36.24-.68.08-.32-.16-1.34-.5-2.56-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.54.1-.22.06-.4-.02-.56-.08-.16-.72-1.74-.98-2.38-.26-.62-.52-.54-.72-.54h-.62c-.22 0-.56.08-.86.4-.3.32-1.14 1.12-1.14 2.72s1.16 3.16 1.32 3.38c.16.22 2.28 3.48 5.52 4.88 2.08.9 2.64.9 3.12.76.5-.12 1.88-.76 2.14-1.5.26-.74.26-1.38.18-1.5-.08-.14-.3-.22-.62-.38z" />
      </svg>
    </a>
  );
}
