"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Megaphone,
  Truck,
} from "lucide-react";
import {
  product,
  packages,
  deliveryCharge,
  formatPrice,
  getOrderPricing,
} from "@/lib/product";
import {
  createMetaEventId,
  getMetaClickIds,
  trackBrowserEvent,
} from "@/lib/facebook";
import {
  filterBdMobileInput,
  getBdMobileError,
  isValidBdMobile,
} from "@/lib/phone";

const SUPPORT_PHONE = "+8801575875504";

const initialForm = {
  fullName: "",
  mobile: "",
  address: "",
  quantity: 1,
  deliveryArea: "insideDhaka",
};

function extractOrderId(data) {
  if (!data || typeof data !== "object") return null;
  const candidates = [
    data.order_id,
    data.orderId,
    data.invoice_id,
    data.invoiceId,
    data.id,
    data.order?.order_id,
    data.order?.id,
    data.data?.order_id,
    data.data?.id,
  ];
  for (const value of candidates) {
    if (value !== undefined && value !== null && String(value).trim()) {
      return String(value).trim();
    }
  }
  return null;
}

function OrderConfirmation({ confirmation, onContinue }) {
  const [copied, setCopied] = useState(false);

  const copyOrderId = async () => {
    try {
      await navigator.clipboard.writeText(confirmation.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative mx-auto max-w-lg overflow-hidden rounded-2xl bg-white px-5 py-8 shadow-soft sm:px-8 sm:py-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(253,119,1,0.16),transparent_70%)]" />

      <div className="relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(253,119,1,0.35)]">
          <Check className="h-8 w-8" strokeWidth={3} />
        </span>
        <p className="mt-5 text-xs font-bold tracking-[0.14em] text-primary">
          ORDER CONFIRMED
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
          Thank you, {confirmation.name}
        </h2>
        <p className="mt-2 text-sm text-muted sm:text-base">
          Your order is placed. We&apos;ll contact you shortly to confirm
          delivery.
        </p>
      </div>

      <div className="relative mt-7 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-left sm:p-5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <Megaphone className="h-3.5 w-3.5" />
          </span>
          <p className="text-xs font-bold tracking-wide text-amber-900">
            IMPORTANT NOTICE
          </p>
        </div>
        <div className="mt-3 space-y-2 text-sm leading-relaxed text-amber-950">
          <p>প্রিয় গ্রাহক,</p>
          <p>
            অর্ডার কনফার্ম করার জন্য আমাদের প্রতিনিধি আপনাকে কল করবেন। দয়া করে
            আমাদের প্রতিনিধির সাথে কথা বলে আপনার অর্ডারটি কনফার্ম করবেন।
          </p>
          <p>অথবা, প্রয়োজন হলে আপনি সরাসরি আমাদের কল করতে পারেন।</p>
          <p>
            <a
              href={`tel:${SUPPORT_PHONE}`}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {SUPPORT_PHONE}
            </a>
          </p>
          <p>ধন্যবাদ। ❤️</p>
        </div>
      </div>

      <div className="relative mt-8 border-t border-border pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-muted">
              ORDER ID
            </p>
            <p className="mt-1 text-lg font-bold text-dark">
              {confirmation.orderId}
            </p>
          </div>
          <button
            type="button"
            onClick={copyOrderId}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white px-3 py-1.5 text-xs font-medium text-dark transition hover:border-primary/40 hover:bg-orange-50"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-primary" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        <dl className="mt-4 divide-y divide-border text-sm">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Total</dt>
            <dd className="font-semibold text-dark">
              {formatPrice(confirmation.total)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Items</dt>
            <dd className="font-semibold text-dark">{confirmation.items}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Payment</dt>
            <dd className="font-semibold text-dark">Cash on Delivery</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Phone</dt>
            <dd className="font-semibold text-dark">{confirmation.phone}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={onContinue}
        className="btn-primary mt-8 w-full rounded-full"
      >
        Continue shopping
      </button>
    </motion.div>
  );
}

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const checkoutTracked = useRef(false);

  const pricing = useMemo(
    () => getOrderPricing(form.quantity, form.deliveryArea),
    [form.quantity, form.deliveryArea]
  );

  useEffect(() => {
    if (checkoutTracked.current) return;

    const section = document.getElementById("order");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        if (checkoutTracked.current) return;
        checkoutTracked.current = true;

        const eventId = createMetaEventId();
        trackBrowserEvent(
          "InitiateCheckout",
          {
            content_ids: [String(product.buytiq.productId)],
            content_type: "product",
            currency: "BDT",
            value: pricing.total,
            num_items: pricing.quantity,
          },
          eventId
        );
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [pricing.quantity, pricing.total]);

  useEffect(() => {
    if (!submitted) return;
    document.getElementById("order")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [submitted]);

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
    setSubmitError("");
  };

  const updateMobile = (raw) => {
    const filtered = filterBdMobileInput(raw);
    updateField("mobile", filtered);
  };

  const validate = () => {
    const next = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      next.fullName = "অনুগ্রহ করে আপনার পুরো নাম লিখুন।";
    }

    const mobileError = getBdMobileError(form.mobile);
    if (mobileError) {
      next.mobile = mobileError;
    }

    if (!form.address.trim() || form.address.trim().length < 10) {
      next.address = "সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন (কমপক্ষে ১০ অক্ষর)।";
    }

    if (![1, 2, 3, 4].includes(form.quantity)) {
      next.quantity = "একটি প্যাকেজ নির্বাচন করুন।";
    }

    if (!["insideDhaka", "outsideDhaka"].includes(form.deliveryArea)) {
      next.deliveryArea = "ডেলিভারি এলাকা নির্বাচন করুন।";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    const metaEventId = createMetaEventId();
    const clickIds = getMetaClickIds();
    const snapshot = {
      name: form.fullName.trim(),
      phone: form.mobile.trim(),
      items: form.quantity,
      total: pricing.total,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          mobile: form.mobile.trim(),
          address: form.address.trim(),
          quantity: form.quantity,
          deliveryArea: form.deliveryArea,
          metaEventId,
          eventSourceUrl: window.location.href,
          ...clickIds,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        const message =
          typeof result.message === "string"
            ? result.message
            : "অর্ডার ব্যর্থ হয়েছে। আবার চেষ্টা করুন।";

        if (result.code === "DUPLICATE_PHONE") {
          setErrors((prev) => ({ ...prev, mobile: message }));
        }

        throw new Error(message);
      }

      trackBrowserEvent(
        "Purchase",
        {
          content_ids: [String(product.buytiq.productId)],
          content_type: "product",
          currency: "BDT",
          value: result.meta?.value ?? pricing.total,
          contents: result.meta?.contents || [
            {
              id: String(product.buytiq.productId),
              quantity: pricing.quantity,
              item_price: pricing.unitPrice,
            },
          ],
          num_items: pricing.quantity,
        },
        metaEventId
      );

      const orderId =
        extractOrderId(result.data) ||
        extractOrderId(result) ||
        `BT-${Date.now().toString().slice(-6)}`;

      setConfirmation({
        ...snapshot,
        total: result.summary?.total ?? snapshot.total,
        orderId: orderId.startsWith("BT-") ? orderId : `BT-${orderId}`,
      });
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setSubmitError(error.message || "অর্ডার ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setSubmitting(false);
    }
  };

  const handleContinue = () => {
    setSubmitted(false);
    setConfirmation(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="order" className="section-padding scroll-mt-24 bg-slate-50 soft-grid">
      <div className="container-page">
        {submitted && confirmation ? (
          <OrderConfirmation
            confirmation={confirmation}
            onContinue={handleContinue}
          />
        ) : (
          <>
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="section-kicker">অর্ডার</p>
              <h2 className="section-title mt-3">
                অর্ডার করতে নিচের ফর্মটি পূরণ করুন
              </h2>
              <p className="section-sub">
                প্যাকেজ বেছে নিশ্চিত করুন — ক্যাশ অন ডেলিভারি উপলব্ধ।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-md border border-border bg-white p-5 shadow-soft sm:p-8"
              >
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">
                      প্যাকেজ নির্বাচন করুন
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {packages.map((item) => {
                        const selected = form.quantity === item.quantity;
                        return (
                          <button
                            key={item.quantity}
                            type="button"
                            onClick={() => updateField("quantity", item.quantity)}
                            className={`relative rounded-lg border p-4 text-left transition ${
                              selected
                                ? "border-primary bg-amber-50 ring-2 ring-primary/20"
                                : "border-border bg-white hover:border-primary/40"
                            }`}
                          >
                            {item.badge && (
                              <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">
                                {item.badge}
                              </span>
                            )}
                            <div className="flex items-start gap-3 pr-14">
                              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-surface">
                                <Image
                                  src={product.image}
                                  alt={product.shortNameBn}
                                  fill
                                  sizes="48px"
                                  className="object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <p className="text-base font-bold leading-snug text-dark">
                                  {item.label}
                                </p>
                                <p className="mt-1 text-xl font-bold text-primary">
                                  {formatPrice(item.price)}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {errors.quantity && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.quantity}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      পুরো নাম
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      className="w-full rounded-md border border-border bg-white px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="আপনার পুরো নাম"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="mobile"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      মোবাইল নম্বর
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      maxLength={14}
                      value={form.mobile}
                      onChange={(e) => updateMobile(e.target.value)}
                      onBlur={() => {
                        if (!form.mobile) return;
                        const mobileError = getBdMobileError(form.mobile);
                        setErrors((prev) => ({
                          ...prev,
                          mobile: mobileError || "",
                        }));
                      }}
                      className={`w-full rounded-md border bg-white px-4 py-3 text-text outline-none transition focus:ring-2 focus:ring-primary/20 ${
                        errors.mobile
                          ? "border-red-400 focus:border-red-500"
                          : form.mobile && isValidBdMobile(form.mobile)
                            ? "border-emerald-400 focus:border-emerald-500"
                            : "border-border focus:border-primary"
                      }`}
                      placeholder="01XXXXXXXXX"
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby="mobile-help"
                    />
                    <p id="mobile-help" className="mt-1.5 text-xs text-muted">
                      শুধু বাংলাদেশি নম্বর — 01XXXXXXXXX বা +8801XXXXXXXXX
                    </p>
                    {errors.mobile && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.mobile}
                      </p>
                    )}
                    {!errors.mobile &&
                      form.mobile &&
                      isValidBdMobile(form.mobile) && (
                        <p className="mt-1.5 text-sm text-emerald-600">
                          সঠিক নম্বর ✓
                        </p>
                      )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      সম্পূর্ণ ঠিকানা
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      className="w-full resize-y rounded-md border border-border bg-white px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder=" এলাকা / গ্রাম / জেলা"
                    />
                    {errors.address && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <fieldset>
                    <legend className="mb-2 text-sm font-medium text-dark">
                      ডেলিভারি এলাকা
                    </legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          value: "insideDhaka",
                          label: "ঢাকার ভিতরে",
                          charge: deliveryCharge.insideDhaka,
                        },
                        {
                          value: "outsideDhaka",
                          label: "ঢাকার বাইরে",
                          charge: deliveryCharge.outsideDhaka,
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex cursor-pointer items-center justify-between rounded-md border px-4 py-3 transition ${
                            form.deliveryArea === option.value
                              ? "border-primary bg-amber-50 ring-2 ring-primary/20"
                              : "border-border bg-white hover:border-primary/40"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="deliveryArea"
                              value={option.value}
                              checked={form.deliveryArea === option.value}
                              onChange={(e) =>
                                updateField("deliveryArea", e.target.value)
                              }
                              className="h-4 w-4 accent-primary"
                            />
                            <span className="font-medium text-dark">
                              {option.label}
                            </span>
                          </span>
                          <span className="text-sm text-muted">
                            {pricing.freeDelivery
                              ? "ফ্রি"
                              : formatPrice(option.charge)}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.deliveryArea && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.deliveryArea}
                      </p>
                    )}
                    {pricing.freeDelivery && (
                      <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-primary">
                        <Truck className="h-4 w-4" />
                        এই প্যাকেজে ফ্রি ডেলিভারি অন্তর্ভুক্ত
                      </p>
                    )}
                  </fieldset>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "পাঠানো হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
                </button>

                {submitError && (
                  <p className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                    {submitError}
                  </p>
                )}
              </form>

              <aside className="h-fit rounded-md border border-border bg-white p-5 shadow-soft sm:p-6 lg:sticky lg:top-24">
                <h3 className="text-lg font-bold text-dark">অর্ডার সারাংশ</h3>
                <div className="mt-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-surface">
                    <Image
                      src={product.image}
                      alt={product.shortNameBn}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted">{product.nameBn}</p>
                </div>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">প্যাকেজ</dt>
                    <dd className="font-semibold text-dark">{pricing.label}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">পণ্যের মূল্য</dt>
                    <dd className="font-semibold text-dark">
                      {formatPrice(pricing.productPrice)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted">ডেলিভারি চার্জ</dt>
                    <dd className="font-semibold text-dark">
                      {pricing.freeDelivery ? (
                        <span className="text-primary">ফ্রি</span>
                      ) : (
                        formatPrice(pricing.delivery)
                      )}
                    </dd>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-base font-semibold text-dark">
                        মোট টাকা
                      </dt>
                      <dd className="text-xl font-bold text-primary">
                        {formatPrice(pricing.total)}
                      </dd>
                    </div>
                  </div>
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  ক্যাশ অন ডেলিভারি উপলব্ধ। অর্ডার সরাসরি Kenarooz-এ যাবে।
                </p>
              </aside>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
