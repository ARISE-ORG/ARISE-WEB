import { API_BASE_URL } from "@/utils/constants";

interface RequestOptions extends RequestInit {
  skipAuth?: boolean;
}

export async function apiFetch(
  path: string,
  options: RequestOptions = {},
): Promise<Response> {
  const { skipAuth = false, ...fetchOptions } = options;

  const headers = new Headers(fetchOptions.headers);

  if (!skipAuth) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

  return fetch(url, {
    ...fetchOptions,
    headers,
  });
}
