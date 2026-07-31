"use client"

import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
import LoadingComponent from "../../../shared/components/loading";
import Link from "next/link";
import { Clock, Star, Flame } from "lucide-react";
import { parseApiError } from "@/utils/apiError";
import Image from "next/image";

export default function GetFoods({ adminMode = false }: { adminMode?: boolean }) {

  const { data, isLoading, isError, error } = useGetAllFoods();
  const parsedError = isError ? parseApiError(error) : null;

  if (isLoading) return <LoadingComponent />;

  if (isError) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-red-500 text-center p-4 bg-red-50 rounded-xl ring-1 ring-red-200">
          {/* {(error as Error).message} */}
          {parsedError?.message}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {data?.map((food) => (
        <Link
          key={food.id}
          href={`${adminMode ? `/admin/foods/${food.id}` : `/food/${food.id}`}`}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-emerald-200
                     transition-all duration-200 hover:-translate-y-2 hover:shadow-2xl hover:ring-3 hover:ring-emerald-400"
        >
          {/* 🖼️ قسمت عکس */}
          <div className="relative h-44 w-full overflow-hidden">
            {/* {food.image ? (
              <Image
                src={food.image}
                alt={food.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100 text-5xl">
                🍽️
              </div>
            )} */}

            {/* <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-100 to-amber-100 text-5xl">
                🍽️
            </div> */}

            <Image
              src={'/foodImage.webp'}
              alt="foodImage"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />

            {/* بَج دسته‌بندی روی عکس */}
            <span className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
              {food.categoryName}
            </span>
          </div>

          {/* 📝 قسمت متن */}
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-lg font-bold text-emerald-900 line-clamp-1">{food.name}</h3>

            {/* اطلاعات سریع: زمان + امتیاز + سختی */}
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                {/* <Clock size={14} /> {food.cookTime ?? "۳۰"} دقیقه */}
                <Clock size={14} />۳۰ دقیقه
              </span>
              <span className="flex items-center gap-1">
                {/* <Star size={14} className="fill-amber-400 text-amber-400" /> {food.rating ?? "۴.۸"} */}
                <Star size={14} className="fill-amber-400 text-amber-400" />۴.۸
              </span>
              <span className="flex items-center gap-1">
                {/* <Flame size={14} /> {food.difficulty ?? "آسان"} */}
                <Flame size={14} />آسان
              </span>
            </div>

            {adminMode && (
              <div className="flex items-center gap-2 mt-2">
                <button className="flex-1 rounded-lg bg-amber-400 px-2 py-1.5 text-sm text-white ring-1 ring-amber-500 transition hover:bg-amber-500">
                  ویرایش
                </button>
                <button className="flex-1 rounded-lg bg-red-400 px-2 py-1.5 text-sm text-white ring-1 ring-red-500 transition hover:bg-red-600">
                  حذف
                </button>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}