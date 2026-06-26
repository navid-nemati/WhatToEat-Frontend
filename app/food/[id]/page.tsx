"use client"

import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";
import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import { useEffect, useState } from "react";

interface FoodDetailProp {
    params: Promise<{ id: string }>
}

export default function FoodDetail({ params }: FoodDetailProp) {

    const [resolvedId, setResolvedId] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false)
    //const [isEditingIngredientItem, setIsEditingIngredientItem] = useState(false)

    const [ingredientOfFoodId, setIngredientOfFoodId] = useState("");

    // this is for CreateOrUpdateIOF component, the description is there
    const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")

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

    const { mutate: deleteMutate,
        isPending: deleteIsPending,
        isError: deleteIsError,
        error: deleteError
    } = UseDeleteIngredientOfFood()

    const onDeleteSubmit = (id: string) => {
        deleteMutate(id, {
            onSuccess: () => {
                alert("آیتم مورد نظر رفت تو چاه دیتابیس")
            },
            onError: (err: any) => {
                alert("Delete Mutation Error : " + err)
                console.error("Delete Mutation Error:", err);
            }
        })
    }

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
                <div className="pt-30 flex flex-col items-start gap-2">
                    <div className="text-xl">{data?.name}</div>
                    <div className="text-xl">دسته بندی: {data?.categoryName}</div>

                    {/* Ingredients List */}

                    {/* <table className="min-w-64 mt-6 rounded-lg overflow-hidden border border-emerald-300">
                        <thead className="bg-emerald-50">
                            <tr className="divide-x border-b border-emerald-950/20 divide-emerald-950/20">
                                <th scope="col" className="px-6 py-2 rounded-tr-lg">
                                    ماده اولیه
                                </th>

                                <th scope="col" className="px-6 py-2 rounded-tl-lg">
                                    مقدار مورد نیاز
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-emerald-950/20">
                            {ingredientData && ingredientData.length > 0 ? (
                                ingredientData.map(i => (

                                    <tr className="bg-emerald-100/60 divide-x divide-emerald-950/20">
                                        <th scope="row" className="px-6 py-3 whitespace-nowrap ">
                                            {i.ingredientName}
                                        </th>

                                        <td className="px-6 py-3">
                                            {i.value}
                                            {isEditing && (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            //setIsEditingIngredientItem(true)
                                                            setIngredientOfFoodId(i.id)
                                                            setIsEditingMode("Edit")
                                                        }}
                                                        className="text-amber-500 transition-all duration-200
                                            px-1.5 py-1 hover:bg-amber-400 rounded-md hover:text-white
                                            text-xs ring ring-amber-300"
                                                    >ویرایش
                                                    </button>
                                                    <button

                                                        className="text-red-500 transition-all duration-200
                                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white
                                            text-xs ring ring-red-300"
                                                    >حذف
                                                    </button>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div>
                                    {ingredientIsLoading == false && (
                                        <div>مواد اولیه در دسترس نیست.</div>
                                    )}
                                </div>
                            )}
                            {ingredientIsLoading && (
                                <div>در حال بارگذاری...</div>
                            )}


                        </tbody>
                    </table> */}

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
                        <tbody>
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
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )

}