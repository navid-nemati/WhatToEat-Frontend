import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistery";
import Navbar from "@/shared/components/navbar";
import QueryProviders from "@/shared/components/provider";
import Footer from "@/shared/components/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";
import FooterWrapper from "@/shared/components/footerWrapper";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "غذا چی بخوریم ؟",
  description: "جدید ترین و محبوب ترین دستور پخت ها را اینجا پیدا کنید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      {/* <html lang="fa" dir="rtl" className={cn("font-sans", geist.variable)}> */}
      <html lang="fa" dir="rtl" >
        <body className="flex flex-col min-h-screen bg-linear-to-bl from-emerald-100/80 to-emerald-50">
          <ThemeRegistry>
            <QueryProviders>
              <Toaster
                position="top-center"
              />
              <Navbar />
              <main className="grow">
                {children}
              </main>
              <FooterWrapper />
            </QueryProviders>
          </ThemeRegistry>
        </body>
      </html>
    </AuthProvider>
  );
}
