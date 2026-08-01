// import Container from "@/shared/components/container";
// import ProtectedRoute from "@/shared/components/ProtectedRoute";
// import Link from "next/link";

// export default function AdminPanel() {

//     const navItems = [
//         {
//             title: "مدیریت مواد اولیه",
//             link: "/admin/ingredients",
//         },
//         {
//             title: "مدیریت غذاها",
//             link: "/admin/foods",
//         },
//         {
//             title: "مدیریت دسته‌بندی ها",
//             link: "/admin/categories",
//         },
//     ]

//     return (
//         <ProtectedRoute role="Admin">
//             <div>
//                 <Container>
//                     <div className="flex items-center gap-5 pt-30">
//                         {navItems.map((item, index) => (
//                             <Link
//                                 key={index}
//                                 className="bg-emerald-200
//                     rounded-lg px-3 py-2 shadow-sm transition-all duration-200
//                     hover:scale-105 hover:shadow-lg text-shadow-sm
//                     ring ring-emerald-300 hover:ring-2"
//                                 href={`${item.link}`}>
//                                 {item.title}
//                             </Link>
//                         ))}
//                     </div>
//                 </Container>
//             </div>
//         </ProtectedRoute>
//     )
// }

import Container from "@/shared/components/container";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import Link from "next/link";
import { ReactNode } from "react";

interface NavItem {
    title: string;
    description: string;
    link: string;
    icon: ReactNode;
    color: string;
    iconColor: string;
}

export default function AdminPanel() {
    const navItems: NavItem[] = [
        {
            title: "مدیریت مواد اولیه",
            description: "افزودن، حذف و ویرایش مواد اولیه",
            link: "/admin/ingredients",
            color: "from-emerald-50 to-teal-50",
            iconColor: "bg-emerald-100 text-emerald-600",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21c4.5-2.5 7-6.2 7-10.3C19 7 16.8 5 14 5c-.8 0-1.5.2-2 .6C11.5 5.2 10.8 5 10 5c-2.8 0-5 2-5 5.7C5 14.8 7.5 18.5 12 21Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6c0-2 1.1-3.5 3-4"
                    />
                </svg>
            ),
        },
        {
            title: "مدیریت غذاها",
            description: "مدیریت غذاها و دستورهای تهیه",
            link: "/admin/foods",
            color: "from-orange-50 to-amber-50",
            iconColor: "bg-orange-100 text-orange-600",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 15h16M6 15a6 6 0 0 1 12 0M12 9V6"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 4h4"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 19h14"
                    />
                </svg>
            ),
        },
        {
            title: "مدیریت دسته‌بندی‌ها",
            description: "ساخت و مرتب‌سازی دسته‌بندی‌ها",
            link: "/admin/categories",
            color: "from-violet-50 to-purple-50",
            iconColor: "bg-violet-100 text-violet-600",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <rect x="4" y="4" width="6" height="6" rx="1.5" />
                    <rect x="14" y="4" width="6" height="6" rx="1.5" />
                    <rect x="4" y="14" width="6" height="6" rx="1.5" />
                    <rect x="14" y="14" width="6" height="6" rx="1.5" />
                </svg>
            ),
        },
    ];

    return (
        <ProtectedRoute role="Admin">
            <main
                dir="rtl"
                className="relative min-h-screen overflow-hidden pt-25"
            >
                {/* Background decorations */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

                <div className="pointer-events-none absolute bottom-10 -left-32 h-[450px] w-[450px] rounded-full bg-orange-200/40 blur-3xl" />

                <div className="pointer-events-none absolute left-[30%] top-[25%] h-90 w-90 rounded-full bg-violet-300/70 blur-3xl" />

                <Container>
                    <div className="relative z-10 py-8 md:py-12">
                        {/* Mobile header */}
                        <div className="mb-6 flex items-center justify-between lg:hidden">
                            <div>
                                <p className="text-sm text-slate-500">
                                    پنل مدیریت
                                </p>

                                <h1 className="mt-1 text-2xl font-black text-slate-800">
                                    What To Eat
                                </h1>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-2xl shadow-lg shadow-emerald-200">
                                🍽️
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
                            {/* Right sidebar */}
                            <aside className="h-fit rounded-3xl border border-white/70 bg-white/80 p-4 shadow-xl shadow-slate-200/50 backdrop-blur-xl lg:sticky lg:top-6">
                                <div className="hidden px-2 pb-5 pt-2 lg:block">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-2xl shadow-lg shadow-emerald-200">
                                            🍽️
                                        </div>

                                        <div>
                                            <p className="text-xs text-slate-500">
                                                پنل مدیریت
                                            </p>

                                            <h2 className="font-black text-slate-800">
                                                What To Eat
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 hidden h-px bg-slate-100 lg:block" />

                                <p className="mb-3 hidden px-2 text-xs font-bold text-slate-400 lg:block">
                                    بخش‌های مدیریتی
                                </p>

                                <nav className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.link}
                                            href={item.link}
                                            className={`
                                                group relative overflow-hidden rounded-2xl
                                                border border-slate-100 bg-gradient-to-l
                                                ${item.color}
                                                p-3.5 transition-all duration-300
                                                hover:-translate-y-1 hover:border-white
                                                hover:shadow-lg lg:hover:translate-x-1
                                            `}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`
                                                        flex h-11 w-11 shrink-0
                                                        items-center justify-center rounded-xl
                                                        ${item.iconColor}
                                                        transition-transform duration-300
                                                        group-hover:rotate-6 group-hover:scale-110
                                                    `}
                                                >
                                                    {item.icon}
                                                </div>

                                                <div className="min-w-0">
                                                    <h3 className="text-sm font-extrabold text-slate-700 sm:text-xs lg:text-sm">
                                                        {item.title}
                                                    </h3>

                                                    <p className="mt-1 hidden truncate text-[11px] text-slate-500 lg:block">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="mr-auto hidden h-4 w-4 text-slate-400 transition-transform group-hover:-translate-x-1 lg:block"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m15 18-6-6 6-6"
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-5 hidden rounded-2xl bg-slate-900 p-4 text-white lg:block">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="text-sm font-bold">
                                            دسترسی ادمین
                                        </span>

                                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
                                    </div>

                                    <p className="text-xs leading-6 text-slate-400">
                                        تغییرات شما مستقیماً روی اطلاعات سایت
                                        اعمال می‌شوند.
                                    </p>
                                </div>
                            </aside>

                            {/* Main content */}
                            <section className="space-y-6">
                                {/* Hero section */}
                                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-6 text-white shadow-2xl shadow-slate-300 md:p-9">
                                    {/* Decorative circles */}
                                    <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-emerald-400/20 blur-2xl" />

                                    <div className="absolute -bottom-24 right-1/3 h-52 w-52 rounded-full bg-orange-400/10 blur-2xl" />

                                    <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1fr_260px]">
                                        <div>
                                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-emerald-100 backdrop-blur-md">
                                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                                سیستم آماده مدیریت است
                                            </div>

                                            <h1 className="text-3xl font-black leading-tight md:text-4xl">
                                                سلام بر ادمین بزرگ 👋
                                            </h1>

                                            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                                                از اینجا می‌تونی مواد اولیه،
                                                غذاها و دسته‌بندی‌های سایت رو
                                                مدیریت کنی و منوی سایت رو همیشه
                                                خوشمزه و مرتب نگه داری.
                                            </p>

                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <Link
                                                    href="/admin/foods"
                                                    className="
                                                        inline-flex items-center gap-2
                                                        rounded-xl bg-emerald-400
                                                        px-5 py-3 text-sm font-extrabold
                                                        text-slate-900 shadow-lg
                                                        shadow-emerald-950/30
                                                        transition-all duration-300
                                                        hover:-translate-y-1
                                                        hover:bg-emerald-300
                                                    "
                                                >
                                                    مدیریت غذاها
                                                    <span>←</span>
                                                </Link>

                                                <Link
                                                    href="/"
                                                    className="
                                                        inline-flex items-center gap-2
                                                        rounded-xl border border-white/15
                                                        bg-white/10 px-5 py-3
                                                        text-sm font-bold text-white
                                                        backdrop-blur-md transition-all
                                                        duration-300 hover:bg-white/20
                                                    "
                                                >
                                                    مشاهده سایت
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Food illustration */}
                                        <div className="relative hidden h-56 items-center justify-center md:flex">
                                            <div className="absolute h-48 w-48 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />

                                            <div className="absolute h-36 w-36 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 shadow-2xl shadow-orange-900/40" />

                                            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-orange-50 text-6xl shadow-xl">
                                                🍲
                                            </div>

                                            <div className="absolute left-3 top-4 rotate-[-15deg] text-4xl drop-shadow-lg">
                                                🥦
                                            </div>

                                            <div className="absolute bottom-3 right-5 rotate-12 text-4xl drop-shadow-lg">
                                                🍅
                                            </div>

                                            <div className="absolute right-5 top-3 rotate-12 text-3xl drop-shadow-lg">
                                                🥕
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <StatCard
                                        title="بخش مدیریتی"
                                        value="۳"
                                        description="بخش فعال برای مدیریت"
                                        icon="⚙️"
                                    />

                                    <StatCard
                                        title="وضعیت سیستم"
                                        value="فعال"
                                        description="آماده دریافت تغییرات"
                                        icon="✅"
                                    />

                                    <StatCard
                                        title="سطح دسترسی"
                                        value="Admin"
                                        description="دسترسی کامل مدیریتی"
                                        icon="🛡️"
                                    />
                                </div>

                                {/* Quick access */}
                                <div className="rounded-[28px] border border-white bg-white/80 p-5 shadow-xl shadow-slate-200/50 backdrop-blur-xl md:p-7">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-black text-slate-800">
                                                دسترسی سریع
                                            </h2>

                                            <p className="mt-1 text-sm text-slate-500">
                                                برای شروع یکی از بخش‌ها را انتخاب
                                                کن
                                            </p>
                                        </div>

                                        <div className="hidden rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600 sm:block">
                                            مدیریت راحت‌تر، غذای خوشمزه‌تر 😄
                                        </div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-3">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.link}
                                                href={item.link}
                                                className="
                                                    group rounded-2xl border
                                                    border-slate-100 bg-white p-5
                                                    transition-all duration-300
                                                    hover:-translate-y-1.5
                                                    hover:border-emerald-200
                                                    hover:shadow-xl
                                                    hover:shadow-emerald-100/60
                                                "
                                            >
                                                <div
                                                    className={`
                                                        mb-5 flex h-12 w-12
                                                        items-center justify-center
                                                        rounded-2xl ${item.iconColor}
                                                        transition-transform duration-300
                                                        group-hover:rotate-6
                                                        group-hover:scale-110
                                                    `}
                                                >
                                                    {item.icon}
                                                </div>

                                                <h3 className="font-black text-slate-800">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-6 text-slate-500">
                                                    {item.description}
                                                </p>

                                                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-600">
                                                    ورود به بخش
                                                    <span className="transition-transform duration-300 group-hover:-translate-x-1">
                                                        ←
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </Container>
            </main>
        </ProtectedRoute>
    );
}

interface StatCardProps {
    title: string;
    value: string;
    description: string;
    icon: string;
}

function StatCard({
    title,
    value,
    description,
    icon,
}: StatCardProps) {
    return (
        <div
            className="
                group rounded-3xl border border-white
                bg-white/80 p-5 shadow-lg shadow-slate-200/40
                backdrop-blur-xl transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
            "
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-xs font-bold text-slate-400">
                        {title}
                    </p>

                    <p className="mt-2 text-2xl font-black text-slate-800">
                        {value}
                    </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {icon}
                </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
                {description}
            </p>
        </div>
    );
}