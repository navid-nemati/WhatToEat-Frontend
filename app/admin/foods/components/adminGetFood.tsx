"use client"

// import LoadingComponent from "@/shared/components/loading";
// import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
// import Link from "next/link";
// import { useState } from "react";
// import CreateOrUpdateFoods from "./createOrUpdateFoods";
// import { useDeleteFood } from "@/features/foods/hooks/useDeleteFood";

// export default function AdminGetFoods() {

//     const [foodId, setFoodId] = useState("")
//     const [defaultFoodName, setDefaultFoodName] = useState("")
//     const [isEditing, setIsEditing] = useState(false)
//     const [categoryId, setCategoryId] = useState("");
//     const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")

//     const {
//         data,
//         isLoading,
//         isError,
//         error
//     } = useGetAllFoods()

//     const { mutate: deleteMutate,
//             isPending: deleteIsPending,
//             isError: deleteIsError,
//             error: deleteError
//         } = useDeleteFood()
    
//         const onDeleteSubmit = (id: string) => {
//             deleteMutate(id, {
//                 onSuccess: () => {
//                     alert("آیتم مورد نظر به فنا رفت")
//                     //alert("آیتم مورد نظر رفت تو چاه دیتابیس")
//                 },
//                 onError: (err: any) => {
//                     //alert("Delete Mutation Error : " + err)
//                     console.error("Delete Mutation Error:", err);
//                 }
//             })
//         }

//     //const parsedError = isError ? parseApiError(error) : null;

//     if (isLoading) return (
//         <LoadingComponent />
//     )


//     if (isError) {
//         return (
//             <div className="absolute inset-0 z-10 flex items-center justify-center">
//                 <p className="text-red-500 text-center p-4">
//                     {(error as Error).message}
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <div className="">
//             <div className="w-full grid grid-cols-4 gap-4 items-center">

//                 <button
//                     className="bg-emerald-500 rounded-lg text-shadow-sm text-2xl my-10
//                     text-white px-3 py-2 ring ring-emerald-300 hover:ring-3
//                     transition-all duration-150 hover:scale-105 hover:text-shadow-md
//                     h-full"
//                     onClick={() => setIsEditingMode("Create")}
//                 >
//                     افزودن غذای جدید
//                 </button>

//                 {data?.map(food => (
//                     <Link
//                         key={food.id}
//                         href={`/admin/foods/${food.id}`}
//                         className="w-full px-4 py-3 rounded-xl
//                             bg-emerald-200/60 border border-emerald-400/60
//                             backdrop-blur-lg transition-all duration-200 shadow-xs 
//                             hover:scale-103 hover:shadow-sm hover:ring
//                             ring-emerald-300">
//                         <div className="flex flex-col gap-2 text-black">
//                             <div className="text-xl
//                                     text-shadow-xs text-shadow-stone-500">
//                                 {food.name}
//                             </div>
//                             <div><span className="">دسته بندی: </span><span className="text-shadow-xs text-shadow-primary-dark">{food.categoryName}</span></div>
//                             <div className="flex items-center gap-1.5 mt-2">
//                                 <button
//                                     onClick={(e) => {
//                                         e.preventDefault()
//                                         setFoodId(food.id)
//                                         setIsEditingMode("Edit");
//                                         setDefaultFoodName(food.name)
//                                     }
//                                     }
//                                     className="px-2 py-1 text-sm rounded-lg transition-all duration-200 bg-amber-400 ring ring-amber-500 text-white hover:bg-amber-500">
//                                     ویرایش
//                                 </button>
//                                 <button
//                                 onClick={(e) => {
//                                     e.preventDefault()
//                                     onDeleteSubmit(food.id)
//                                 }}
//                                 className="px-2 py-1 text-sm rounded-lg transition-all duration-200 bg-red-400 ring ring-red-500 text-white hover:bg-red-600">
//                                     حذف
//                                 </button>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>

//             <CreateOrUpdateFoods
//                 foodId={foodId}
//                 defaultFoodName={defaultFoodName}
//                 isEditingMode={isEditingMode}
//                 setIsEditingMode={setIsEditingMode}
//             />
//         </div>
//     )
// }

//"use client"

import LoadingComponent from "@/shared/components/loading";
import { useGetAllFoods } from "@/features/foods/hooks/useGetAllFoods";
import { useState } from "react";
import CreateOrUpdateFoods from "./createOrUpdateFoods";
import { useDeleteFood } from "@/features/foods/hooks/useDeleteFood";
import Link from "next/link";

export default function AdminGetFoods() {
    const [foodId, setFoodId] = useState("")
    const [defaultFoodName, setDefaultFoodName] = useState("")
    const [isEditingMode, setIsEditingMode] = useState<"Edit" | "Create" | "close">("close")

    const { data, isLoading, isError, error } = useGetAllFoods()
    const { mutate: deleteMutate, isPending: deleteIsPending } = useDeleteFood()
    
    const onDeleteSubmit = (id: string) => {
        if (window.confirm("آیا از حذف این غذا مطمئن هستید؟")) {
            deleteMutate(id, {
                onSuccess: () => alert("آیتم مورد نظر با موفقیت حذف شد"),
                onError: (err: any) => console.error("Delete Mutation Error:", err)
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
        <div className="w-full">
            {/* دکمه ساخت غذا از گرید خارج شد تا ظاهر بهتری داشته باشد */}
            <div className="flex justify-start mb-8">
                <button
                    className="bg-emerald-500 rounded-lg text-xl text-white px-6 py-3 shadow-md hover:bg-emerald-600 transition-all duration-200 hover:scale-105"
                    onClick={() => {
                        setFoodId("")
                        setDefaultFoodName("")
                        setIsEditingMode("Create")
                    }}
                >
                    + افزودن غذای جدید
                </button>
            </div>

            {/* لیست غذاها */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data?.map(food => (
                    <Link
                        href={`/admin/foods/${food.id}`}
                        key={food.id}
                        className="w-full p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
                    >
                        <div className="flex flex-col gap-2 text-gray-800">
                            <div className="text-xl font-bold text-emerald-700">{food.name}</div>
                            <div className="text-sm text-gray-500">
                                دسته‌بندی: <span className="font-medium text-gray-700">{food.categoryName}</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                            <button
                                onClick={() => {
                                    setFoodId(food.id)
                                    setDefaultFoodName(food.name)
                                    setIsEditingMode("Edit")
                                }}
                                className="flex-1 px-3 py-2 text-sm rounded-lg bg-amber-50 text-amber-600 ring-1 ring-amber-200 hover:bg-amber-100 transition-all"
                            >
                                ویرایش
                            </button>
                            <button
                                onClick={() => onDeleteSubmit(food.id)}
                                disabled={deleteIsPending}
                                className="flex-1 px-3 py-2 text-sm rounded-lg bg-red-50 text-red-600 ring-1 ring-red-200 hover:bg-red-100 transition-all disabled:opacity-50"
                            >
                                حذف
                            </button>
                        </div>
                    </Link>
                ))}
            </div>

            <CreateOrUpdateFoods
                foodId={foodId}
                defaultFoodName={defaultFoodName}
                isEditingMode={isEditingMode}
                setIsEditingMode={setIsEditingMode}
            />
        </div>
    )
}