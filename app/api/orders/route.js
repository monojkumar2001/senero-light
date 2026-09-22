import {
  product,
  deliveryCharge,
  getOrderPricing,
} from "@/lib/product";
import {
  isValidBdMobile,
  normalizeBdPhone,
  getBdMobileError,
} from "@/lib/phone";

function flattenMessage(value) {
  if (!value) return null;
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.flat().join(" ");
  if (typeof value === "object") {
    return Object.values(value).flat().join(" ");
  }
  return String(value);
}

async function sendFacebookConversionApi({
  eventName,
  metaEventId,
  eventSourceUrl,
  value,
  cartItems,
  email,
  phone,
  fbc,
  fbp,
}) {
  try {
    await fetch(`${product.buytiq.apiBase}/api/facebook/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        shop_id: product.buytiq.shopId,
        event_name: eventName,
        meta_event_id: metaEventId,
        event_source_url: eventSourceUrl,
        currency: "BDT",
        value,
        cart_items: cartItems,
        email: email || "",
        phone: phone || "",
        ...(fbc ? { fbc } : {}),
        ...(fbp ? { fbp } : {}),
      }),
      keepalive: true,
    });
  } catch (error) {
    console.error("Facebook CAPI track failed:", error);
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      mobile,
      address,
      quantity,
      deliveryArea,
      division = null,
      district = null,
      upazila = null,
      metaEventId = null,
      eventSourceUrl = null,
      fbc = null,
      fbp = null,
    } = body || {};

    if (!fullName || String(fullName).trim().length < 2) {
      return Response.json(
        { success: false, message: "অনুগ্রহ করে আপনার পুরো নাম লিখুন।" },
        { status: 400 }
      );
    }

    if (!isValidBdMobile(mobile)) {
      return Response.json(
        {
          success: false,
          message: getBdMobileError(mobile) || "সঠিক বাংলাদেশি মোবাইল নম্বর দিন।",
        },
        { status: 400 }
      );
    }

    if (!address || String(address).trim().length < 8) {
      return Response.json(
        { success: false, message: "অনুগ্রহ করে সম্পূর্ণ ঠিকানা লিখুন।" },
        { status: 400 }
      );
    }

    const qty = Number(quantity);
    if (![1, 2, 3, 4].includes(qty)) {
      return Response.json(
        { success: false, message: "সঠিক প্যাকেজ নির্বাচন করুন।" },
        { status: 400 }
      );
    }

    if (!["insideDhaka", "outsideDhaka"].includes(deliveryArea)) {
      return Response.json(
        { success: false, message: "ডেলিভারি এলাকা নির্বাচন করুন।" },
        { status: 400 }
      );
    }

    const pricing = getOrderPricing(qty, deliveryArea);
    const phone = normalizeBdPhone(mobile);
    const cartItems = [
      {
        product_id: product.buytiq.productId,
        product_name: product.name,
        quantity: pricing.quantity,
        price: pricing.unitPrice,
        size: null,
        color: null,
      },
    ];

    const payload = {
      name: String(fullName).trim(),
      email: "",
      user_id: product.buytiq.userId,
      shop_id: product.buytiq.shopId,
      phone,
      address: String(address).trim(),
      division: division || null,
      district: district || null,
      upazila: upazila || null,
      promo_code: null,
      coupon_code: null,
      discount_price: 0,
      total_after_discount: pricing.productPrice,
      total_price: Number(pricing.productPrice).toFixed(2),
      payment_number: "",
      payment_transation_id: "",
      pay_amount: "",
      order_type: "Cash on Delivery",
      delivery_charge: pricing.delivery,
      payment_method: "Cash on Delivery",
      order_source: "website",
      cart_items: cartItems,
      ...(metaEventId ? { meta_event_id: metaEventId } : {}),
      ...(eventSourceUrl ? { event_source_url: eventSourceUrl } : {}),
      ...(fbc ? { fbc } : {}),
      ...(fbp ? { fbp } : {}),
    };

    const buytiqRes = await fetch(`${product.buytiq.apiBase}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await buytiqRes.json().catch(() => ({}));

    if (buytiqRes.status === 201 || buytiqRes.ok) {
      if (metaEventId) {
        await sendFacebookConversionApi({
          eventName: "Purchase",
          metaEventId,
          eventSourceUrl:
            eventSourceUrl || "https://kenarooz.com/order-success",
          value: pricing.total,
          cartItems,
          email: "",
          phone,
          fbc,
          fbp,
        });
      }

      return Response.json(
        {
          success: true,
          message: "অর্ডার সফলভাবে সম্পন্ন হয়েছে।",
          data,
          summary: {
            productPrice: pricing.productPrice,
            delivery: pricing.delivery,
            total: pricing.total,
            freeDelivery: pricing.freeDelivery,
            insideDhakaCharge: deliveryCharge.insideDhaka,
            outsideDhakaCharge: deliveryCharge.outsideDhaka,
          },
          meta: {
            eventId: metaEventId,
            currency: "BDT",
            value: pricing.total,
            contents: [
              {
                id: String(product.buytiq.productId),
                quantity: pricing.quantity,
                item_price: pricing.unitPrice,
              },
            ],
          },
        },
        { status: 201 }
      );
    }

    const message =
      flattenMessage(data?.message) ||
      flattenMessage(data?.error) ||
      flattenMessage(data?.errors) ||
      "অর্ডার ব্যর্থ হয়েছে। আবার চেষ্টা করুন।";

    return Response.json(
      { success: false, message, data },
      { status: buytiqRes.status || 502 }
    );
  } catch (error) {
    console.error("BuyTiq order error:", error);
    return Response.json(
      {
        success: false,
        message: "অর্ডার পাঠানো যায়নি। আবার চেষ্টা করুন।",
      },
      { status: 500 }
    );
  }
}
