"use client"

import SelectIngredient from "@/features/ingredients/components/selectIngredient"
import UseCreateIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useCreateIngredientOfFood"
import UseUpdateIngredientOfFood from "@/features/ingredientsOfFoods/hooks/useUpdateIngredientOfFood"
import { UpdateIngredientFormData, UpdateIngredientSchema } from "@/features/ingredientsOfFoods/schemas/UpdateIngredient.schemas"
import { parseApiError } from "@/utils/apiError"
import { zodResolver } from "@hookform/resolvers/zod"
import { TextField } from "@mui/material"
import { SetStateAction, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

interface props {
    foodId: string
    ingredientOfFoodId: string
    defaultIngredientValue: string
    setIngredientOfFoodId: (value: SetStateAction<string>) => void
    isEditingMode: "Edit" | "Create" | "close"
    setIsEditingMode: (value: SetStateAction<"Edit" | "Create" | "close">) => void
}

export default function CreateOrUpdateIOF({
    foodId,
    ingredientOfFoodId,
    defaultIngredientValue,
    setIngredientOfFoodId,
    isEditingMode,
    setIsEditingMode,
}: props) {

    // This id come from selectIngredient Component
    const [selectedIngredientId, setSelectedIngredientId] = useState("");
    const [ingredientIdError, setIngredientIdError] = useState("");

    const handleSlection = (id: string) => {
        setSelectedIngredientId(id)
        console.log("ID دریافت شده در والد:", id);
    }

    useEffect(() => {
            if (defaultIngredientValue) {
                reset({
                    name: defaultIngredientValue,
                });
            }
        }, [defaultIngredientValue]);

    const { mutate: updateIngredientOfFoodMutate,
        isPending: updateIIsPending,
        isError: updateIIsError,
        error: updateIError
    } = UseUpdateIngredientOfFood()

    const parsedError = updateIIsError ? parseApiError(updateIError) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateIngredientFormData>({
        resolver: zodResolver(UpdateIngredientSchema),
        defaultValues: {
            name: defaultIngredientValue
        }
    })

    const onSubmit = (data: UpdateIngredientFormData) => {
        updateIngredientOfFoodMutate({
            id: ingredientOfFoodId,
            ingredientId: selectedIngredientId,
            value: data.name,
        }, {
            onSuccess: () => {
                reset()
                setIngredientOfFoodId("")
                setSelectedIngredientId("")
                setIsEditingMode("close")
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
                if (selectedIngredientId == "")
                    setIngredientIdError("لطفا یک ماده اولیه انتخاب کنید")
            }
        })
    }

    // Create ------------------

    const {
        mutate: createIngredientOfFoodMutate,
        isPending: createIngredientOfFoodIsPendig,
        isError: createIngredientOfFoodIsError,
        error: createIngredientOfFoodError
    } = UseCreateIngredientOfFood()

    const onCreateSubmit = (data: UpdateIngredientFormData) => {
        createIngredientOfFoodMutate({
            foodId: foodId,
            ingredientId: selectedIngredientId,
            value: data.name
        }, {
            onSuccess: () => {
                reset()
                setSelectedIngredientId("")
                setIsEditingMode("close")
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
                if (selectedIngredientId == "")
                    setIngredientIdError("لطفا یک ماده اولیه انتخاب کنید")
            }
        })
    }

    return (
        <div>
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
                            <span className="text-xl">ویرایش ماده اولیه</span>

                            <SelectIngredient
                                onSelect={handleSlection}
                            />

                            <div className="text-red-400">{ingredientIdError}</div>

                            <TextField style={{ width: "100%" }} size="small"
                                placeholder="مقدار ماده اولیه :"
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
                                    disabled={isSubmitting || updateIIsPending}
                                    className="bg-blue-400 text-white px-4 py-1.5
                                                                    rounded-lg transition-all duration-200 hover:scale-105
                                                                    shadow-md hover:shadow-xl"
                                >

                                    {isSubmitting || updateIIsPending ? "در حال ارسال..." : "ثبت"}
                                </button>

                                <button
                                    onClick={() => {
                                        setIsEditingMode("close"),
                                            reset(),
                                            setIngredientIdError("")
                                    }}
                                    className="bg-red-500 text-white px-3 py-1.5 rounded-lg
                                                                            transition-all duration-200 hover:scale-105
                                                                            shadow-md hover:shadow-xl"
                                >انصراف
                                </button>
                            </div>

                            {updateIIsError && (
                                <p className="text-sm text-red-500 text-center">
                                    {(updateIError as Error).message}
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
            {isEditingMode == "Create" && (
                <div>
                    <div
                        className="absolute flex items-center justify-center inset-0
                                            z-40 bg-black/50">
                        <div className="bg-emerald-50 rounded-lg w-96 z-50 border 
                        border-gray-400 shadow-md py-8 px-10">
                            <form
                                onSubmit={handleSubmit(onCreateSubmit)}
                                className="flex flex-col gap-4 items-center">
                                <span className="text-xl">افزودن ماده اولیه</span>

                                <SelectIngredient
                                    onSelect={handleSlection}
                                />

                                <div className="text-red-400">{ingredientIdError}</div>

                                <TextField style={{ width: "100%" }} size="small"
                                    placeholder="مقدار ماده اولیه :"
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
                                        disabled={isSubmitting || createIngredientOfFoodIsPendig}
                                        className="bg-blue-400 text-white px-4 py-1.5
                                                                    rounded-lg transition-all duration-200 hover:scale-105
                                                                    shadow-md hover:shadow-xl"
                                    >

                                        {isSubmitting || createIngredientOfFoodIsPendig ? "در حال ارسال..." : "ثبت"}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setIsEditingMode("close"),
                                            reset(),
                                            setIngredientIdError("")
                                        }}
                                        className="bg-red-500 text-white px-3 
                                        py-1.5 rounded-lg transition-all duration-200 
                                        hover:scale-105 shadow-md hover:shadow-xl"
                                    >انصراف
                                    </button>
                                </div>

                                {createIngredientOfFoodIsError && (
                                    <p className="text-sm text-red-500 text-center">
                                        {(createIngredientOfFoodError as Error).message}
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
                </div>
            )}
        </div>
    )
}