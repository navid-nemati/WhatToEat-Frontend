/*
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // این تابع برای ارسال درخواست به بک‌اند شما و دریافت توکن استفاده می‌شود.
        const res = await fetch("YOUR_BACKEND_API_URL/api/Account/login", { // آدرس API لاگین خود را جایگزین کنید
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const data = await res.json();

        if (res.ok && data) {
          // در اینجا، توکن JWT و Refresh Token را از پاسخ بک‌اند دریافت می‌کنید.
          // اطمینان حاصل کنید که بک‌اند شما این داده‌ها را برمی‌گرداند.
          // معمولاً توکن JWT در پاسخ وجود دارد. Refresh Token را نیز باید به صورت جداگانه مدیریت کنید.
          // در این مثال، فرض می‌کنیم که بک‌اند فقط توکن اصلی را برمی‌گرداند.
          // برای Refresh Token، باید منطق جداگانه‌ای پیاده‌سازی کنید.
          return {
            id: data.userId, // یا هر شناسه دیگری که بک‌اند برمی‌گرداند
            username: data.username, // یا هر نام کاربری که بک‌اند برمی‌گرداند
            token: data.token, // فرض می‌کنیم بک‌اند توکن JWT اصلی را برمی‌گرداند
            // refresh_token: data.refreshToken // اگر بک‌اند Refresh Token را برمی‌گرداند
          };
        } else {
          // اگر احراز هویت ناموفق بود، null برگردانید.
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // در اینجا توکن‌های دریافتی از بک‌اند را به آبجکت توکن NextAuth اضافه می‌کنیم.
      if (account && user) {
        token.accessToken = user.token; // توکن JWT از بک‌اند
        // token.refreshToken = user.refreshToken; // اگر Refresh Token را دارید
        token.username = user.username; // نام کاربری
      }
      return token;
    },
    async session({ session, token }) {
      // اطلاعات توکن را به آبجکت session منتقل می‌کنیم تا در سمت کلاینت قابل دسترسی باشد.
      session.user.username = token.username;
      session.accessToken = token.accessToken;
      // session.refreshToken = token.refreshToken;
      return session;
    }
  },
  pages: {
    signIn: '/login', // صفحه ورود سفارشی شما
  },
  // تنظیمات بیشتر برای مدیریت کوکی‌ها و توکن‌ها
  session: {
    strategy: "jwt",
  },
  jwt: {
    encode: "secret", // از یک secret قوی در متغیرهای محیطی استفاده کنید
    // decode: ..., // در صورت نیاز به سفارشی‌سازی دیکود کردن JWT
    // encode: ..., // در صورت نیاز به سفارشی‌سازی انکود کردن JWT
  },
  secret: process.env.BETTER_AUTH_SECRET, // حتماً در فایل .env تعریف کنید
});




*/
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            }
        })
    ],
})