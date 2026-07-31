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

// import CreateOrUpdateIOF from "@/app/admin/foods/components/createOrUpdateIOF";
// import Container from "@/shared/components/container";
// import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";
// import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
// import { useEffect, useState } from "react";
// import FoodInfoCard from "@/features/foods/components/FoodInfoCard";
// import EditFood from "@/features/foods/components/editFood";
// import LoadingComponent from "@/shared/components/loading";
// import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";
// import { useParams } from "next/navigation";

// interface FoodDetailProp {
//     params: Promise<{ id: string }>
// }

// export default function AdminFoodDetail({ params }: FoodDetailProp) {
//     const { id } = useParams<{ id: string }>();
//     const [isEditing, setIsEditing] = useState(false)
//     const [ingredientOfFoodId, setIngredientOfFoodId] = useState("");
//     const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")
//     const [defaultIngredientValue, setDefaultIngredientValue] = useState("")

//     const { data, isLoading, isError, error } = useGetFoodDetail(id);
//     const { data: ingredientData, isLoading: ingredientIsLoading } = UseGetAllIngredientOfFood(id);
//     const { mutate: deleteMutate } = UseDeleteIngredientOfFood()

//     const onDeleteSubmit = (id: string) => {
//         if (window.confirm("آیا از حذف این ماده اولیه مطمئن هستید؟")) {
//             deleteMutate(id, {
//                 onSuccess: () => alert("ماده اولیه حذف شد"),
//                 onError: (err: any) => console.error("Delete Error:", err)
//             })
//         }
//     }

//     if (isLoading) return <LoadingComponent />

//     if (isError) {
//         return (
//             <div className="flex items-center justify-center p-10 text-red-500 font-bold">
//                 {(error as Error).message}
//             </div>
//         );
//     }

//     if (!data) {
//         return <div className="text-center p-10 text-gray-500">اطلاعات غذا یافت نشد.</div>;
//     }

//     return (
//         <Container>
//             <div className="pt-30 flex flex-col items-start gap-2">
//                 {/* اطلاعات غذا */}
//                 <FoodInfoCard food={data} />

//                 <button className="flex-1 px-3 py-2 text-sm rounded-lg bg-amber-50 text-amber-600 ring-1 ring-amber-200 hover:bg-amber-100 transition-all">
//                     ویرایش اطلاعات غذا
//                 </button>

//                 <EditFood food={data} />

//                 {/* جدول مواد اولیه */}
//                 <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//                     <table className="w-full">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">ماده اولیه</th>
//                                 <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">مقدار مورد نیاز</th>
//                                 {isEditing && (
//                                     <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">عملیات</th>
//                                 )}
//                             </tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-100">
//                             {ingredientIsLoading ? (
//                                 <tr>
//                                     <td colSpan={isEditing ? 3 : 2} className="text-center py-4 text-gray-500">در حال بارگذاری...</td>
//                                 </tr>
//                             ) : ingredientData && ingredientData.length > 0 ? (
//                                 ingredientData.map((i) => (
//                                     <tr key={i.id} className="hover:bg-gray-50 transition-colors">
//                                         <td className="px-6 py-4 whitespace-nowrap text-gray-800">{i.ingredientName}</td>
//                                         <td className="px-6 py-4 whitespace-nowrap text-gray-600">{i.value}</td>
//                                         {isEditing && (
//                                             <td className="px-6 py-4 text-center">
//                                                 <div className="flex gap-2 justify-center">
//                                                     <button
//                                                         onClick={() => {
//                                                             setIngredientOfFoodId(i.id);
//                                                             setIsEditingMode("Edit");
//                                                             setDefaultIngredientValue(i.value)
//                                                         }}
//                                                         className="text-amber-600 px-3 py-1 hover:bg-amber-50 rounded-md text-xs ring-1 ring-amber-200"
//                                                     >
//                                                         ویرایش
//                                                     </button>
//                                                     <button
//                                                         onClick={() => onDeleteSubmit(i.id)}
//                                                         className="text-red-600 px-3 py-1 hover:bg-red-50 rounded-md text-xs ring-1 ring-red-200"
//                                                     >
//                                                         حذف
//                                                     </button>
//                                                 </div>
//                                             </td>
//                                         )}
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     {/* اصلاح مشکل ساختاری جدول: استفاده از td و colSpan به جای div */}
//                                     <td colSpan={isEditing ? 3 : 2} className="text-center py-6 text-gray-500">
//                                         هیچ ماده اولیه‌ای برای این غذا ثبت نشده است.
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* دکمه‌های مدیریت مواد اولیه */}
//                 <div className="flex gap-4 mt-6">
//                     <button
//                         onClick={() => setIsEditing(!isEditing)}
//                         className={`px-4 py-2 rounded-lg font-medium transition-all ${isEditing ? 'bg-red-50 text-red-600 ring-1 ring-red-200' : 'bg-blue-50 text-blue-600 ring-1 ring-blue-200'}`}
//                     >
//                         {isEditing ? 'خروج از حالت ویرایش' : 'ویرایش مواد اولیه'}
//                     </button>

//                     {isEditing && (
//                         <button
//                             className="px-4 py-2 rounded-lg font-medium bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 transition-all hover:bg-emerald-100"
//                             onClick={() => {
//                                 setIngredientOfFoodId("")
//                                 setDefaultIngredientValue("")
//                                 setIsEditingMode("Create")
//                             }}
//                         >
//                             + افزودن ماده اولیه
//                         </button>
//                     )}
//                 </div>

//                 <CreateOrUpdateIOF
//                     foodId={id}
//                     ingredientOfFoodId={ingredientOfFoodId}
//                     defaultIngredientValue={defaultIngredientValue}
//                     setIngredientOfFoodId={setIngredientOfFoodId}
//                     isEditingMode={isEditingMode}
//                     setIsEditingMode={setIsEditingMode}
//                 />
//             </div>
//         </Container>
//     )
// }

import { useState } from "react";
import { useParams } from "next/navigation";

import Container from "@/shared/components/container";
import LoadingComponent from "@/shared/components/loading";

import useGetFoodDetail from "@/features/foods/hooks/useGetFoodDetail";

import UseGetAllIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useGetAllIngredientOfFood";
import UseDeleteIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useDeleteIngredientOfFood";

import FoodInfoCard from "@/features/foods/components/FoodInfoCard";
import EditFood from "@/features/foods/components/editFood";

import HandleIngredientOfFood from "@/features/ingredientsOfFoods/components/handleIngredientOfFood";
import Modal from "@/shared/components/modal";
import CreateIngredientOfFoodModal from "@/features/ingredientsOfFoods/components/CreateIngredientOfFood";

type IngredientModalMode = "create" | "edit" | null;

interface SelectedIngredientOfFood {
    id: string;
    ingredientId: string;
    ingredientName: string;
    value: string;
}

export default function AdminFoodDetail() {
    const { id } = useParams<{ id: string }>();

    const [ingredientModalMode, setIngredientModalMode] =
        useState<IngredientModalMode>(null);

    const [selectedIngredient, setSelectedIngredient] =
        useState<SelectedIngredientOfFood | null>(null);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    const {
        data: food,
        isLoading: foodIsLoading,
        isError: foodIsError,
        error: foodError,
    } = useGetFoodDetail(id);

    // const {
    //     data: ingredientData,
    //     isLoading: ingredientsIsLoading,
    //     isError: ingredientsIsError,
    //     error: ingredientsError,
    // } = UseGetAllIngredientOfFood(id);

    // const {
    //     mutate: deleteIngredient,
    //     isPending: deleteIsPending,
    // } = UseDeleteIngredientOfFood();

    const openCreateModal = () => {
        setSelectedIngredient(null);
        setIngredientModalMode("create");
    };

    const openEditModal = (ingredient: SelectedIngredientOfFood) => {
        setSelectedIngredient(ingredient);
        setIngredientModalMode("edit");
    };

    const closeIngredientModal = () => {
        setIngredientModalMode(null);
        setSelectedIngredient(null);
    };

    // const handleDeleteIngredient = (ingredientOfFoodId: string) => {
    //     const confirmed = window.confirm(
    //         "آیا از حذف این ماده اولیه مطمئن هستید؟"
    //     );

    //     if (!confirmed) {
    //         return;
    //     }

    //     deleteIngredient(ingredientOfFoodId, {
    //         onSuccess: () => {
    //             alert("ماده اولیه با موفقیت حذف شد");
    //         },

    //         onError: (error: unknown) => {
    //             console.error("Delete ingredient error:", error);
    //         },
    //     });
    // };

    if (foodIsLoading) {
        return <LoadingComponent />;
    }

    if (foodIsError) {
        return (
            <div className="flex items-center justify-center p-10 font-bold text-red-500">
                {(foodError as Error).message}
            </div>
        );
    }

    if (!food) {
        return (
            <div className="p-10 text-center text-gray-500">
                اطلاعات غذا پیدا نشد.
            </div>
        );
    }

    return (
        <Container>
            <div className="flex flex-col gap-6 pt-30">
                {/* اطلاعات فعلی غذا */}
                <FoodInfoCard food={food} />

                {/* فرم ویرایش اطلاعات غذا */}
                <EditFood food={food} />

                {/* بخش مواد اولیه */}
                <section className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                    <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">
                                مواد اولیه
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                مواد اولیه و مقدار مورد نیاز این غذا را مدیریت
                                کنید.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsCreateModalOpen(true)}
                            className="rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                        >
                            + افزودن ماده اولیه
                        </button>
                    </div>

                    <HandleIngredientOfFood foodId={id} />

                </section>

                <Modal
                    open={isCreateModalOpen}
                    onOpenChange={setIsCreateModalOpen}
                    title="افزدون ماده اولیه"
                    size="xs">
                    <CreateIngredientOfFoodModal
                        foodId={id}
                        onSuccess={() => setIsCreateModalOpen(false)} />
                </Modal>

                {/* <CreateOrUpdateIOF
                    foodId={id}
                    mode={ingredientModalMode}
                    ingredientOfFoodId={selectedIngredient?.id ?? ""}
                    defaultIngredientId={
                        selectedIngredient?.ingredientId ?? ""
                    }
                    defaultIngredientValue={
                        selectedIngredient?.value ?? ""
                    }
                    onClose={closeIngredientModal}
                /> */}
            </div>
        </Container>
    );
}