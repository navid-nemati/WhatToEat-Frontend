// 'use client'

// import Drawer from "@mui/material/Drawer";
// import { useState } from "react";
// import { Menu } from 'lucide-react';
// import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";

// export default function Sidebar() {

//     const [isOpen, setIsOpen] = useState(false);
//     const { user, logout, loading } = useAuth()

//     return (
//         <div className="flex items-center">
//             <button onClick={() => setIsOpen(prev => !prev)}><Menu className="text-slate-500 size-5 md:size-6" /></button>
//             <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
//                 <div className="w-60 p-4 bg-emerald-100 h-full">
//                     <div className="flex flex-col justify-center gap-2">
//                         <div className="flex items-center gap-4">
//                             <div className="flex flex-col gap-4 pt-3">
//                                 {!loading && user ? (
//                                     <div className="flex flex-col gap-2">
//                                         <div className="flex gap-2">
//                                             <Link onClick={() => setIsOpen(false)} href="/profile" className="text-emerald-700 transition-all duration-200 hover:text-emerald-800 text-shadow-xs hover:text-shadow-lg hover:scale-115">پروفایل</Link>

//                                         {/* ⭐ فقط اگه ادمین بود این دکمه رو نشون بده */}
//                                         {user?.roles?.includes("Admin") && (
//                                             <Link onClick={() => setIsOpen(false)} href="/admin" className="text-rose-600 transition-all duration-200 hover:text-rose-700 text-shadow-xs hover:text-shadow-lg hover:scale-115">
//                                                 پنل مدیریت
//                                             </Link>
//                                         )}
//                                         </div>

//                                         <button onClick={() => {
//                                             logout(),
//                                                 setIsOpen(false)
//                                         }} className="bg-rose-600 ring ring-rose-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
//                                             <span className="text-white">خروج</span>
//                                         </button>
//                                     </div>
//                                 ) : (
//                                     <div className="flex items-center gap-4 pb-3 border-b border-emerald-100">
//                                         <Link onClick={() => setIsOpen(false)} href="/login" className="bg-emerald-600 ring ring-emerald-400 transition-all duration-200 px-5 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-110 text-shadow-sm">
//                                             <span className="text-white">ورود</span>
//                                         </Link>
//                                         <Link onClick={() => setIsOpen(false)} href="/register" className="text-emerald-950 transition-all duration-150 hover:text-emerald-800 text-shadow-sm hover:text-shadow-lg hover:scale-110">ثبت نام</Link>
//                                     </div>
//                                 )}
//                                 <Link href={'/'} onClick={() => setIsOpen(false)}>
//                                     <div className="w-full py-2 px-3">
//                                         خانه
//                                     </div>
//                                 </Link>
//                                 <Link href={'/category'} onClick={() => setIsOpen(false)}>
//                                     <div className="w-full py-2 px-3">
//                                         دسته‌بندی
//                                     </div>
//                                 </Link>
//                                 <Link href={'/food/mainPage'} onClick={() => setIsOpen(false)}>
//                                     <div className="w-full py-2 px-3">
//                                         غذاها
//                                     </div>
//                                 </Link>
//                                 <Link href={'/shoppingList'} onClick={() => setIsOpen(false)}>
//                                     <div className="w-full py-2 px-3">
//                                         لیست خرید
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Drawer>
//         </div>
//     )
// }

'use client';

import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import {
  Menu,
  X,
  Home,
  LayoutGrid,
  Utensils,
  ShoppingCart,
  User,
  Shield,
  LogOut,
  LogIn,
  UserPlus,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const navItems = [
  { href: '/', label: 'خانه', icon: Home },
  { href: '/category', label: 'دسته‌بندی', icon: LayoutGrid },
  { href: '/food/mainPage', label: 'غذاها', icon: Utensils },
  { href: '/shoppingList', label: 'لیست خرید', icon: ShoppingCart },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  const displayName = user?.username || user?.email || 'کاربر';
  const avatarChar = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full text-emerald-950 hover:bg-emerald-50 active:scale-90 transition"
        aria-label="باز کردن منو"
      >
        <Menu className="size-5 md:size-6" />
      </button>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            maxWidth: '85vw',
            backgroundColor: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(16px)',
            borderRight: '1px solid rgba(16,185,129,0.2)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {/* هدر سایدبار */}
        <div className="flex items-center justify-between p-5 border-b border-emerald-100/70">
          <div>
            <span className="font-bold text-xl bg-linear-to-l from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
              غذا چی بخوریم؟
            </span>
            <p className="text-xs text-emerald-700/70 mt-1">دنیای غذا و آشپزی</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full text-emerald-800 hover:bg-emerald-50 active:scale-90 transition"
            aria-label="بستن منو"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* بخش کاربر */}
        <div className="p-4 border-b border-emerald-100/70">
          {!loading && user ? (
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                {avatarChar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-emerald-950 truncate">{displayName}</p>
                <p className="text-xs text-emerald-700/70 truncate">{user?.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-medium py-2.5 rounded-xl shadow-md hover:bg-emerald-700 active:scale-95 transition"
              >
                <LogIn className="size-4" />
                ورود
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-emerald-950 border border-emerald-300/60 py-2.5 rounded-xl hover:bg-emerald-50 active:scale-95 transition"
              >
                <UserPlus className="size-4" />
                ثبت‌نام
              </Link>
            </div>
          )}
        </div>

        {/* منوها */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? 'bg-emerald-100 text-emerald-800 font-bold shadow-sm'
                    : 'text-emerald-950/80 hover:bg-emerald-50 hover:text-emerald-800'
                } active:scale-95`}
              >
                <Icon
                  className={`size-5 ${
                    active ? 'text-emerald-700' : 'text-emerald-600/70'
                  }`}
                />
                <span>{item.label}</span>
                {active && (
                  <span className="mr-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* دکمه‌های پایین */}
        {!loading && user && (
          <div className="p-3 border-t border-emerald-100/70 space-y-2">
            {user?.roles?.includes('Admin') && (
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 active:scale-95 transition"
              >
                <Shield className="size-4" />
                پنل مدیریت
              </Link>
            )}

            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-emerald-950 border border-emerald-300/60 hover:bg-emerald-50 active:scale-95 transition"
            >
              <LogOut className="size-4" />
              خروج از حساب
            </button>
          </div>
        )}
      </Drawer>
    </div>
  );
}