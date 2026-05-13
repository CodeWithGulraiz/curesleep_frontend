import axios from "axios";

const AUTH_STORAGE_KEY = "auth";
const TOKEN_STORAGE_KEY = "token";
const CLOCK_SKEW_SECONDS = 30;

export function getStoredToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function getStoredAuth() {
  const raw = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function decodeJwtPayload(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    return JSON.parse(atob(padded));
  } catch {
    return null;
  }
}

export function isTokenExpired(token) {
  const payload = decodeJwtPayload(token);
  if (!payload?.exp) return true;
  const nowInSeconds = Date.now() / 1000;
  return payload.exp <= nowInSeconds + CLOCK_SKEW_SECONDS;
}

export function isSessionValid() {
  const token = getStoredToken();
  const auth = getStoredAuth();
  if (!token || !auth?.user) return false;
  return !isTokenExpired(token);
}

export function clearSession() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(AUTH_STORAGE_KEY);
  delete axios.defaults.headers.common.Authorization;
}

let authInterceptorSetup = false;
let hasForcedLogout = false;

function shouldForceLogout(error) {
  const status = error?.response?.status;
  const message = String(error?.response?.data?.message || "").toLowerCase();
  if (status === 401 || status === 403 || status === 419) return true;
  return (
    message.includes("token expired") ||
    message.includes("jwt expired") ||
    message.includes("invalid token") ||
    message.includes("unauthorized")
  );
}

export function setupAuthSession() {
  if (authInterceptorSetup) return;
  authInterceptorSetup = true;

  // On app boot, clear stale/invalid sessions.
  if (!isSessionValid()) {
    clearSession();
  } else {
    const token = getStoredToken();
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  axios.interceptors.request.use((config) => {
    const token = getStoredToken();
    if (token && !isTokenExpired(token)) {
      config.headers = config.headers || {};
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (shouldForceLogout(error) && !hasForcedLogout) {
        hasForcedLogout = true;
        clearSession();
        const currentPath = window.location.pathname;
        if (currentPath.startsWith("/dashboard")) {
          window.location.replace("/login");
        }
      }
      return Promise.reject(error);
    },
  );
}

