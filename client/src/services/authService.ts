// Auth service - placeholder for integration with backend
import { apiFetch } from "./api";
import { AUTH_ENDPOINTS } from "@/utils/constants";
import type { User, AuthToken } from "@/types";

export const authService = {
  login: async (email: string, password: string): Promise<AuthToken> => {
    const res = await apiFetch(AUTH_ENDPOINTS.LOGIN, {
      method: "POST",
      skipAuth: true,
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
  },

  signup: async (
    name: string,
    email: string,
    password: string,
  ): Promise<AuthToken> => {
    const res = await apiFetch(AUTH_ENDPOINTS.SIGNUP, {
      method: "POST",
      skipAuth: true,
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) throw new Error("Signup failed");
    return res.json();
  },

  logout: async (): Promise<void> => {
    await apiFetch(AUTH_ENDPOINTS.LOGOUT, { method: "POST" });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
};
