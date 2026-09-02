'use client'

import DeleteAllFavoriteList from "@/features/favoriteList/hooks/useDeleteAllFavoriteList";
import DeleteFavoriteListItemHook from "@/features/favoriteList/hooks/useDeleteFavoriteListItem";
import GetFavoriteList from "@/features/favoriteList/hooks/useGetFavoriteList";
import AppToast from "@/lib/toast";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import ProtectedRoute from "@/shared/components/ProtectedRoute";
import { parseApiError } from "@/utils/apiError";
import { getFoodImageUrl } from "@/utils/image";
import { Clock, Flame, Loader2, Star, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FavoriteListPage() {

    const {
        data,
        isLoading,
        isError,
        error
    } = GetFavoriteList()

    const [pendingFoodId, setPendingFoodId] = useState<string | null>(null);

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const {
        mutate: deleteItem,
        isPending: deleteIsPending
    } = DeleteFavoriteListItemHook();

    const { mutate: deleteAll } = DeleteAllFavoriteList()

    const handleDelete = (id: string) => {

        if (pendingFoodId) return;

        setPendingFoodId(id);

        deleteItem(id, {
            onSuccess: () => {
                AppToast.success("آیتم حذف شد");
            },
            onError: (err) => {
                AppToast.error(err.message);
            },
            onSettled: () => {
                setPendingFoodId(null)
            }
        });
    };

    const handleDeleteAll = () => {
        deleteAll(undefined, {
            onSuccess: () => AppToast.success("همه موارد حذف شدند"),
            onError: (err) => AppToast.error(err.message),
        });
    };

    if (isLoading) {
        return <LoadingComponent />;
    }

    return (
        <ProtectedRoute>
            <Container>
                <div className="pt-21 md:pt-30 pb-10">
                    {/* Header & Global Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between mb-6 gap-4">
                        <div className="flex items-end gap-4">
                            <h3 className="text-2xl font-bold text-emerald-800 text-nowrap">علاقه مندی ها</h3>
                            <p className="text-slate-500 text-sm">
                                غذا های مورد علاقه ات رو اینجا ببین
                            </p>
                        </div>

                        <button
                            onClick={handleDeleteAll}
                            className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                        >
                            <Trash2 size={16} />
                            حذف همه مواد
                        </button>
                    </div>

                    {isError && parsedError?.message && (
                        <p className="text-sm text-rose-500 text-center mt-2">
                            {parsedError.message}
                        </p>
                    )}

                    {!isLoading && data && data.length > 0 && (
                        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                            {data.map((food) => (
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
                                        href={`/food/${food.foodId}`}
                                        className="
                relative block h-44 w-full overflow-hidden rounded-2xl
                outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500
                focus-visible:ring-offset-2
              "
                                    >
                                        <img
                                            src={getFoodImageUrl(food.imagePath)}
                                            alt={food.name}

                                            sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 50vw,
                  25vw
                "
                                            className="
                  absolute inset-0 h-full w-full object-cover
                  object-center
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
                                        <div
                                            className="
                  group/title
                  rounded-lg
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                "
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <Link href={`/food/${food.foodId}`}>
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
                                                </Link>
                                                <button
                                                    aria-disabled={pendingFoodId === food.id}
                                                    onClick={() => {
                                                        handleDelete(food.id);
                                                        if (pendingFoodId === food.id) return;
                                                    }}
                                                    className={`p-1.5 text-gray-500 hover:text-red-600
                                                            hover:bg-red-50 rounded-md transition-colors
                                                            active:text-red-500 active:bg-red-50
                                                            ${pendingFoodId === food.id ? "cursor-not-allowed opacity-60" : ""}`}
                                                >
                                                    {pendingFoodId === food.id ? (
                                                        <Loader2 className="size-5 animate-spin" />
                                                    ) : (
                                                        <Trash2 size={18} />
                                                    )}

                                                </button>
                                            </div>
                                        </div>

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
                            ))}
                        </div>
                    )}

                    {!data?.length && (
                        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-16 text-center">
                            <span className="mb-3 text-5xl">🍽️</span>

                            <h3 className="text-lg font-bold text-slate-800">
                                هنوز غذایی را به علاقه مندی خود اضافه نکرده اید.
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                غذاهای جدید پس از ثبت، اینجا نمایش داده می‌شوند.
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </ProtectedRoute>
    )

}