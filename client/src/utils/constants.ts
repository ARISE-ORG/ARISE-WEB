export const Colors = {
  primary: "#00faff",
  secondary: "#001a40",
  accent: "#ff0080",
  dark: "#0f172a",
  darkBlue: "#0a1e3f",
  slate: {
    800: "#1f2937",
    900: "#111827",
    950: "#0f172a",
  },
  text: {
    light: "#ffffff",
    secondary: "#e0e0e0",
    muted: "#9ca3af",
  },
};

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001";

export const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  REFRESH: "/auth/refresh",
  LOGOUT: "/auth/logout",
};

export const COLLABORATION_ENDPOINTS = {
  SUBMIT: "/collaboration/submit",
};

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
};
