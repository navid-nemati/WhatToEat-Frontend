"use client"

import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
import LoadingComponent from "../../../shared/components/loading";
import { parseApiError } from "@/utils/apiError";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IFoodQueryParams } from "../types/Food";
import FoodFilter from "./foodFilter";
import FoodCard from "./foodCard";

export default function FoodPageContent() {

  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const search = searchParams.get("search")
  const includedIngredientIds =
    searchParams.getAll("includedIngredientIds");

  const [filter, setFilter] = useState<IFoodQueryParams>({
    search: search || undefined,
    categoryId: categoryId || undefined,
    includedIngredientIds: includedIngredientIds,
    excludedIngredientIds: [],
  });

  const { data, isLoading, isError, error } = useGetAllFoods(filter);

  const parsedError = isError ? parseApiError(error) : null;

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError && parsedError?.message) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="rounded-xl bg-red-50 p-4 text-center text-red-500 ring-1 ring-red-200">
          {parsedError?.message}
        </p>
      </div>
    );
  }

  // if (!data?.length) {
  //   return (
  //     <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-16 text-center">
  //       <span className="mb-3 text-5xl">🍽️</span>

  //       <h3 className="text-lg font-bold text-slate-800">
  //         هنوز غذایی ثبت نشده
  //       </h3>

  //       <p className="mt-1 text-sm text-slate-500">
  //         غذاهای جدید پس از ثبت، اینجا نمایش داده می‌شوند.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <>

      <FoodFilter
        filter={filter}
        setFilter={setFilter}
      />

      <div className="grid w-full gap-3 md:gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

        {data?.length ? (
          data.map((food) => {
            return (
              <FoodCard key={food.id} food={food} />
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-16 text-center">
            <span className="mb-3 text-5xl">🍽️</span>

            <h3 className="text-lg font-bold text-slate-800">
              هنوز غذایی ثبت نشده
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              غذاهای جدید پس از ثبت، اینجا نمایش داده می‌شوند.
            </p>
          </div>
        )}


      </div>
    </>
  );
}