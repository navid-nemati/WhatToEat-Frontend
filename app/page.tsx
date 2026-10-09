import Container from "@/shared/components/container";
import GetFoods from "@/features/foods/components/foodList";
import { Sparkles, Leaf, Sparkle } from "lucide-react";
import Image from "next/image";
import HeroSearch from "@/shared/components/HeroSearch";
import CategorySection from "@/features/categories/components/categorySection";
import RefrigeratorSection from "@/features/ingredients/components/refrigeratorSection";

export default function Home() {

  return (
    <div className="relative overflow-hidden">
      {/* بک‌گراند تزئینی: دو تا بلاب گرادینت محو */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-32 -left-24 h-80 w-80 rounded-full md:bg-amber-300/30 blur-3xl" />
      </div> */}

      {/* ===== Hero ===== */}
      <section className="pt-24 md:pt-30 pb-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            <div className="lg:col-span-7 flex flex-col gap-6 items-center md:items-start text-center md:text-right">
            
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 border-b border-slate-300 pb-1">
                <Sparkles size={14} className="text-emerald-500" />
                دستورپخت‌های خونگی و سریع
              </span>

              <h1 className="estedad-bold text-4xl md:text-6xl text-emerald-900 drop-shadow-md leading-tight">
                امروز
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10 bg-linear-to-l from-emerald-700 to-green-600 bg-clip-text text-transparent">چی بپزم؟</span>
                  {/* خط زرد زیر کلمه برای جلب توجه بدون استفاده از رنگ متن */}
                  <svg
                    className="absolute bottom-1 right-0 w-full h-3 z-0"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 9C50 3 150 3 198 9"
                      stroke="#fbbf24"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="max-w-md text-base md:text-lg text-slate-600 px-5 sm:px-0">
                صدها دستور پخت خوشمزه و ساده، با راهنمای قدم به قدم. فقط با چیزایی که توی یخچالت داری، بپز و لذت ببر! 🍳
              </p>

              {/* سرچ */}
              <HeroSearch />

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
        
            <div className="flex md:hidden lg:flex justify-center lg:col-span-5 lg:justify-end">
              <PlateVisual />
            </div>
          </div>
        </Container>
      </section>

      <CategorySection />

      <RefrigeratorSection />

      {/* ===== لیست غذاها ===== */}
      <section id="foods" className="pt-6 pb-24 scroll-mt-28">
        <Container>
          <GetFoods />
        </Container>
      </section>
    </div>
  );
}
function PlateVisual() {
  return (
    <div className="relative h-70 w-70 sm:h-90 sm:w-90 md:h-110 md:w-110">

      {/* هاله */}
      <div className="absolute inset-4 rounded-full bg-linear-to-br from-emerald-200/50 via-amber-100/40 to-transparent blur-2xl" />

      {/* حلقه‌ی نقطه‌چین — کمی بزرگ‌تر از بشقاب */}
      <svg
        className="absolute inset-0 animate-[spin_40s_linear_infinite] text-emerald-500/40"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200" cy="200" r="196"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="1 12"
          strokeLinecap="round"
        />
        <circle cx="200" cy="5" r="5" fill="#10B981" />
      </svg>

      {/* بشقاب — با inset از حلقه کوچیک‌تره */}
      <div className="absolute inset-6 sm:inset-8 md:inset-10 overflow-hidden rounded-full shadow-2xl shadow-emerald-300/40 animate-float-slow">
        <Image
          src="/heroImage.webp"
          alt="بشقاب غذا"
          fill
          sizes="(max-width: 768px) 280px, 440px"
          className="object-cover"
          priority
        />
      </div>

      <Leaf className="absolute -right-2 top-10 h-8 w-8 rotate-45 fill-emerald-400/40 text-emerald-500" />
      <Sparkle className="absolute -left-2 bottom-20 h-7 w-7 fill-amber-300 text-amber-400" />
    </div>
  );
}