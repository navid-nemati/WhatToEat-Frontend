'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {

    const { user, logout, loading } = useAuth()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-40 transition-all duration-700 ease-in-out md:text-sm lg:text-base ${scrolled ? "pt-2.5 lg:pt-4 left-0 " : "pt-4 lg:pt-6"}`}>
            <div className={` transition-all duration-700 ease-in-out mx-auto w-full px-3 lg:px-5  ${scrolled ? "max-w-6xl" : "max-w-full"}`}>
                <div className={`flex items-center ease-in-out justify-between rounded-full bg-slate-300/20 backdrop-blur-3xl border-[1.5px] border-slate-400/20 transition-all duration-500 ${scrolled ? "px-3 py-2 lg:py-2 lg:px-4 gap-2" : "py-3 lg:py-3 px-4 lg:px-7 gap-6"}`}>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:hidden">
                            <Sidebar />
                        </div>

                        <div className={`transition-all duration-300 ${scrolled ? 'text-md md:text-xl' : 'text:xl md:text-2xl'}`}>
                            <span
                                className="estedad-bold bg-linear-to-l from-emerald-700 to-emerald-500 
                            bg-clip-text text-transparent drop-shadow-sm"
                            >غذا چی بخوریم ؟</span>
                        </div>

                        {/* Navigation */}
                        <nav className={`hidden md:flex items-center gap-5 text-emerald-950 ${scrolled ? 'text-[13px] lg:text-[15px]' : ''}`}>
                            <Link
                                href={'/'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >خانه</Link>
                            <Link
                                href={'/category'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >دسته‌بندی</Link>
                            <Link
                                href={'/food'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >غذاها</Link>
                            <Link
                                href={'/shoppingList'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >لیست خرید</Link>
                        </nav>

                        <div className="hidden md:flex gap-4 items-center">
                            {!loading && user ? (
                                <>
                                    <Link href="/profile" className="text-emerald-700 transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115">پروفایل</Link>

                                    {/* ⭐ فقط اگه ادمین بود این دکمه رو نشون بده */}
                                    {user?.roles?.includes("Admin") && (
                                        <Link href="/admin" className="text-rose-600 transition-all duration-200 hover:text-rose-700 text-shadow-xs hover:text-shadow-lg hover:scale-115">
                                            پنل مدیریت
                                        </Link>
                                    )}

                                    <button onClick={logout} className="bg-rose-600 ring ring-rose-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
                                        <span className="text-white">خروج</span>
                                    </button>
                                </>
                            ) : (
                                <>
                                <Link href="/register" className="text-emerald-950 transition-all duration-150 hover:text-emerald-800 text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</Link>
                                    <Link href="/login" className="bg-emerald-600 ring ring-emerald-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
                                        <span className="text-white">ورود</span>
                                    </Link>
                                    
                                </>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}