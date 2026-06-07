import { parseApiError } from "@/utils/apiError"
import React, { useState } from "react"
import useDeleteCategory from "@/features/categories/hooks/useDeleteCategory"
import UpdateCategoryModal from "./updateCategoryModal";

interface CategoryItemProp {
    id: string
    name: string
}

export default function CategoryItem({ id, name }: CategoryItemProp) {

    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const { mutate: dMutate,
        isPending: dIsPending,
        isError: dIsError,
        error: dError
    } = useDeleteCategory()
    const parsedError = dIsError ? parseApiError(dError) : null;

    const onDeleteCategory = () => {
        const result = confirm("مطمئن هستید که حذف شود ؟")

        if (result) {
            dMutate(id, {
                onSuccess: () => {
                    alert("آیتم مورد نظر به درک واصل شد")
                },
                onError: (err: any) => {
                    alert(err.message)
                    console.log("message", err.message)
                    console.log("parsed", parsedError?.message)
                    console.error("Mutation Error:", err);
                }
            })
        }
    }

    return (
        <>
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="relative px-3 py-2 bg-emerald-100 border border-emerald-200 
                rounded-lg cursor-pointer transition-all duration-150 
                hover:ring ring-emerald-300">
                {name}
                {isOpen && (
                    <div className="absolute px-2 py-1 bg-emerald-50 rounded-md border 
                        left-1/2 -translate-x-1/2
                        border-emerald-200 flex items-center gap-1 text-xs -top-8.75 z-10">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-amber-500 transition-all duration-200
                        px-1.5 py-1 hover:bg-amber-400 rounded-md hover:text-white"
                        >ویرایش
                        </button>
                        <button
                            onClick={onDeleteCategory}
                            className="text-red-500 transition-all duration-200
                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                        >
                            {dIsPending ? "تأمل" : "حذف"}
                        </button>
                    </div>
                )}
            </div>

            <UpdateCategoryModal 
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                categoryId={id}
            />
        </>
    )

}
