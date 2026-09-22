const BN_DIGIT_MAP = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

export function toAsciiDigits(value) {
  return String(value || "").replace(/[০-৯]/g, (d) => BN_DIGIT_MAP[d] || d);
}

/** Keep only BD-friendly characters and length while typing. */
export function filterBdMobileInput(raw) {
  let value = toAsciiDigits(raw).replace(/[^\d+]/g, "");

  if (value.includes("+")) {
    value = `+${value.replace(/\+/g, "")}`;
  }

  if (value.startsWith("+880")) {
    return value.slice(0, 14);
  }
  if (value.startsWith("+88")) {
    return value.slice(0, 14);
  }
  if (value.startsWith("+")) {
    return value.slice(0, 14);
  }
  if (value.startsWith("880")) {
    return value.slice(0, 13);
  }
  if (value.startsWith("88")) {
    return value.slice(0, 13);
  }
  // Default local format 01XXXXXXXXX
  return value.replace(/^\+/, "").slice(0, 11);
}

export function cleanBdMobile(value) {
  return toAsciiDigits(value).replace(/[\s\-()]/g, "");
}

export function isValidBdMobile(value) {
  const cleaned = cleanBdMobile(value);
  return /^(?:\+?8801[3-9]\d{8}|01[3-9]\d{8})$/.test(cleaned);
}

export function normalizeBdPhone(value) {
  const cleaned = cleanBdMobile(value);
  if (cleaned.startsWith("+880")) return cleaned;
  if (cleaned.startsWith("880")) return `+${cleaned}`;
  if (cleaned.startsWith("01")) return `+88${cleaned}`;
  return cleaned;
}

export function getBdMobileError(value) {
  const cleaned = cleanBdMobile(value);

  if (!cleaned) {
    return "মোবাইল নম্বর লিখুন।";
  }

  if (!/^[\d+]+$/.test(cleaned)) {
    return "শুধু নম্বর লিখুন (যেমন: 01XXXXXXXXX)।";
  }

  if (cleaned.startsWith("01")) {
    if (cleaned.length < 11) {
      return "সম্পূর্ণ ১১ ডিজিটের নম্বর দিন (01XXXXXXXXX)।";
    }
    if (!/^01[3-9]\d{8}$/.test(cleaned)) {
      return "সঠিক বাংলাদেশি অপারেটর নম্বর দিন (013–019)।";
    }
  } else if (cleaned.startsWith("+8801") || cleaned.startsWith("8801")) {
    const local = cleaned.replace(/^\+?880/, "0");
    if (local.length < 11) {
      return "সম্পূর্ণ নম্বর দিন (+8801XXXXXXXXX)।";
    }
    if (!/^01[3-9]\d{8}$/.test(local)) {
      return "সঠিক বাংলাদেশি অপারেটর নম্বর দিন (013–019)।";
    }
  } else {
    return "বাংলাদেশি নম্বর দিন (01XXXXXXXXX বা +8801XXXXXXXXX)।";
  }

  if (!isValidBdMobile(cleaned)) {
    return "সঠিক বাংলাদেশি মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।";
  }

  return null;
}
