import { parseApiError } from "@/utils/apiError"
import React, { useState } from "react"
import useDeleteCategory from "@/features/categories/hooks/useDeleteCategory"
import Modal from "@/shared/components/modal";
import UpdateCategoryForm from "./UpdateCategoryForm";
import AppToast from "@/lib/toast";

interface CategoryItemProp {
    id: string
    name: string
}

export default function CategoryItem({ id, name }: CategoryItemProp) {

    const [isOpen, setIsOpen] = useState(false)
    const [editModalOpen, setEditModalOpen] = useState(false)

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
                    //alert("آیتم مورد نظر به درک واصل شد")
                    AppToast.success("آیتم مورد نظر به درک واصل شد")
                },
                onError: (err: any) => {
                    //alert(err.message)
                    //AppToast.apiError(err)
                    AppToast.error(err.message)
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
                onFocus={() => setIsOpen(true)}
                className="relative bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-slate-700 
                hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 
                transition-all duration-200 cursor-pointer flex items-center">
                {name}
                {isOpen && (
                    <div className="absolute px-2 py-1 bg-white rounded-md border 
                        left-1/2 -translate-x-1/2
                        border-slate-200 flex items-center gap-1 text-xs -top-8.75 z-10">
                        <button
                            onClick={() => setEditModalOpen(true)}
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

            <Modal
                open={editModalOpen}
                onOpenChange={setEditModalOpen}
                title="ویرایش دسته بندی"
                size="xs"
            >
                <UpdateCategoryForm
                    categoryName={name}
                    categoryId={id}
                    onSuccess={() => setEditModalOpen(false)}
                />
            </Modal>
        </>
    )

}
