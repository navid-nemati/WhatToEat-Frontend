"use client"

import { useGetAllFoods } from "@/features/Food/hooks/useGetAllFoods";
import Container from "../../../components/container";
import LoadingComponent from "../../../components/loading";
import Link from "next/link";

interface props {
    adminMode?: boolean
}

export default function GetFoods({ adminMode = false }: props) {

    const {
        data,
        isLoading,
        isError,
        error
    } = useGetAllFoods()

    //const parsedError = isError ? parseApiError(error) : null;

    if (isLoading) return (
        // <div className="absolute inset-0 z-10 flex items-center justify-center">
        //     <div className="bg-sky-200 rounded-xl px-4 py-3">
        //         <div className="flex items-center gap-1">
        //             <div>در حال بارگذاری</div>
        //             <div className=" flex items-center gap-0.5 mb-1 text-xl">
        //                 <span className="moveUpDown">.</span>
        //                 <span className="moveUpDown">.</span>
        //                 <span className="moveUpDown">.</span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <LoadingComponent />
    )



    if (isError) {
        return (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <p className="text-red-500 text-center p-4">
                    {(error as Error).message}

                    {/* {parsedError?.message && (
                        <p className="text-sm text-red-500 text-center">
                            {parsedError.message}
                        </p>
                    )} */}
                    {/* {toast.error((error as Error).message)} */}
                </p>
            </div>
        );
    }

    return (
        <div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {data?.map(food => (
                    <Link
                        key={food.id}
                        href={`${adminMode ? `/admin/foods/${food.id}` : `/food/${food.id}`}`}
                        className="w-full px-4 py-3 rounded-xl
                            bg-emerald-200/60 border border-emerald-400/60
                            backdrop-blur-lg transition-all duration-200 shadow-xs 
                            hover:shadow-sm hover:ring
                            ring-emerald-300 hover:-translate-y-1">
                        <div className="flex flex-col gap-2 text-black">
                            <div className="text-xl
                                    text-shadow-xs text-shadow-stone-500">
                                {food.name}
                            </div>
                            <div><span className="">دسته بندی: </span><span className="text-shadow-xs text-shadow-primary-dark">{food.categoryName}</span></div>
                            {adminMode && (
                                <div className="flex items-center gap-1.5 mt-2">
                                    <button className="px-2 py-1 text-sm rounded-lg transition-all duration-200 bg-amber-400 ring ring-amber-500 text-white hover:bg-amber-500">
                                        ویرایش
                                    </button>
                                    <button className="px-2 py-1 text-sm rounded-lg transition-all duration-200 bg-red-400 ring ring-red-500 text-white hover:bg-red-600">
                                        حذف
                                    </button>
                                </div>
                            )}

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}