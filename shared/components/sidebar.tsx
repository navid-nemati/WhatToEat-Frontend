'use client'

import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Menu } from 'lucide-react';
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const { user, logout, loading } = useAuth()

    return (
        <div className="flex items-center">
            <button onClick={() => setIsOpen(prev => !prev)}><Menu className="text-slate-500 size-5 md:size-6" /></button>
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-60 p-4 bg-white h-full">
                    <div className="flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col gap-4 pt-3">
                                {!loading && user ? (
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <Link onClick={() => setIsOpen(false)} href="/profile" className="text-emerald-700 transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115">پروفایل</Link>

                                        {/* ⭐ فقط اگه ادمین بود این دکمه رو نشون بده */}
                                        {user?.roles?.includes("Admin") && (
                                            <Link onClick={() => setIsOpen(false)} href="/admin" className="text-rose-600 transition-all duration-200 hover:text-rose-700 text-shadow-xs hover:text-shadow-lg hover:scale-115">
                                                پنل مدیریت
                                            </Link>
                                        )}
                                        </div>

                                        <button onClick={() => {
                                            logout(),
                                                setIsOpen(false)
                                        }} className="bg-rose-600 ring ring-rose-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
                                            <span className="text-white">خروج</span>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-4 pb-3 border-b border-emerald-100">
                                        <Link onClick={() => setIsOpen(false)} href="/login" className="bg-emerald-600 ring ring-emerald-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
                                            <span className="text-white">ورود</span>
                                        </Link>
                                        <Link onClick={() => setIsOpen(false)} href="/register" className="text-emerald-950 transition-all duration-150 hover:text-emerald-800 text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</Link>
                                    </div>
                                )}
                                <Link href={'/'} onClick={() => setIsOpen(false)}>
                                    <div className="w-full py-2 px-3">
                                        خانه
                                    </div>
                                </Link>
                                <Link href={'/category'} onClick={() => setIsOpen(false)}>
                                    <div className="w-full py-2 px-3">
                                        دسته‌بندی
                                    </div>
                                </Link>
                                <Link href={'/food/mainPage'} onClick={() => setIsOpen(false)}>
                                    <div className="w-full py-2 px-3">
                                        غذاها
                                    </div>
                                </Link>
                                <Link href={'/shoppingList'} onClick={() => setIsOpen(false)}>
                                    <div className="w-full py-2 px-3">
                                        لیست خرید
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}