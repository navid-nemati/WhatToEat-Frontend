"use client"

import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";
import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import { Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FoodDetailProp {
    params: Promise<{ id: string }>
}

export default function FoodDetail({ params }: FoodDetailProp) {

    const [resolvedId, setResolvedId] = useState<string>('');

    useEffect(() => {
        const resolveParams = async () => {
            const result = await params;
            setResolvedId(result.id);
        };
        resolveParams();
    }, [params]);

    const {
        data,
        isLoading,
        isError,
        error,
    } = useGetFoodDetail(resolvedId);

    const {
        data: ingredientData,
        isLoading: ingredientIsLoading,
        isError: ingredientIsError,
        error: ingredientError,
    } = UseGetAllIngredientOfFood(resolvedId);


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
                <div className="pt-30 flex lg:flex-row flex-col gap-10">
                    {/* right side */}
                    <div className="flex flex-col">
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

                        <div className="text-xl">{data?.name}</div>
                        <div className="text-xl">دسته بندی: {data?.categoryName}</div>

                        {/* Ingredients List */}
                        <table className="min-w-64 mt-6 rounded-lg overflow-hidden ring ring-emerald-300 border-collapse">
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
                            {/* <tbody>
                                {ingredientData && ingredientData.length > 0 ? (
                                    ingredientData.map((i) => (
                                        <tr
                                            key={i.id}
                                            className="bg-emerald-50/60 hover:bg-emerald-100/30 transition-colors divide-x divide-emerald-300 select-none"
                                        >
                                            <th
                                                scope="row"
                                                className="px-6 py-3 whitespace-nowrap  text-right"
                                            >
                                                {i.ingredientName}
                                            </th>
                                            <td className="px-6 py-3  text-right">
                                                <span className="">{i.value}</span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <div>
                                        {ingredientIsLoading == false && (
                                            <div className="p-2">مواد اولیه در دسترس نیستند.</div>
                                        )}
                                    </div>
                                )}
                                {ingredientIsLoading && (
                                    <div>در حال بارگذاری...</div>
                                )}
                            </tbody> */}
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
                        </table>
                    </div>

                    {/* left side */}
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