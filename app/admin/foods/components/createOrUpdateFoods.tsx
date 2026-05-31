"use client"

import SelectCategory from "@/components/Category/selectCategory"
import { useCreateFood } from "@/react-query/Food/useCreateFood"
import { useUpdateFood } from "@/react-query/Food/useUpdateFood"
import { UpdateFoodFormData, UpdateFoodSchema } from "@/schemas/UpdateFood.schema"
import { UpdateIngredientFormData, UpdateIngredientSchema } from "@/schemas/UpdateIngredient.schemas"
import { parseApiError } from "@/utils/apiError"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField } from "@mui/material"
import { SetStateAction, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

interface props {
    foodId: string
    defaultFoodName: string
    //categoryId: string
    //setCategoryId: (value: SetStateAction<string>) => void
    isEditingMode: "Edit" | "Create" | "close"
    setIsEditingMode: (value: SetStateAction<"Edit" | "Create" | "close">) => void
}

export default function CreateOrUpdateFoods({
    foodId,
    defaultFoodName,
    //categoryId,
    //setCategoryId,
    isEditingMode,
    setIsEditingMode,
}: props) {

    // This id come from selectIngredient Component
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [categoryIdError, setCategoryIdError] = useState("");

    const handleSlection = (id: string) => {
        setSelectedCategoryId(id)
        console.log("ID دریافت شده در والد:", id);
    }

    const { mutate: updateFoodMutate,
        isPending: updateFoodIsPending,
        isError: updateFoodIsError,
        error: updateFoodError
    } = useUpdateFood()

    const parsedError = updateFoodIsError ? parseApiError(updateFoodError) : null;

    useEffect(() => {
        if (defaultFoodName) {
            reset({
                name: defaultFoodName,
            });
        }
    }, [defaultFoodName]); // هر وقت defaultFoodName تغییر کرد، فرم آپدیت میشه


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateFoodFormData>({
        resolver: zodResolver(UpdateFoodSchema),
        defaultValues: {
            name: defaultFoodName
        }
    })

    const onSubmit = (data: UpdateFoodFormData) => {
        updateFoodMutate({
            id: foodId,
            categoryId: selectedCategoryId,
            name: data.name,
        }, {
            onSuccess: () => {
                reset()
                //setCategoryId("")
                setSelectedCategoryId("")
                setIsEditingMode("close")
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
                console.log("سلااااااام دیس ایز ارور",parsedError?.message)
                if (selectedCategoryId == "")
                    setCategoryIdError("لطفا یک دسته بندی انتخاب کنید")
            }
        })
    }

    // Create ------------------

    const {
        mutate: createFoodMutate,
        isPending: createFoodIsPendig,
        isError: createFoodIsError,
        error: createFoodError
    } = useCreateFood()

    const onCreateSubmit = (data: UpdateFoodFormData) => {
        createFoodMutate({
            name: data.name,
            categoryId: selectedCategoryId,
        }, {
            onSuccess: () => {
                reset()
                setSelectedCategoryId("")
                setIsEditingMode("close")
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
                if (selectedCategoryId == "")
                    setCategoryIdError("لطفا یک دسته بندی انتخاب کنید")
            }
        })
    }

    return (
        <div className="">
            {isEditingMode == "Edit" && (
                <div
                    className="absolute flex items-center justify-center inset-0
                                            z-40 bg-black/50">
                    <div className="bg-emerald-50 rounded-lg w-96 z-50
                                                        border border-gray-400 shadow-md
                                                        py-8 px-10">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-4 items-center">
                            <span className="text-xl">ویرایش غذا</span>

                            <TextField style={{ width: "100%" }} size="small"
                                placeholder="نام غذا :"
                                variant="outlined"
                                {...register("name")}
                                error={!!parsedError?.fieldErrors?.Name}
                                helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                            />

                            {errors.name && (
                                <p className="text-red-400">{errors.name.message}</p>
                            )}

                            <SelectCategory
                                onSelect={handleSlection}
                            />

                            <div className="text-red-400">{categoryIdError}</div>

                            <div className="flex items-center gap-2 w-full">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || updateFoodIsPending}
                                    className="bg-blue-400 text-white px-4 py-1.5
                                                                    rounded-lg transition-all duration-200 hover:scale-105
                                                                    shadow-md hover:shadow-xl"
                                >

                                    {isSubmitting || updateFoodIsPending ? "در حال ارسال..." : "ثبت"}
                                </button>

                                <button
                                    onClick={() => {
                                        setIsEditingMode("close"),
                                        reset(),
                                        setCategoryIdError("")
                                    }}
                                    className="bg-red-500 text-white px-3 py-1.5 rounded-lg
                                                                            transition-all duration-200 hover:scale-105
                                                                            shadow-md hover:shadow-xl"
                                >انصراف
                                </button>
                            </div>

                            {updateFoodIsError && (
                                <p className="text-red-500 text-center">
                                    {(updateFoodError as Error).message}
                                </p>
                            )}

                            {parsedError?.message && (
                                <p className="text-red-500 text-center">
                                    {parsedError.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}
            {isEditingMode == "Create" && (
                <div>
                    <div
                        className="fixed flex items-center justify-center inset-0
                                            z-40 bg-black/50">
                        <div className="bg-emerald-50 rounded-lg w-96 z-50 border 
                        border-gray-400 shadow-md py-8 px-10">
                            <form
                                onSubmit={handleSubmit(onCreateSubmit)}
                                className="flex flex-col gap-4 items-center">
                                <span className="text-xl">افزودن غذا</span>

                                <TextField style={{ width: "100%" }} size="small"
                                    placeholder="نام غذا :"
                                    variant="outlined"
                                    {...register("name")}
                                    error={!!parsedError?.fieldErrors?.Name}
                                    helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                                />

                                {errors.name && (
                                    <p className="text-red-400">{errors.name.message}</p>
                                )}

                                <SelectCategory
                                    onSelect={handleSlection}
                                />

                                <div className="text-red-400">{categoryIdError}</div>
                                
                                <div className="flex items-center gap-2 w-full">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || createFoodIsPendig}
                                        className="bg-blue-400 text-white px-4 py-1.5
                                                                    rounded-lg transition-all duration-200 hover:scale-105
                                                                    shadow-md hover:shadow-xl"
                                    >

                                        {isSubmitting || createFoodIsPendig ? "در حال ارسال..." : "ثبت"}
                                    </button>

                                    <button
                                        onClick={() => {
                                        setIsEditingMode("close"),
                                        reset(),
                                        setCategoryIdError("")
                                    }}
                                        className="bg-red-500 text-white px-3 
                                        py-1.5 rounded-lg transition-all duration-200 
                                        hover:scale-105 shadow-md hover:shadow-xl"
                                    >انصراف
                                    </button>
                                </div>

                                {createFoodIsError && (
                                    <p className="text-red-500 text-center">
                                        {(createFoodError as Error).message}
                                    </p>
                                )}

                                {parsedError?.message && (
                                    <p className="text-red-500 text-center">
                                        {parsedError.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}