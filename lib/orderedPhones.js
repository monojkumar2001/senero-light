import fs from "fs";
import path from "path";
import { normalizeBdPhone } from "@/lib/phone";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "ordered-phones.json");

/** Canonical key: 8801XXXXXXXXX (digits only) */
export function phoneStorageKey(value) {
  return normalizeBdPhone(value).replace(/\D/g, "");
}

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "{}", "utf8");
  }
}

function readStore() {
  try {
    ensureStore();
    const raw = fs.readFileSync(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(data) {
  ensureStore();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

export function hasOrderedPhone(phone) {
  const key = phoneStorageKey(phone);
  if (!key) return false;
  const store = readStore();
  return Boolean(store[key]);
}

export function recordOrderedPhone(phone) {
  const key = phoneStorageKey(phone);
  if (!key) return;
  const store = readStore();
  store[key] = {
    phone: normalizeBdPhone(phone),
    at: new Date().toISOString(),
  };
  writeStore(store);
}

export const DUPLICATE_PHONE_MESSAGE =
  "এই নম্বর দিয়ে ইতিমধ্যে অর্ডার করা হয়েছে। নতুন অর্ডারের জন্য অন্য নম্বর ব্যবহার করুন, অথবা সাপোর্টে যোগাযোগ করুন।";
