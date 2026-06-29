import { ApiError } from "@/types/api-error";

interface RequestOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
}

async function request<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const response = await fetch(url, {
    ...options,

    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },

    body:
      options.body !== undefined
        ? JSON.stringify(options.body)
        : undefined,
  });

  // خطاهای سمت سرور
  if (!response.ok) {
    const error: ApiError = await response.json();
    throw error;
  }

  // برای DELETE یا 204
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json();
}

export const apiClient = {
  get<T>(url: string) {
    return request<T>(url);
  },

  post<T>(url: string, body?: unknown) {
    return request<T>(url, {
      method: "POST",
      body,
    });
  },

  put<T>(url: string, body?: unknown) {
    return request<T>(url, {
      method: "PUT",
      body,
    });
  },

  delete<T>(url: string) {
    return request<T>(url, {
      method: "DELETE",
    });
  },
};