import { parseApiError } from "@/utils/apiError"
import { TextField } from "@mui/material"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import useUpdateCategory from "@/features/categories/hooks/useUpdateCategory"
import useDeleteCategory from "@/features/categories/hooks/useDeleteCategory"
import { UpdateCategoryFormData, UpdateCategorySchema } from "@/features/categories/schemas/UpdateCategory.schema"

interface CategoryItemProp {
    id: string
    name: string
}

export default function CategoryItem({ id, name }: CategoryItemProp) {

    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    const { mutate, isPending, isError, error } = useUpdateCategory()
    const { mutate: dMutate,
        isPending: dIsPending,
        isError: dIsError,
        error: dError
    } = useDeleteCategory()
    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateCategoryFormData>({
        resolver: zodResolver(UpdateCategorySchema),
    })

    const onSubmit = (data: UpdateCategoryFormData) => {
        console.log("Form submitted:", data);
        console.log("ID:", id);

        if (!id) {
            console.error("ID is undefined!");
            return;
        }

        mutate({ id, name: data.name }, {
            onSuccess: () => {
                reset();
                setIsEditing(false);
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
            }
        });


    }

    const onDeleteCategory = (categoryId: string) => {
        const result = confirm("مطمئن هستید که حذف شود ؟")

        if (result) {
            dMutate(id, {
                onSuccess: () => {
                    alert("آیتم مورد نظر به درک واصل شد")
                },
                onError: (err: any) => {
                    alert(err.message)
                    console.log("message", err.message)
                    console.log("error", error)
                    console.log("errors", errors)
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
                            onClick={() => onDeleteCategory(id)}
                            className="text-red-500 transition-all duration-200
                            px-1.5 py-1 hover:bg-red-400 rounded-md hover:text-white"
                        >
                            {isPending || isSubmitting ? "تأمل" : "حذف"}
                        </button>
                    </div>
                )}
            </div>

            {isEditing && (
                <div
                    className="absolute flex items-center justify-center inset-0 
                    z-40 bg-black/50">
                    <div className="bg-white rounded-lg w-96 z-50
                    border border-gray-400 shadow-md
                    py-8 px-10">

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4
                        items-center">
                            <span className="text-xl">ویرایش دسته بندی</span>
                            <TextField style={{ width: "100%" }} size="small"
                                placeholder="نام دسته بندی"
                                variant="outlined"
                                {...register("name")}
                                error={!!parsedError?.fieldErrors?.Name}
                                helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                            />
                            {errors.name && (
                                <p className="text-red-400">{errors.name.message}</p>
                            )}
                            <div className="flex items-center gap-2 w-full">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || isPending}
                                    className="bg-blue-400 text-white px-4 py-1.5 
                                rounded-lg transition-all duration-200 hover:scale-105
                                shadow-md hover:shadow-xl"
                                >

                                    {isSubmitting || isPending ? "در حال ارسال..." : "ثبت"}
                                </button>

                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="bg-red-500 text-white px-3 py-1.5 rounded-lg
                                        transition-all duration-200 hover:scale-105
                                        shadow-md hover:shadow-xl"
                                >انصراف
                                </button>
                            </div>

                            {isError && (
                                <p className="text-sm text-red-500 text-center">
                                    {(error as Error).message}
                                </p>
                            )}

                            {parsedError?.message && (
                                <p className="text-sm text-red-500 text-center">
                                    {parsedError.message}
                                </p>
                            )}
                        </form>


                    </div>
                </div>
            )}

        </>
    )

}
