// import Container from "@/shared/components/container";
// import GetFoods from "@/features/foods/components/foodList"

// export default function Home() {

//   return (
//     <div>

//       {/* Hero Section */}
//       <div className="pt-25 md:pt-40">
//         <Container>
//           <div className="flex flex-col gap-15">
//             <div className="flex flex-col md:flex-row">
//               <div className="flex flex-col gap-15 items-center md:items-start">
//                 <p
//                   className="estedad-bold text-3xl md:text-4xl text-emerald-900 drop-shadow-md text-shadow-sm leading-13"
//                 >بهترین <br /><span className="bg-linear-to-l from-green-600 to-green-500 bg-clip-text text-transparent">دستورهای آشپزی</span> را اینجا پیدا کنید.</p>

//                 <button className="bg-amber-400 transition-all duration-200 px-5 py-3 md:py-3 rounded-full text-lg md:text-xl shadow-md hover:shadow-xl hover:scale-[1.05] cursor-pointer">
//                   شروع آشپزی 🍳
//                 </button>
//               </div>
//             </div>
//             <GetFoods />
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

////-----------------------------

import Container from "@/shared/components/container";
import GetFoods from "@/features/foods/components/foodList";
import Link from "next/link";
import { ChefHat, Sparkles, ArrowLeft, Clock, Star, Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* بک‌گراند تزئینی: دو تا بلاب گرادینت محو */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute top-32 -left-24 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      </div>

      {/* ===== Hero ===== */}
      <section className="pt-28 md:pt-44 pb-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 👈 سمت راست: متن */}
            <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-right">
              {/* بَج بالای عنوان */}
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200">
                <Sparkles size={16} />
                هر روز یه غذای جدید
              </span>

              {/* عنوان اصلی */}
              <h1 className="estedad-bold text-4xl md:text-5xl lg:text-6xl text-emerald-900 leading-tight">
                امروز
                <br />
                <span className="bg-linear-to-l from-emerald-600 to-green-400 bg-clip-text text-transparent">
                  چی بپزم؟
                </span>
              </h1>

              <p className="max-w-md text-base md:text-lg text-slate-600">
                صدها دستور پخت خوشمزه و ساده، با راهنمای قدم به قدم. فقط انتخاب کن، بپز و لذت ببر! 🍳
              </p>

              {/* دکمه‌ها */}
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/food/mainPage">
                  <button className="group flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-lg font-medium text-emerald-950 shadow-lg shadow-amber-400/30 transition-all duration-200 hover:bg-amber-500 hover:shadow-xl hover:shadow-amber-400/40 hover:scale-105 active:scale-95">
                    <ChefHat size={20} className="transition-transform group-hover:rotate-12" />
                    شروع آشپزی
                  </button>
                </Link>
                <Link href="#foods">
                  <button className="flex items-center gap-2 rounded-full border-2 border-emerald-200 px-6 py-3 text-lg text-emerald-800 transition-all duration-200 hover:bg-emerald-50 hover:scale-105 active:scale-95">
                    مرور غذاها
                    <ArrowLeft size={20} />
                  </button>
                </Link>
              </div>

              {/* آمار */}
              <div className="flex items-center gap-5 mt-2">
                <div>
                  <div className="text-2xl font-bold text-emerald-700">۲۰۰+</div>
                  <div className="text-sm text-slate-500">دستور پخت</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-emerald-700">۴.۹</div>
                  <div className="text-sm text-slate-500">امتیاز کاربران</div>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-bold text-emerald-700">۱۵+</div>
                  <div className="text-sm text-slate-500">دسته‌بندی</div>
                </div>
              </div>
            </div>

            {/* 👈 سمت چپ: صحنه تزئینی غذا + کارت‌های شناور */}
            <div className="relative hidden md:block h-[460px]">
              {/* دایره مرکزی با گرادینت و اموجی غذا */}
              <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-linear-to-br from-emerald-200 via-emerald-100 to-amber-100 shadow-2xl shadow-emerald-300/40 flex items-center justify-center animate-float-slow">
                <span className="text-[140px] leading-none">🍝</span>
              </div>

              {/* کارت شناور ۱: زمان */}
              <div className="absolute top-6 left-2 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-xl ring-1 ring-emerald-100 animate-float">
                <div className="flex items-center gap-2 text-emerald-800">
                  <Clock size={18} className="text-emerald-600" />
                  <div>
                    <div className="text-sm font-bold">آماده در</div>
                    <div className="text-xs text-slate-500">۲۵ دقیقه</div>
                  </div>
                </div>
              </div>

              {/* کارت شناور ۲: امتیاز */}
              <div className="absolute bottom-16 left-0 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-xl ring-1 ring-amber-100 animate-float-slow">
                <div className="flex items-center gap-2 text-amber-700">
                  <Star size={18} className="fill-amber-400 text-amber-400" />
                  <div>
                    <div className="text-sm font-bold">۴.۹ / ۵</div>
                    <div className="text-xs text-slate-500">محبوب کاربران</div>
                  </div>
                </div>
              </div>

              {/* کارت شناور ۳: سختی */}
              <div className="absolute bottom-4 right-6 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-xl ring-1 ring-orange-100 animate-float">
                <div className="flex items-center gap-2 text-orange-700">
                  <Flame size={18} className="text-orange-500" />
                  <div>
                    <div className="text-sm font-bold">سطح آسان</div>
                    <div className="text-xs text-slate-500">برای مبتدی</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== لیست غذاها ===== */}
      <section id="foods" className="pt-6 pb-24 scroll-mt-28">
        <Container>
          <GetFoods />
        </Container>
      </section>
    </div>
  );
}