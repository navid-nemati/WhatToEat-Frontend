"use client"

import FoodForm from "@/features/foods/components/foodForm";
import { useCreateFood } from "@/features/foods/hooks/useCreateFood";
import { UpdateFoodFormData } from "@/features/foods/schemas/UpdateFood.schema";
import { parseApiError } from "@/utils/apiError";

interface CreateFoodProps {
    onSuccess: () => void;
}

export default function CreateFood({
    onSuccess,
}: CreateFoodProps) {
    const {
        mutate,
        isPending,
        isError,
        error,
    } = useCreateFood();

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const handleCreateFood = (
        data: UpdateFoodFormData
    ) => {
        mutate(
            {
                name: data.name,
                recipe: data.recipe,
                categoryId: data.categoryId,
            },
            {
                onSuccess: () => {
                    onSuccess();
                },

                onError: (mutationError) => {
                    console.error(
                        "Create food error:",
                        mutationError
                    );
                },
            }
        );
    };

    return (
        <FoodForm
            loading={isPending}
            onSubmit={handleCreateFood}
            apiError={parsedError?.message}
            fieldErrors={parsedError?.fieldErrors}
            submitButtonText="ساخت غذا"
        />
    );
}