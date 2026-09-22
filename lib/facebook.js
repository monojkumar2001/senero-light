export const FACEBOOK_PIXEL_ID = "1053010770886399";

export function createMetaEventId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function readCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export function getMetaClickIds() {
  const fbp = readCookie("_fbp");
  const fbc =
    readCookie("_fbc") ||
    (() => {
      try {
        const fbclid = new URLSearchParams(window.location.search).get("fbclid");
        if (!fbclid) return null;
        return `fb.1.${Date.now()}.${fbclid}`;
      } catch {
        return null;
      }
    })();

  return {
    ...(fbp ? { fbp } : {}),
    ...(fbc ? { fbc } : {}),
  };
}

export function trackBrowserEvent(eventName, params = {}, eventId) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  const payload = { ...params };
  if (eventId) {
    window.fbq("track", eventName, payload, { eventID: eventId });
  } else {
    window.fbq("track", eventName, payload);
  }
}
