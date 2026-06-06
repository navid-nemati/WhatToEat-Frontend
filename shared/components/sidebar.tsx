'use client'

import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { Menu } from 'lucide-react';
import Link from "next/link";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center">
            <button onClick={() => setIsOpen(prev => !prev)}><Menu className="text-slate-500 size-5 md:size-6" /></button>
            <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="w-60 p-4 bg-white h-full">
                    <div className="flex flex-col justify-center gap-2">
                        <div className="flex items-center gap-4 border-b border-primary-dark/20 pb-5">
                            <Link href={'/loginsignup'}>
                                <button onClick={() => setIsOpen(false)} className="bg-emerald-600 ring ring-emerald-400 hover:ring-2 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm text-white">
                                    <span className="">ورود</span>
                                </button>
                            </Link>
                            <Link href={'/loginsignup'}>
                                <button onClick={() => setIsOpen(false)} className="text-emerald-950 transition-all duration-150 hover:text-emerald-800 text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</button>
                            </Link></div>

                        {/* <span className="group relative cursor-pointer px-3 py-2">
                            Home
                            <span className="w-0.5 h-0 absolute right-0 bottom-0 bg-sky-500 rounded-full ease-in-out duration-200 group-hover:h-full"></span>
                            <span className="w-0.5 h-0 absolute left-0 top-0 bg-sky-500 rounded-full ease-in-out duration-200 group-hover:h-full"></span>
                            <span className="h-0.5 w-0 absolute left-0 bottom-0 bg-sky-500 rounded-full ease-in-out duration-200 group-hover:w-full"></span>
                            <span className="h-0.5 w-0 absolute right-0 top-0 bg-sky-500 rounded-full ease-in-out duration-200 group-hover:w-full"></span>
                        </span> */}
                        {/* <span className="cursor-pointer duration-200 hover:bg-white/10 rounded-lg px-3 py-2">Contact us</span> */}
                        <div className="flex flex-col gap-4 pt-3">
                            <Link href={'/'} onClick={() => setIsOpen(false)}>
                                <div className="w-full py-2 px-3 bg-slate-50 rounded-md">
                                    خانه
                                </div>
                            </Link>
                            <Link href={''} onClick={() => setIsOpen(false)}>
                                <div className="w-full py-2 px-3 bg-slate-50 rounded-md">
                                    دسته‌بندی
                                </div>
                            </Link>
                            <Link href={'/admin'} onClick={() => setIsOpen(false)}>
                                <div className="w-full py-2 px-3 bg-slate-50 rounded-md">
                                    پنل ادمین
                                </div>
                            </Link>
                            <Link href={'/food/mainPage'} onClick={() => setIsOpen(false)}>
                                <div className="w-full py-2 px-3 bg-slate-50 rounded-md">
                                    غذاها
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </Drawer>
        </div>
    )
}