// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7232/api",
  withCredentials: true, // ⭐ برای ارسال کوکی HttpOnly الزامی است
});

// اینترسپتور برای رفرش خودکار
let isRefreshing = false;
let failedQueue: any[] = [];

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // اگر 401 گرفتیم و قبلا retry نشده
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => api(originalRequest));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await api.post("/account/refresh");
        failedQueue.forEach((p) => p.resolve());
        return api(originalRequest);
      } catch (err) {
        failedQueue.forEach((p) => p.reject(err));
        // هدایت به صفحه لاگین
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
        failedQueue = [];
      }
    }

    return Promise.reject(error);
  }
);

export default api;