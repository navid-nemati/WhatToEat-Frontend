// "use client"

// import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
// import LoadingComponent from "../../../shared/components/loading";
// import Link from "next/link";
// import { Clock, Star, Flame } from "lucide-react";
// import { parseApiError } from "@/utils/apiError";
// import Image from "next/image";

// export default function GetFoods({ adminMode = false }: { adminMode?: boolean }) {

//   const { data, isLoading, isError, error } = useGetAllFoods();
//   const parsedError = isError ? parseApiError(error) : null;

//   if (isLoading) return <LoadingComponent />;

//   if (isError) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <p className="text-red-500 text-center p-4 bg-red-50 rounded-xl ring-1 ring-red-200">
//           {/* {(error as Error).message} */}
//           {parsedError?.message}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//       {data?.map((food) => (
//         <Link
//           key={food.id}
//           href={`${adminMode ? `/admin/foods/${food.id}` : `/food/${food.id}`}`}
//           className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-200
//                      transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl hover:ring-3 hover:ring-emerald-400"
//         >
//           {/* 🖼️ قسمت عکس */}
//           <div className="relative h-44 w-full overflow-hidden">
//             {/* {food.image ? (
//               <Image
//                 src={food.image}
//                 alt={food.name}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 25vw"
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             ) : (
//               <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100 text-5xl">
//                 🍽️
//               </div>
//             )} */}

//             {/* <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100 text-5xl">
//                 🍽️
//             </div> */}

//             <Image
//               src={'/foodImage.webp'}
//               alt="foodImage"
//               fill
//               sizes="(max-width: 768px) 100vw, 25vw"
//               className="object-cover"
//             />

//             {/* بَج دسته‌بندی روی عکس */}
//             <span className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
//               {food.categoryName}
//             </span>
//           </div>

//           {/* 📝 قسمت متن */}
//           <div className="flex flex-col gap-2 p-4">
//             <h3 className="text-lg font-bold text-emerald-900 line-clamp-1">{food.name}</h3>

//             {/* اطلاعات سریع: زمان + امتیاز + سختی */}
//             <div className="flex items-center gap-3 text-xs text-slate-500">
//               <span className="flex items-center gap-1">
//                 {/* <Clock size={14} /> {food.cookTime ?? "۳۰"} دقیقه */}
//                 <Clock size={14} />۳۰ دقیقه
//               </span>
//               <span className="flex items-center gap-1">
//                 {/* <Star size={14} className="fill-amber-400 text-amber-400" /> {food.rating ?? "۴.۸"} */}
//                 <Star size={14} className="fill-amber-400 text-amber-400" />۴.۸
//               </span>
//               <span className="flex items-center gap-1">
//                 {/* <Flame size={14} /> {food.difficulty ?? "آسان"} */}
//                 <Flame size={14} />آسان
//               </span>
//             </div>

//             {adminMode && (
//               <div className="flex items-center gap-2 mt-2">
//                 <button className="flex-1 rounded-lg bg-amber-400 px-2 py-1.5 text-sm text-white ring-1 ring-amber-500 transition hover:bg-amber-500">
//                   ویرایش
//                 </button>
//                 <button className="flex-1 rounded-lg bg-red-400 px-2 py-1.5 text-sm text-white ring-1 ring-red-500 transition hover:bg-red-600">
//                   حذف
//                 </button>
//               </div>
//             )}
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }

"use client";

import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
import LoadingComponent from "../../../shared/components/loading";
import Link from "next/link";
import {
  Clock,
  Star,
  Flame,
  ArrowLeft,
} from "lucide-react";
import { parseApiError } from "@/utils/apiError";
import Image from "next/image";

export default function GetFoods({
  adminMode = false,
}: {
  adminMode?: boolean;
}) {
  const { data, isLoading, isError, error } = useGetAllFoods();

  const parsedError = isError ? parseApiError(error) : null;

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="rounded-xl bg-red-50 p-4 text-center text-red-500 ring-1 ring-red-200">
          {parsedError?.message}
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-16 text-center">
        <span className="mb-3 text-5xl">🍽️</span>

        <h3 className="text-lg font-bold text-slate-800">
          هنوز غذایی ثبت نشده
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          غذاهای جدید پس از ثبت، اینجا نمایش داده می‌شوند.
        </p>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data.map((food) => {
        const foodHref = adminMode
          ? `/admin/foods/${food.id}`
          : `/food/${food.id}`;

        return (
          <article
            key={food.id}
            className="
              group relative flex flex-col overflow-hidden rounded-3xl
              border border-slate-200/80 bg-white p-2.5
              shadow-[0_4px_20px_rgba(15,23,42,0.05)]
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:border-emerald-300
              hover:shadow-[0_18px_45px_rgba(16,185,129,0.14)]
            "
          >
            {/* تصویر */}
            <Link
              href={foodHref}
              className="
                relative block h-44 w-full overflow-hidden rounded-2xl
                outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
              "
            >
              <Image
                src="/foodImage.webp"
                alt={`تصویر ${food.name}`}
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
                className="
                  object-cover
                "
              />

              {/* Badge دسته‌بندی */}
              <span
                className="
                  absolute right-3 top-3
                  max-w-[calc(100%-1.5rem)]
                  truncate rounded-full
                  border border-white/20
                  bg-black/35
                  px-3 py-1.5
                  text-xs font-medium
                  text-white
                  shadow-sm
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:bg-emerald-600/90
                "
              >
                {food.categoryName}
              </span>
            </Link>

            {/* محتوا */}
            <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
              <Link
                href={foodHref}
                className="
                  group/title
                  rounded-lg
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                "
              >
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className="
                      line-clamp-1
                      text-lg font-bold
                      text-slate-800
                      transition-colors
                      duration-200
                      group-hover/title:text-emerald-700
                      group-hover:text-emerald-800
                    "
                  >
                    {food.name}
                  </h3>

                  {!adminMode && (
                    <ArrowLeft
                      size={18}
                      className="
                        mt-1 shrink-0
                        text-slate-300
                        transition-all
                        duration-300
                        group-hover:-translate-x-1
                        group-hover:text-emerald-600
                      "
                    />
                  )}
                </div>
              </Link>

              {/* اطلاعات غذا */}
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-emerald-600" />
                  ۳۰ دقیقه
                </span>

                <span className="h-3 w-px bg-slate-200" />

                <span className="flex items-center gap-1.5">
                  <Star
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                  ۴.۸
                </span>

                <span className="h-3 w-px bg-slate-200" />

                <span className="flex items-center gap-1.5">
                  <Flame size={14} className="text-orange-500" />
                  آسان
                </span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}