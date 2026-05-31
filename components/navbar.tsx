'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "./sidebar";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-40 transition-all duration-700 ease-in-out md:text-sm lg:text-base ${scrolled ? "pt-2.5 lg:pt-4 left-0 " : "pt-4 lg:pt-6"}`}>
            <div className={` transition-all duration-700 ease-in-out mx-auto w-full px-3 lg:px-5  ${scrolled ? "max-w-6xl" : "max-w-full"}`}>
                <div className={`flex items-center ease-in-out justify-between rounded-full bg-slate-300/20 backdrop-blur-xl border-[1.5px] border-slate-400/20 transition-all duration-500 ${scrolled ? "px-3 py-2 lg:py-2 lg:px-4 gap-2" : "py-3 lg:py-3 px-4 lg:px-7 gap-6"}`}>
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
                                href={''}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >دسته‌بندی</Link>
                            <Link
                                href={'/admin'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >پنل ادمین</Link>
                            <Link
                                href={'/food/mainPage'}
                                className="transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >غذاها</Link>
                        </nav>

                        <div className="hidden md:flex items-center gap-4">
                            <div className="group p-1.5 border border-emerald-950/50 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 cursor-pointer">
                                <ShoppingBasket size={22} className="transition-all duration-200 text-emerald-950 group-hover:rotate-360" />
                            </div>
                            <Link href={'/register'}>
                                <button className="text-emerald-950 transition-all duration-150 hover:text-emerald-800 text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</button>
                            </Link>
                            <Link href={'/login'}>
                                <button className="bg-emerald-600 ring ring-emerald-400 hover:ring-2 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
                                    <span className="text-white">ورود</span>
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}