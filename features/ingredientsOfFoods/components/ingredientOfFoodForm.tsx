import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateIngredientFormData, UpdateIngredientSchema } from "../schemas/UpdateIngredient.schemas";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import SelectIngredient from "@/features/ingredients/components/selectIngredient";

interface Props {
    title?: string;

    defaultValues?: {
        ingredientName: string;
        value: string;
        ingredientId: string;
    };

    loading: boolean;

    apiError?: string;

    fieldErrors?: {
        ingredientName?: string[];
        value?: string[];
        ingredientId?: string[];
    };

    submitButtonText?: string;

    onSubmit: (data: UpdateIngredientFormData) => void;
}

export default function IngredientOfFoodForm({
    title,
    defaultValues,
    loading,
    apiError,
    fieldErrors,
    submitButtonText,
    onSubmit
}: Props) {

    const [selectedIngredientId, setSelectedIngredientId] = useState(
        defaultValues?.ingredientId ?? ""
    );

    const [ingredientError, setIngredientError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<UpdateIngredientFormData>({
        resolver: zodResolver(UpdateIngredientSchema),

        defaultValues: {
            //ingredientName: defaultValues?.ingredientName ?? "",
            value: defaultValues?.value ?? "",
            ingredientId: defaultValues?.ingredientId ?? "",
        },
    });

    useEffect(() => {
        reset({
            //ingredientName: defaultValues?.ingredientName ?? "",
            value: defaultValues?.value ?? "",
            ingredientId: defaultValues?.ingredientId ?? "",
        });

        setSelectedIngredientId(defaultValues?.ingredientId ?? "");
        setIngredientError("");
    }, [defaultValues, reset]);

    const handleIngredientSelect = (id: string) => {
        setSelectedIngredientId(id);
        setIngredientError("");
    };

    const handleIngredientSubmit = (data: UpdateIngredientFormData) => {

        if (!selectedIngredientId) {
            setIngredientError("لطفاً یک ماده اولیه انتخاب کنید");
            return;
        }

        setIngredientError("");

        onSubmit({
            ...data,
            ingredientId: selectedIngredientId,
        });
    };

    return (
        <form
            onSubmit={handleSubmit(handleIngredientSubmit)}
            className="flex w-full flex-col gap-5"
        >
            {title && (
                <h2 className="text-xl font-bold text-gray-800">
                    {title}
                </h2>
            )}

            <SelectIngredient
                value={selectedIngredientId}
                onSelect={handleIngredientSelect}
            />

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-600">
                    مقدار مورد نیاز
                </label>

                <TextField
                    fullWidth
                    size="small"
                    placeholder="مثال: ۲۰۰ گرم یا ۲ قاشق غذاخوری"
                    variant="outlined"
                    {...register("value")}
                    error={
                        Boolean(errors.value) ||
                        Boolean(fieldErrors?.value?.length)
                    }
                    helperText={
                        errors.value?.message ??
                        fieldErrors?.value?.[0]
                    }
                />
            </div>

            {(ingredientError ||
                fieldErrors?.ingredientId?.[0]) && (
                <p className="text-sm text-red-500">
                    {ingredientError ||
                        fieldErrors?.ingredientId?.[0]}
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
    )

}