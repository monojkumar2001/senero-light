export const product = {
  name: "Motion Sensor Bulb Holder 360 Degrees Intelligent Induction Integrated PIR Motion Sensor E27 Lamp Socket",
  nameBn: "E27 মোশন সেন্সর বাল্ব হোল্ডার",
  shortName: "Motion Sensor Bulb Holder",
  shortNameBn: "মোশন সেন্সর বাল্ব হোল্ডার",
  brand: "Kenarooz",
  regularPrice: 449,
  salePrice: 380,
  image: "/images/product-hq-1.webp",
  images: [
    "/images/product-hq-1.webp",
    "/images/product-hq-2.webp",
    "/images/product-hq-3.webp",
    "/images/product-hq-4.webp",
    "/images/product-hq-5.webp",
  ],
  video: "/videos/product-demo.mp4",
  currency: "৳",
  specs: {
    socket: "E27",
    voltage: "AC 110–240V",
    load: "৬০W (Max)",
    detection: "PIR ৩৬০°",
    distance: "৬ মিটার পর্যন্ত",
    timeDelay: "১০ সেকেন্ড – ৫ মিনিট",
    lux: "<৩ – ২০০০ LUX",
  },
  buytiq: {
    apiBase: "https://api.buytiq.com",
    shopId: 289,
    userId: 361,
    productId: 3812,
  },
};

export const packages = [
  {
    quantity: 1,
    price: 380,
    freeDelivery: false,
    label: "1 পিস",
    badge: null,
  },
  {
    quantity: 2,
    price: 749,
    freeDelivery: true,
    label: "2 পিস",
    badge: "ফ্রি ডেলিভারি",
  },
  {
    quantity: 3,
    price: 1099,
    freeDelivery: true,
    label: "3 পিস",
    badge: "সেরা অফার",
  },
  {
    quantity: 4,
    price: 1450,
    freeDelivery: true,
    label: "4 পিস",
    badge: "ফ্রি ডেলিভারি",
  },
];

export const deliveryCharge = {
  insideDhaka: 60,
  outsideDhaka: 120,
};

export function formatPrice(amount) {
  return `${product.currency}${amount}`;
}

export function getPackage(quantity) {
  return packages.find((item) => item.quantity === quantity) || packages[0];
}

export function getOrderPricing(quantity, deliveryArea) {
  const selected = getPackage(quantity);
  const shipping = selected.freeDelivery
    ? 0
    : deliveryArea === "outsideDhaka"
      ? deliveryCharge.outsideDhaka
      : deliveryCharge.insideDhaka;

  return {
    quantity: selected.quantity,
    productPrice: selected.price,
    unitPrice: Math.round((selected.price / selected.quantity) * 100) / 100,
    delivery: shipping,
    freeDelivery: selected.freeDelivery,
    total: selected.price + shipping,
    label: selected.label,
    badge: selected.badge,
  };
}
