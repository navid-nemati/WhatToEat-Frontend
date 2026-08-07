import { parseApiError } from "@/utils/apiError"
import React, { useState } from "react"
import useDeleteCategory from "@/features/categories/hooks/useDeleteCategory"
import Modal from "@/shared/components/modal";
import UpdateCategoryForm from "./UpdateCategoryForm";
import AppToast from "@/lib/toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

    const handleDelete = () => {
        dMutate(id, {
            onSuccess: () => {
                AppToast.success("آیتم مورد نظر به درک واصل شد")
            },
            onError: (err: any) => {
                console.log(err.message)
                AppToast.error(err.message)
            }
        })

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
                        {/* <button
                            onClick={onDeleteCategory}
                            className="text-red-500 transition-all duration-200
                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                        >
                            {dIsPending ? "تأمل" : "حذف"}
                        </button> */}
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <button
                                    className="text-red-500 transition-all duration-200
                                                                                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                                >
                                    حذف
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent dir="rtl">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        حذف ماده اولیه
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        آیا مطمئنی می‌خواهی این ماده را حذف کنی؟
                                        این عملیات قابل بازگشت نیست.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel
                                    onClick={() => setIsOpen(false)}
                                    >
                                        انصراف
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        disabled={dIsPending}

                                        onClick={() => { handleDelete(), setIsOpen(false) }}
                                    >
                                        {dIsPending ? "در حال حذف..." : "حذف"}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                )}
            </div>

            {/* <AlertDialog open={open} onOpenChange={setIsOpen}>
                            <AlertDialogTrigger asChild>
                                <button
                                    className="text-red-500 transition-all duration-200
                                                                                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                                    onClick={() => setIsOpen(false)}>
                                    حذف
                                </button>
                            </AlertDialogTrigger>

                            <AlertDialogContent dir="rtl">
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        حذف ماده اولیه
                                    </AlertDialogTitle>

                                    <AlertDialogDescription>
                                        آیا مطمئنی می‌خواهی این ماده را حذف کنی؟
                                        این عملیات قابل بازگشت نیست.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>

                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        انصراف
                                    </AlertDialogCancel>

                                    <AlertDialogAction
                                        disabled={dIsPending}
                                        onClick={handleDelete}
                                    >
                                        {dIsPending ? "در حال حذف..." : "حذف"}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog> */}

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
