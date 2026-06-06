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

                        <div className="hidden md:flex items-center gap-4">
                            <Link href={'/loginsignup'}>
                                <button className="bg-primary-light transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110">
                                    <span className="">ورود</span>
                                </button>
                            </Link>
                            <Link href={'/loginsignup'}>
                                <button className="text-primary-dark transition-all duration-150 hover:text-primary-darker text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</button>
                            </Link>
                            <div className="group p-1.5 border border-primary-dark/50 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 cursor-pointer">
                                <ShoppingBasket size={22} className="transition-all duration-200 text-primary-dark group-hover:rotate-360" />
                            </div>
                        </div>

                        <div className={`hidden md:flex items-center gap-5 ${scrolled ? 'text-[13px] lg:text-[15px]' : ''}`}>
                            <Link
                                href={'/'}
                                className="text-primary-darker transition-all duration-200 hover:text-primary-darker text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >خانه</Link>
                            <Link
                                href={''}
                                className="text-primary-darker transition-all duration-200 hover:text-primary-darker text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >دسته‌بندی</Link>
                            <Link
                                href={'/admin'}
                                className="text-primary-darker transition-all duration-200 hover:text-primary-darker text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >پنل ادمین</Link>
                            <Link
                                href={'/food/mainPage'}
                                className="text-primary-darker transition-all duration-200 hover:text-primary-darker text-shadow-xs hover:text-shadow-lg hover:scale-115"
                            >غذا</Link>
                        </div>

                        <div className={`transition-all duration-300 ${scrolled ? 'w-30 md:w-40' : 'w-35 lg:w-50 md:w-40'}`}>
                            <Link href={'/'}>
                                <Image src="/logo/logo.svg"
                                    width={200}
                                    height={20}
                                    alt="logo" />
                            </Link>

                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}