import { parseApiError } from "@/utils/apiError";
import UseCreateIngredientOfFood from "../hooks/useCreateIngredientOfFood";
import { UpdateIngredientFormData } from "../schemas/UpdateIngredient.schemas";
import IngredientOfFoodForm from "./ingredientOfFoodForm";
import AppToast from "@/lib/toast";

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
                    AppToast.success("ماده اولیه به غذا اضافه شد")
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