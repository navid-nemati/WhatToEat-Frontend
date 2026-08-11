import { parseApiError } from "@/utils/apiError";
import { useUpdateFood } from "../hooks/useUpdateFood";
import { UpdateFoodFormData } from "../schemas/UpdateFood.schema";
import FoodForm from "./foodForm";
import { IFoodDetailDto } from "../types/Food";
import AppToast from "@/lib/toast";

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

        const selectedImage = data.image?.[0];

        mutate(
            {
                id: food.id,
                name: data.name,
                recipe: data.recipe,
                categoryId: data.categoryId,
                image: selectedImage ?? null,
                removeImage: data.removeImage ?? false,
            },
            {
                onSuccess: () => {
                    AppToast.success("اطلاعات غذا با موفقیت به روز رسانی شد")
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
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full mb-6">
            <FoodForm
                defaultValues={{
                    name: food.name,
                    recipe: food.recipe,
                    categoryId: food.categoryId
                }}
                currentImagePath={food.imagePath}
                loading={isPending}
                onSubmit={handleUpdateFood}
                apiError={parsedError?.message}
                fieldErrors={parsedError?.fieldErrors}
                submitButtonText="ویرایش غذا"
            />
        </div>
    )
}