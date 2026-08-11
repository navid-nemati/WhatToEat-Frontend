"use client"

import FoodForm from "@/features/foods/components/foodForm";
import { useCreateFood } from "@/features/foods/hooks/useCreateFood";
import { UpdateFoodFormData } from "@/features/foods/schemas/UpdateFood.schema";
import AppToast from "@/lib/toast";
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

        const selectedImage = data.image?.[0];

        mutate(
            {
                name: data.name,
                recipe: data.recipe,
                categoryId: data.categoryId,
                image: selectedImage ?? null,
            },
            {
                onSuccess: () => {
                    onSuccess();
                    AppToast.success("مبارک باشه یه غذا خوشمزه اضافه شد 🎉")
                },

                onError: (mutationError) => {
                    //AppToast.error(mutationError.message)

                    const parsed = parseApiError(mutationError);

                    AppToast.error(
                        parsed.message ?? "خطایی رخ داد"
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