"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextareaAutosize, TextField } from "@mui/material";

import SelectCategory from "@/features/categories/components/selectCategory";

import {
    UpdateFoodFormData,
    UpdateFoodSchema,
} from "../schemas/UpdateFood.schema";

interface FoodFormProps {
    title?: string;

    defaultValues?: {
        name: string;
        recipe: string;
        categoryId: string;
    };

    loading: boolean;

    apiError?: string;

    fieldErrors?: {
        Name?: string[];
        Recipe?: string[];
        CategoryId?: string[];
    };

    submitButtonText?: string;

    onSubmit: (data: UpdateFoodFormData) => void;
}

export default function FoodForm({
    title,
    defaultValues,
    loading,
    apiError,
    fieldErrors,
    submitButtonText = "ثبت اطلاعات",
    onSubmit,
}: FoodFormProps) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(
        defaultValues?.categoryId ?? ""
    );

    const [categoryError, setCategoryError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UpdateFoodFormData>({
        resolver: zodResolver(UpdateFoodSchema),

        defaultValues: {
            name: defaultValues?.name ?? "",
            recipe: defaultValues?.recipe ?? "",
            categoryId: defaultValues?.categoryId ?? "",
        },
    });

    useEffect(() => {
        reset({
            name: defaultValues?.name ?? "",
            recipe: defaultValues?.recipe ?? "",
            categoryId: defaultValues?.categoryId ?? "",
        });

        setSelectedCategoryId(defaultValues?.categoryId ?? "");
        setCategoryError("");
    }, [defaultValues, reset]);

    const handleCategorySelect = (id: string) => {
        setSelectedCategoryId(id);
        setCategoryError("");
    };

    const handleFoodSubmit = (data: UpdateFoodFormData) => {
        if (!selectedCategoryId) {
            setCategoryError("لطفاً یک دسته‌بندی انتخاب کنید");
            return;
        }

        setCategoryError("");

        onSubmit({
            ...data,
            categoryId: selectedCategoryId,
        });
    };

    return (
        <form
            onSubmit={handleSubmit(handleFoodSubmit)}
            className="flex w-full flex-col gap-5"
        >
            {title && (
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>
            )}

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                    نام غذا
                </label>

                <TextField
                    fullWidth
                    size="small"
                    placeholder="مثال: پاستا آلفردو"
                    variant="outlined"
                    {...register("name")}
                    error={
                        Boolean(errors.name) ||
                        Boolean(fieldErrors?.Name?.length)
                    }
                    helperText={
                        errors.name?.message ??
                        fieldErrors?.Name?.[0]
                    }
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                    طرز تهیه
                </label>

                <TextareaAutosize
                    minRows={5}
                    placeholder="دستور پخت را وارد کنید..."
                    {...register("recipe")}
                    className={`
                        w-full resize-y rounded-lg border p-3
                        outline-none transition-all
                        focus:ring-2 focus:ring-emerald-400
                        ${
                            errors.recipe || fieldErrors?.Recipe?.length
                                ? "border-red-500"
                                : "border-gray-300"
                        }
                    `}
                />

                {(errors.recipe?.message ||
                    fieldErrors?.Recipe?.[0]) && (
                    <p className="text-sm text-red-500">
                        {errors.recipe?.message ??
                            fieldErrors?.Recipe?.[0]}
                    </p>
                )}
            </div>

            <SelectCategory
                value={selectedCategoryId}
                onSelect={handleCategorySelect}
            />

            {(categoryError ||
                fieldErrors?.CategoryId?.[0]) && (
                <p className="text-sm text-red-500">
                    {categoryError ||
                        fieldErrors?.CategoryId?.[0]}
                </p>
            )}

            {apiError && (
                <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-600">
                    {apiError}
                </p>
            )}

            <button
                type="submit"
                disabled={loading}
                className="
                    w-full rounded-lg bg-emerald-500 py-2.5
                    font-medium text-white transition-colors
                    hover:bg-emerald-600
                    disabled:cursor-not-allowed
                    disabled:bg-emerald-300
                "
            >
                {loading ? "در حال ارسال..." : submitButtonText}
            </button>
        </form>
    );
}