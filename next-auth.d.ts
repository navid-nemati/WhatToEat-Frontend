import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider`
   *
   * @see https://next-auth.js.org/configuration/callbacks#session-callback
   */
  interface Session {
    accessToken?: string; // نامی که در بک‌اند استفاده کردید
    user: {
      /** The user's postal address. */
      username?: string | null; // نامی که در بک‌اند استفاده کردید
      // سایر خصوصیات مورد نیاز کاربر
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user returned in the `jwt` callback and `trigger` event,
   * as well as the object passed to the `session` callback, updated with user values.
   *
   * @see https://next-auth.js.org/configuration/callbacks#sign-in-callback
   */
  interface User extends DefaultUser {
    token?: string; // نامی که در بک‌اند استفاده کردید ( accessToken )
    username?: string | null; // نامی که در بک‌اند استفاده کردید
    // سایر خصوصیات از بک‌اند
  }
}

declare module "next-auth/jwt" {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions.
   *
   * @see https://next-auth.js.org/configuration/callbacks#jwt-callback
   */
  interface JWT {
    accessToken?: string; // نامی که در بک‌اند استفاده کردید
    username?: string | null; // نامی که در بک‌اند استفاده کردید
    // سایر خصوصیات که می‌خواهید در JWT ذخیره کنید
  }
}