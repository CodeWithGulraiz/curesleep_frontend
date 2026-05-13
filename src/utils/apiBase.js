/**
 * API origin without trailing slash. In dev with Vite proxy, leave VITE_API empty
 * so requests use same-origin `/api/...` and the proxy forwards to the backend.
 */
export function getApiOrigin() {
  const raw = import.meta.env.VITE_API;
  if (raw == null || raw === "") return "";
  return String(raw).replace(/\/+$/, "");
}

/** Full URL or same-origin path, e.g. `/api/v1/user/submit-quiz` */
export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const origin = getApiOrigin();
  return origin ? `${origin}${p}` : p;
}
