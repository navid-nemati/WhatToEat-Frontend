import { parseApiError } from "@/utils/apiError";
import UseUpdateIngredientOfFood from "../hooks/useUpdateIngredientOfFood";
import { UpdateIngredientFormData } from "../schemas/UpdateIngredient.schemas";
import IngredientOfFoodForm from "./ingredientOfFoodForm";
import { IIngredientsOfFoodDto } from "../types/IngredientOfFood";
import AppToast from "@/lib/toast";

interface EditFoodProps {
    ingredientOfFoodData: IIngredientsOfFoodDto
    ingredientOfFoodId: string
    onSuccess: () => void;
}

export default function EditIngredientOfFoodModal({
    ingredientOfFoodData,
    ingredientOfFoodId,
    onSuccess,
}: EditFoodProps) {

    const {
        mutate,
        isPending,
        isError,
        error,
    } = UseUpdateIngredientOfFood();

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const handleUpdateIngredientOfFood = (
        data: UpdateIngredientFormData
    ) => {



        mutate(
            {
                id: ingredientOfFoodData.id,
                ingredientId: data.ingredientId,
                value: data.value,
            },
            {
                onSuccess: () => {
                    onSuccess();
                    AppToast.success("ماده اولیه غذا به روزرسانی شد")
                },

                onError: (mutationError) => {
                    console.error(
                        "Create food error:",
                        mutationError
                    );
                    AppToast.error(mutationError.message)
                },
            }
        );

    }

    return (
        <IngredientOfFoodForm
            defaultValues={{
                ingredientId: ingredientOfFoodData.ingredientId,
                ingredientName: ingredientOfFoodData.ingredientName,
                value: ingredientOfFoodData.value
            }}
            loading={isPending}
            onSubmit={handleUpdateIngredientOfFood}
            apiError={parsedError?.message}
            fieldErrors={parsedError?.fieldErrors}
            submitButtonText="ویرایش ماده اولیه"
        />
    )

}