import FacebookPixel from "@/components/FacebookPixel";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://kenarooz.com"),
  title: "E27 মোশন সেন্সর বাল্ব হোল্ডার | Kenarooz",
  description:
    "কাউকে কাছে গেলে আলো জ্বলে, চলে গেলে নিভে যায়। E27 সকেটে লাগানো PIR মোশন সেন্সর বাল্ব হোল্ডার। ৩৬০° ডিটেকশন, ক্যাশ অন ডেলিভারি।",
  keywords: [
    "মোশন সেন্সর বাল্ব হোল্ডার",
    "E27 PIR সেন্সর",
    "স্বয়ংক্রিয় লাইট হোল্ডার",
    "Kenarooz",
  ],
  openGraph: {
    title: "E27 মোশন সেন্সর বাল্ব হোল্ডার | Kenarooz",
    description:
      "সাধারণ বাল্বকে স্মার্ট মোশন লাইটে রূপান্তর করুন। ক্যাশ অন ডেলিভারি — ঢাকার ভিতরে ৳৬০, বাইরে ৳১১০।",
    type: "website",
    locale: "bn_BD",
    siteName: "Kenarooz",
    images: [
      {
        url: "/images/product-hq-1.webp",
        width: 800,
        height: 800,
        alt: "E27 মোশন সেন্সর বাল্ব হোল্ডার",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E27 মোশন সেন্সর বাল্ব হোল্ডার | Kenarooz",
    description: "কাছে গেলে আলো জ্বলে, চলে গেলে নিভে যায়।",
    images: ["/images/product-hq-1.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className="font-sans antialiased">
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
