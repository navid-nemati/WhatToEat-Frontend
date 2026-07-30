"use client"

// import CreateOrUpdateIOF from "@/app/admin/foods/components/createOrUpdateIOF";
// import Container from "@/shared/components/container";
// import LoadingComponent from "@/shared/components/loading";
// import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
// import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";
// import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
// import { useEffect, useState } from "react";

// interface FoodDetailProp {
//     params: Promise<{ id: string }>
// }

// export default function AdminFoodDetail({ params }: FoodDetailProp) {

//     const [resolvedId, setResolvedId] = useState<string>('');
//     const [isEditing, setIsEditing] = useState(false)
//     //const [isEditingIngredientItem, setIsEditingIngredientItem] = useState(false)

//     const [ingredientOfFoodId, setIngredientOfFoodId] = useState("");

//     // this is for CreateOrUpdateIOF component, the description is there
//     const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")

//     const [defaultIngredientValue, setDefaultIngredientValue] = useState("")

//     useEffect(() => {
//         const resolveParams = async () => {
//             const result = await params;
//             setResolvedId(result.id);
//         };
//         resolveParams();
//     }, [params]);

//     const {
//         data,
//         isLoading,
//         isError,
//         error,
//     } = useGetFoodDetail(resolvedId);

//     const {
//         data: ingredientData,
//         isLoading: ingredientIsLoading,
//         isError: ingredientIsError,
//         error: ingredientError,
//     } = UseGetAllIngredientOfFood(resolvedId);

//     const { mutate: deleteMutate,
//         isPending: deleteIsPending,
//         isError: deleteIsError,
//         error: deleteError
//     } = UseDeleteIngredientOfFood()

//     const onDeleteSubmit = (id: string) => {
//         deleteMutate(id, {
//             onSuccess: () => {
//                 alert("آیتم مورد نظر به فنا رفت")
//                 //alert("آیتم مورد نظر رفت تو چاه دیتابیس")
//             },
//             onError: (err: any) => {
//                 //alert("Delete Mutation Error : " + err)
//                 console.error("Delete Mutation Error:", err);
//             }
//         })
//     }

//     if (isLoading) return (
//         <LoadingComponent />
//     )

//     if (isError) {
//         return (
//             <div className="absolute inset-0 z-10 flex items-center justify-center">
//                 <p className="text-red-500 text-center p-4">
//                     {(error as Error).message}
//                     {/* {toast.error((error as Error).message)} */}
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className="">
//             <Container>
//                 <div className="pt-30 flex flex-col items-start gap-2">
//                     <div className="text-xl">{data?.name}</div>
//                     <div className="text-xl">دسته بندی: {data?.categoryName}</div>

//                     {/* Ingredients List */}

//                     <table className="min-w-64 mt-6 select-none rounded-lg overflow-hidden ring ring-emerald-300 border-collapse">
//                         <thead className="bg-emerald-50">
//                             <tr className="divide-x">
//                                 <th scope="col" className="px-6 py-2 text-right border-b border-emerald-300">
//                                     ماده اولیه
//                                 </th>
//                                 <th scope="col" className="px-6 py-2 text-right border-b border-emerald-300">
//                                     مقدار مورد نیاز
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {ingredientData && ingredientData.length > 0 ? (
//                                 ingredientData.map((i) => (
//                                     <tr
//                                         key={i.id}
//                                         className="bg-emerald-50/60 hover:bg-emerald-100/30 transition-colors divide-x divide-emerald-300"
//                                     >
//                                         <th
//                                             scope="row"
//                                             className="px-6 py-3 whitespace-nowrap  text-right"
//                                         >
//                                             {i.ingredientName}
//                                         </th>
//                                         <td className="px-6 py-3  text-right">
//                                             <span className="">{i.value}</span>
//                                             {isEditing && (
//                                                 <div className="flex gap-2 mt-2">
//                                                     <button
//                                                         onClick={() => {
//                                                             setIngredientOfFoodId(i.id);
//                                                             setIsEditingMode("Edit");
//                                                             setDefaultIngredientValue(i.value)
//                                                         }}
//                                                         className="text-amber-500 transition-all duration-200 px-1.5 py-1 hover:bg-amber-400 rounded-md hover:text-white text-xs ring ring-amber-300"
//                                                     >
//                                                         ویرایش
//                                                     </button>
//                                                     <button
//                                                         onClick={() => { onDeleteSubmit(i.id), console.log("okkkkkkkkkkkkkkk!!!!!!!!") }}
//                                                         className="text-red-500 transition-all duration-200 px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white text-xs ring ring-red-300"
//                                                     >
//                                                         حذف
//                                                     </button>
//                                                 </div>
//                                             )}
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <div>
//                                     {ingredientIsLoading == false && (
//                                         <div className="p-2">مواد اولیه در دسترس نیستند.</div>
//                                     )}
//                                 </div>
//                             )}
//                             {ingredientIsLoading && (
//                                 <div>در حال بارگذاری...</div>
//                             )}
//                         </tbody>
//                     </table>

//                     <button
//                         onClick={() => setIsEditing(!isEditing)}
//                         className={`my-4 text-lg ${isEditing ? 'text-red-500' : 'text-blue-500'} text-shadow-md transition-all duration-150 hover:scale-105 hover:text-shadow-md`}>
//                         {isEditing ? 'خروج از ویرایش' : 'ویرایش مواد اولیه'}
//                     </button>

//                     {isEditing && (
//                         <button
//                             className="text-emerald-500 text-shadow-sm text-lg
//                         transition-all duration-150 hover:scale-105 hover:text-shadow-md"
//                             onClick={() => setIsEditingMode("Create")}
//                         >
//                             افزودن ماده اولیه
//                         </button>
//                     )}

//                     <CreateOrUpdateIOF
//                         foodId={resolvedId}
//                         ingredientOfFoodId={ingredientOfFoodId}
//                         defaultIngredientValue={defaultIngredientValue}
//                         setIngredientOfFoodId={setIngredientOfFoodId}
//                         isEditingMode={isEditingMode}
//                         setIsEditingMode={setIsEditingMode}
//                     />
//                 </div>
//             </Container>
//         </div>
//     )

// }

//"use client"

import CreateOrUpdateIOF from "@/app/admin/foods/components/createOrUpdateIOF";
import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";
import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";
import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
import { useEffect, useState } from "react";

interface FoodDetailProp {
    params: Promise<{ id: string }>
}

export default function AdminFoodDetail({ params }: FoodDetailProp) {
    const [resolvedId, setResolvedId] = useState<string>('');
    const [isEditing, setIsEditing] = useState(false)
    const [ingredientOfFoodId, setIngredientOfFoodId] = useState("");
    const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")
    const [defaultIngredientValue, setDefaultIngredientValue] = useState("")

    useEffect(() => {
        const resolveParams = async () => {
            const result = await params;
            setResolvedId(result.id);
        };
        resolveParams();
    }, [params]);

    const { data, isLoading, isError, error } = useGetFoodDetail(resolvedId);
    const { data: ingredientData, isLoading: ingredientIsLoading } = UseGetAllIngredientOfFood(resolvedId);
    const { mutate: deleteMutate } = UseDeleteIngredientOfFood()

    const onDeleteSubmit = (id: string) => {
        if (window.confirm("آیا از حذف این ماده اولیه مطمئن هستید؟")) {
            deleteMutate(id, {
                onSuccess: () => alert("ماده اولیه حذف شد"),
                onError: (err: any) => console.error("Delete Error:", err)
            })
        }
    }

    if (isLoading) return <LoadingComponent />

    if (isError) {
        return (
            <div className="flex items-center justify-center p-10 text-red-500 font-bold">
                {(error as Error).message}
            </div>
        );
    }

    return (
        <Container>
            <div className="pt-30 flex flex-col items-start gap-2">
                {/* اطلاعات غذا */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full mb-6">
                    <div className="text-2xl font-bold text-gray-800">{data?.name}</div>
                    <div className="text-gray-500 mt-1">دسته بندی: <span className="text-emerald-600 font-medium">{data?.categoryName}</span></div>
                </div>

                {/* جدول مواد اولیه */}
                <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">ماده اولیه</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">مقدار مورد نیاز</th>
                                {isEditing && (
                                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">عملیات</th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {ingredientIsLoading ? (
                                <tr>
                                    <td colSpan={isEditing ? 3 : 2} className="text-center py-4 text-gray-500">در حال بارگذاری...</td>
                                </tr>
                            ) : ingredientData && ingredientData.length > 0 ? (
                                ingredientData.map((i) => (
                                    <tr key={i.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-800">{i.ingredientName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{i.value}</td>
                                        {isEditing && (
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center">
                                                    <button
                                                        onClick={() => {
                                                            setIngredientOfFoodId(i.id);
                                                            setIsEditingMode("Edit");
                                                            setDefaultIngredientValue(i.value)
                                                        }}
                                                        className="text-amber-600 px-3 py-1 hover:bg-amber-50 rounded-md text-xs ring-1 ring-amber-200"
                                                    >
                                                        ویرایش
                                                    </button>
                                                    <button
                                                        onClick={() => onDeleteSubmit(i.id)}
                                                        className="text-red-600 px-3 py-1 hover:bg-red-50 rounded-md text-xs ring-1 ring-red-200"
                                                    >
                                                        حذف
                                                    </button>
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    {/* اصلاح مشکل ساختاری جدول: استفاده از td و colSpan به جای div */}
                                    <td colSpan={isEditing ? 3 : 2} className="text-center py-6 text-gray-500">
                                        هیچ ماده اولیه‌ای برای این غذا ثبت نشده است.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* دکمه‌های مدیریت مواد اولیه */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${isEditing ? 'bg-red-50 text-red-600 ring-1 ring-red-200' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-200'}`}
                    >
                        {isEditing ? 'خروج از حالت ویرایش' : 'ویرایش مواد اولیه'}
                    </button>

                    {isEditing && (
                        <button
                            className="px-4 py-2 rounded-lg font-medium bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 transition-all hover:bg-emerald-100"
                            onClick={() => {
                                setIngredientOfFoodId("")
                                setDefaultIngredientValue("")
                                setIsEditingMode("Create")
                            }}
                        >
                            + افزودن ماده اولیه
                        </button>
                    )}
                </div>

                <CreateOrUpdateIOF
                    foodId={resolvedId}
                    ingredientOfFoodId={ingredientOfFoodId}
                    defaultIngredientValue={defaultIngredientValue}
                    setIngredientOfFoodId={setIngredientOfFoodId}
                    isEditingMode={isEditingMode}
                    setIsEditingMode={setIsEditingMode}
                />
            </div>
        </Container>
    )
}