"use client"

import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import Image from "next/image";
import { useParams } from "next/navigation";

interface FoodDetailProp {
    params: Promise<{ id: string }>
}

export default function FoodDetail({ params }: FoodDetailProp) {

    const { id } = useParams<{ id: string }>();

    const {
        data,
        isLoading,
        isError,
        error,
    } = useGetFoodDetail(id);

    const {
        data: ingredientData,
        isLoading: ingredientIsLoading,
        isError: ingredientIsError,
        error: ingredientError,
    } = UseGetAllIngredientOfFood(id);


    if (isLoading) return (
        <LoadingComponent />
    )

    if (isError) {
        return (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <p className="text-red-500 text-center p-4">
                    {(error as Error).message}
                    {/* {toast.error((error as Error).message)} */}
                </p>
            </div>
        );
    }

    return (
        <div className="">
            <Container>
                <div className="pt-21 md:pt-30 flex md:flex-row flex-col gap-10">
                    {/* right side */}
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-4 items-center bg-white p-4
                        border border-slate-200/80 rounded-3xl shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
                            {/* Image */}
                            <div className="relative w-60 rounded-lg overflow-hidden">
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={'/foodImage.webp'}
                                        alt="foodImage"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        className="object-contain"
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <div className="text-xl">{data?.name}</div>
                                <div className="text-emerald-600 text-shadow-sm">دسته بندی: <span className="text-slate-900">{data?.categoryName}</span></div>
                            </div>
                        </div>

                        {/* <table className="min-w-64 mt-6 rounded-lg overflow-hidden ring ring-emerald-300 border-collapse">
                            <thead className="bg-emerald-50">
                                <tr className="divide-x">
                                    <th scope="col" className="px-6 py-2 text-right border-b border-emerald-300">
                                        ماده اولیه
                                    </th>
                                    <th scope="col" className="px-6 py-2 text-right border-b border-emerald-300">
                                        مقدار مورد نیاز
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingredientIsLoading ? (
                                    <tr className="bg-emerald-50/60 hover:bg-emerald-100/30 transition-colors divide-x divide-emerald-300 select-none">
                                        <td colSpan={2} className="text-center p-4">
                                            در حال بارگذاری...
                                        </td>
                                    </tr>
                                ) : ingredientData?.length ? (
                                    ingredientData.map((i) => (
                                        <tr className="px-6 py-3  text-right" key={i.id}>
                                            <td>{i.ingredientName}</td>
                                            <td>{i.value}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} className="text-center p-4">
                                            مواد اولیه در دسترس نیستند.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table> */}

                        {/* Ingredients List */}
                        <div className="min-w-64 rounded-3xl overflow-hidden 
                        flex flex-col gap-2 bg-white p-3 divide-y divide-emerald-200
                        shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
                            <div className="w-full flex items-center p-1 pb-3 divide-x divide-emerald-200">
                                <div className="flex-1 text-center">ماده اولیه</div>
                                <div className="flex-1 text-center">مقدار مورد نیاز</div>
                            </div>

                            <div className="flex flex-col gap-2">
                                {ingredientIsLoading ? (
                                    <div className="hover:bg-emerald-100/30 transition-colors select-none">
                                        <div className="text-center p-4">
                                            در حال بارگذاری...
                                        </div>
                                    </div>
                                ) : ingredientData?.length ? (

                                    ingredientData.map((i) => (
                                        <div className="w-full flex items-center justify-between rounded-xl 
                                        px-6 py-3 text-right transition-all duration-200 hover:bg-emerald-100
                                        bg-emerald-50" key={i.id}>
                                            <span>{i.ingredientName}</span>
                                            <span>{i.value}</span>
                                        </div>
                                    ))

                                ) : (
                                    <div>
                                        <span className="text-center p-4">
                                            مواد اولیه در دسترس نیستند.
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* left side | recipe */}
                    <div className="">
                        <h3 className="text-2xl drop-shadow-lg text-shadow-sm mb-3">طرز تهیه</h3>

                        <div className="leading-8 text-justify">
                            {data?.recipe}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )

}