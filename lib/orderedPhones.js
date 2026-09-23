import fs from "fs";
import path from "path";
import { normalizeBdPhone } from "@/lib/phone";

/** Prefer /tmp on serverless (Vercel); fall back to project data/ locally. */
function resolveStorePath() {
  const tmpDir = process.env.TMPDIR || process.env.TMP || "/tmp";
  const useTmp =
    process.env.VERCEL === "1" ||
    process.env.AWS_LAMBDA_FUNCTION_NAME ||
    process.env.ORDERED_PHONES_USE_TMP === "1";

  if (useTmp) {
    return {
      dir: path.join(tmpDir, "kenarooz-orders"),
      file: path.join(tmpDir, "kenarooz-orders", "ordered-phones.json"),
    };
  }

  const dir = path.join(process.cwd(), "data");
  return { dir, file: path.join(dir, "ordered-phones.json") };
}

/** Canonical key: 8801XXXXXXXXX (digits only) */
export function phoneStorageKey(value) {
  return normalizeBdPhone(value).replace(/\D/g, "");
}

function ensureStore(dir, file) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "{}", "utf8");
  }
}

function readStore() {
  try {
    const { dir, file } = resolveStorePath();
    ensureStore(dir, file);
    const raw = fs.readFileSync(file, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.error("orderedPhones readStore failed:", error?.message || error);
    return {};
  }
}

function writeStore(data) {
  try {
    const { dir, file } = resolveStorePath();
    ensureStore(dir, file);
    fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("orderedPhones writeStore failed:", error?.message || error);
    return false;
  }
}

export function hasOrderedPhone(phone) {
  try {
    const key = phoneStorageKey(phone);
    if (!key) return false;
    const store = readStore();
    return Boolean(store[key]);
  } catch (error) {
    console.error("hasOrderedPhone failed:", error?.message || error);
    return false;
  }
}

export function recordOrderedPhone(phone) {
  try {
    const key = phoneStorageKey(phone);
    if (!key) return;
    const store = readStore();
    store[key] = {
      phone: normalizeBdPhone(phone),
      at: new Date().toISOString(),
    };
    writeStore(store);
  } catch (error) {
    console.error("recordOrderedPhone failed:", error?.message || error);
  }
}

export const DUPLICATE_PHONE_MESSAGE =
  "এই নম্বর দিয়ে ইতিমধ্যে অর্ডার করা হয়েছে। নতুন অর্ডারের জন্য অন্য নম্বর ব্যবহার করুন, অথবা সাপোর্টে যোগাযোগ করুন।";
