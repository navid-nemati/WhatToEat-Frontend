// 'use client'

// import Container from "@/shared/components/container";
// import { useState } from "react";
// import { IIngredientItem } from "../types/Ingredient";
// import { X } from "lucide-react";
// import Modal from "@/shared/components/modal";
// import SelectIngredient from "./selectIngredient";
// import { useRouter } from "next/navigation";

// export default function RefrigeratorSection() {

//     const [includedIngredientIsOpen, setIncludedIngredientIsOpen] = useState(false)
//     const [includedIngredients, setIncludedIngredients] = useState<IIngredientItem[]>([]);

//     const handleRemoveIncludedIngredient = (id: string) => {
//         setIncludedIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
//     };

//     const handleIncludedIngredientSelect = (ingredient: IIngredientItem) => {
//         setIncludedIngredients((prev) => {
//             if (prev.some(item => item.id === ingredient.id)) return prev;
//             return [...prev, { id: ingredient.id, name: ingredient.name }];
//         });
//         setIncludedIngredientIsOpen(false);
//     };

//     const router = useRouter();

//     const handleSearch = () => {
//         const params = new URLSearchParams();

//         includedIngredients.forEach((ingredient) => {
//             params.append("includedIngredientIds", ingredient.id);
//         });

//         router.push(`/food?${params.toString()}`);
//     };

//     return (
//         <div className="py-8">
//             <Container>
//                 <div className="flex flex-col md:flex-row rounded-2xl bg-emerald-600 p-7">
//                     <div className="w-1/2">
//                         <h3 className="text-2xl text-white">چی توی یخچالت داری ؟</h3>
//                         <span className="text-sm text-white/70 mt-1">ببین چی میشه باهاشون درست کرد</span>
//                     </div>
//                     <div className="w-1/2 flex flex-col">
//                         <div className="flex flex-col gap-1.5 flex-1 bg-slate-50 border border-slate-200 p-2.5 rounded-xl transition-all duration-300 min-h-12 justify-center">
//                             <div className="flex w-full justify-between items-center">
//                                 <span className="text-xs sm:text-sm font-medium text-slate-600">شامل این مواد (دارم)</span>
//                                 <button
//                                     type="button"
//                                     onClick={() => setIncludedIngredientIsOpen(true)}
//                                     className="bg-emerald-500 px-2.5 py-1 rounded-md text-white text-xs font-medium transition-all hover:bg-emerald-700"
//                                 >
//                                     افزودن
//                                 </button>
//                             </div>

//                             <div className="flex gap-2 flex-wrap items-center">
//                                 {includedIngredients.length === 0 ? (
//                                     <span className="text-[10px] text-slate-400">هیچ ماده‌ای اضافه نشده است</span>
//                                 ) : (
//                                     includedIngredients.map((ingredient) => (
//                                         <div
//                                             key={ingredient.id}
//                                             className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center gap-1.5 text-xs"
//                                         >
//                                             {ingredient.name}
//                                             <button
//                                                 type="button"
//                                                 onClick={() => handleRemoveIncludedIngredient(ingredient.id)}
//                                                 className="text-emerald-500 hover:text-emerald-700 hover:bg-emerald-100 rounded-full p-0.5 flex items-center justify-center transition-colors"
//                                                 aria-label={`حذف ${ingredient.name}`}
//                                             >
//                                                 <X size={12} />
//                                             </button>
//                                         </div>
//                                     ))
//                                 )}
//                             </div>
//                         </div>
//                         <button
//                             type="button"
//                             onClick={handleSearch}
//                             disabled={includedIngredients.length === 0}
//                             className=""
//                         >
//                             پیدا کردن غذا
//                         </button>
//                     </div>
//                 </div>
//             </Container>

//             <Modal
//                 open={includedIngredientIsOpen}
//                 onOpenChange={setIncludedIngredientIsOpen}
//                 title="افزودن ماده اولیه (موادی که دارید)"
//                 size="xs"
//             >
//                 <SelectIngredient onIngredientSelect={handleIncludedIngredientSelect} />
//             </Modal>
//         </div>
//     )
// }

'use client'

import Container from "@/shared/components/container";
import { useState } from "react";
import { IIngredientItem } from "../types/Ingredient";
import { X, Plus, Search, Snowflake } from "lucide-react";
import Modal from "@/shared/components/modal";
import SelectIngredient from "./selectIngredient";
import { useRouter } from "next/navigation";

export default function RefrigeratorSection() {

    const [includedIngredientIsOpen, setIncludedIngredientIsOpen] = useState(false)
    const [includedIngredients, setIncludedIngredients] = useState<IIngredientItem[]>([]);

    const handleRemoveIncludedIngredient = (id: string) => {
        setIncludedIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
    };

    const handleIncludedIngredientSelect = (ingredient: IIngredientItem) => {
        setIncludedIngredients((prev) => {
            if (prev.some(item => item.id === ingredient.id)) return prev;
            return [...prev, { id: ingredient.id, name: ingredient.name }];
        });
        setIncludedIngredientIsOpen(false);
    };

    const router = useRouter();

    const handleSearch = () => {
        const params = new URLSearchParams();

        includedIngredients.forEach((ingredient) => {
            params.append("includedIngredientIds", ingredient.id);
        });

        router.push(`/food?${params.toString()}`);
    };

    return (
        <div className="py-8">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 via-emerald-600 to-emerald-700 p-6 md:p-10 shadow-xl shadow-emerald-900/20">

                    {/* decorative blobs */}
                    <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-400/30 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
                    <div className="pointer-events-none absolute bottom-10 right-1/4 h-2 w-2 rounded-full bg-emerald-200/70" />

                    <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">

                        <div className="order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm ring-1 ring-white/20">
                                <Snowflake size={14} className="text-amber-300" />
                                <span>یخچال من</span>
                            </div>

                            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                چی توی یخچالت داری؟
                            </h3>
                            <p className="mt-2 text-sm text-white/75 sm:text-base">
                                موادی که تو خونه داری رو وارد کن، ما باهاشون بهترین دستور غذاها رو بهت پیشنهاد می‌دیم.
                            </p>

                            <div className="mt-6 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-white/40 backdrop-blur">

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500 sm:text-sm">
                                        موادی که دارم
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setIncludedIngredientIsOpen(true)}
                                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:shadow-md hover:shadow-emerald-500/40 active:scale-95"
                                    >
                                        <Plus size={14} />
                                        افزودن
                                    </button>
                                </div>

                                <div className="mt-3 min-h-13 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-2.5">
                                    {includedIngredients.length === 0 ? (
                                        <div className="flex h-8.5 items-center justify-center gap-1.5 text-[11px] text-slate-400">
                                            <Snowflake size={12} />
                                            <span>هنوز ماده‌ای اضافه نکردی</span>
                                        </div>
                                    ) : (
                                        <div className="flex flex-wrap items-center gap-1.5">
                                            {includedIngredients.map((ingredient) => (
                                                <span
                                                    key={ingredient.id}
                                                    className="group inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 transition-colors hover:border-emerald-300"
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                                    {ingredient.name}
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveIncludedIngredient(ingredient.id)}
                                                        className="rounded-full p-0.5 text-emerald-500 transition-colors hover:bg-emerald-100 hover:text-emerald-700"
                                                        aria-label={`حذف ${ingredient.name}`}
                                                    >
                                                        <X size={12} />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* دکمه جستجو */}
                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    disabled={includedIngredients.length === 0}
                                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-bold text-amber-950 shadow-md shadow-amber-500/30 transition-all hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                                >
                                    <Search size={16} />
                                    پیدا کردن غذا
                                </button>
                            </div>
                        </div>

                        {/* تصویر یخچال */}
                        <div className="order-1 flex justify-center md:order-2 md:justify-end">
                            <div className="relative">
                                {/* هاله نور */}
                                <div className="absolute inset-0 -z-10 rounded-full bg-white/10 blur-3xl" />
                                <FridgeIllustration />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Modal
                open={includedIngredientIsOpen}
                onOpenChange={setIncludedIngredientIsOpen}
                title="افزودن ماده اولیه (موادی که دارید)"
                size="xs"
            >
                <SelectIngredient onIngredientSelect={handleIncludedIngredientSelect} />
            </Modal>
        </div>
    )
}

/* ---------- SVG یخچال ---------- */
function FridgeIllustration() {
    return (
        <svg
            viewBox="0 0 200 260"
            className="h-48 w-auto drop-shadow-2xl sm:h-56 md:h-64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* بدنه */}
            <rect x="34" y="16" width="132" height="228" rx="20" fill="white" fillOpacity="0.96" />
            <rect x="34" y="16" width="132" height="228" rx="20" stroke="#A7F3D0" strokeWidth="2" />

            {/* خط جداکننده */}
            <line x1="34" y1="100" x2="166" y2="100" stroke="#D1FAE5" strokeWidth="4" />

            {/* دستگیره‌ها */}
            <rect x="144" y="42" width="8" height="34" rx="4" fill="#10B981" />
            <rect x="144" y="118" width="8" height="52" rx="4" fill="#10B981" />

            {/* پاها */}
            <rect x="52" y="242" width="22" height="10" rx="5" fill="#065F46" />
            <rect x="126" y="242" width="22" height="10" rx="5" fill="#065F46" />

            {/* برچسب‌های روی در */}
            <rect x="50" y="42" width="30" height="30" rx="8" fill="#ECFDF5" />
            <rect x="50" y="118" width="30" height="30" rx="8" fill="#FEF3C7" />

            {/* نوارهای تزئینی */}
            <rect x="50" y="80" width="60" height="6" rx="3" fill="#D1FAE5" />

            {/* برف‌ریزه‌های تزئینی دور یخچال */}
            <circle cx="30" cy="60" r="3" fill="#FBBF24" />
            <circle cx="172" cy="70" r="2.5" fill="#FBBF24" />
            <circle cx="26" cy="150" r="2" fill="#34D399" />
            <circle cx="176" cy="180" r="3" fill="#FCD34D" />
            <circle cx="20" cy="200" r="2" fill="#34D399" />
        </svg>
    );
}