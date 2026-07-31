import { parseApiError } from "@/utils/apiError";
import { useUpdateFood } from "../hooks/useUpdateFood";
import { UpdateFoodFormData } from "../schemas/UpdateFood.schema";
import FoodForm from "./foodForm";
import { IFoodDetailDto } from "../types/Food";

interface props {
    food: IFoodDetailDto
}

export default function EditFood({ food }: props) {

    const { mutate,
        isPending,
        isError,
        error,
    } = useUpdateFood()

    const parsedError = isError
        ? parseApiError(error)
        : null;

    const handleUpdateFood = (
        data: UpdateFoodFormData
    ) => {
        mutate(
            {
                id: food.id,
                name: data.name,
                recipe: data.recipe,
                categoryId: data.categoryId,
            },
            {
                onSuccess: () => {
                    //alert
                },

                onError: (mutationError) => {
                    console.error(
                        "update food error:",
                        mutationError
                    );
                },
            }
        );
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full mb-6">
            <FoodForm
                defaultValues={{
                    name: food.name,
                    recipe: food.recipe,
                    categoryId: food.categoryId
                }}
                loading={isPending}
                onSubmit={handleUpdateFood}
                apiError={parsedError?.message}
                fieldErrors={parsedError?.fieldErrors}
                submitButtonText="ویرایش غذا"
            />
        </div>
    )
}