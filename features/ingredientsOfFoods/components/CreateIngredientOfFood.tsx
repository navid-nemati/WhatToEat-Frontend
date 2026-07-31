import { parseApiError } from "@/utils/apiError";
import UseCreateIngredientOfFood from "../hooks/useCreateIngredientOfFood";
import { UpdateIngredientFormData } from "../schemas/UpdateIngredient.schemas";
import IngredientOfFoodForm from "./ingredientOfFoodForm";

interface CreateFoodProps {
    foodId: string
    onSuccess: () => void;
}

export default function CreateIngredientOfFoodModal({
    foodId,
    onSuccess,
}: CreateFoodProps) {

    const {
        mutate,
        isPending,
        isError,
        error,
    } = UseCreateIngredientOfFood();

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const handleCreateIngredientOfFood = (
        data: UpdateIngredientFormData
    ) => {

        mutate(
            {
                foodId,
                ingredientId: data.ingredientId,
                value: data.value,
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

    }

    return (
        <IngredientOfFoodForm
            loading={isPending}
            onSubmit={handleCreateIngredientOfFood}
            apiError={parsedError?.message}
            fieldErrors={parsedError?.fieldErrors}
            submitButtonText="افزودن ماده اولیه"
        />
    )

}