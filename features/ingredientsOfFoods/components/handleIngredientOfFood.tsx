import UseGetAllIngredientOfFood from "../hooks/useGetAllIngredientOfFood";
import IngredientOfFoodItem from "./ingredientOfFoodItem";

interface Props {
    foodId: string
}

export default function HandleIngredientOfFood({ foodId }: Props) {
    const {
        data: ingredientData,
        isLoading: ingredientsIsLoading,
        isError: ingredientsIsError,
        error: ingredientsError,
    } = UseGetAllIngredientOfFood(foodId);

    return (
        <div className="p-6">
            {ingredientsIsError ? (
                <div className="p-6 text-center text-sm text-red-500">
                    {(ingredientsError as Error).message}
                </div>
            ) : (
                <div className="w-full overflow-x-auto">
                    <div className="w-full">
                        <div className="space-y-3">
                            {ingredientsIsLoading ? (
                                <div>
                                    <div
                                        className="px-6 py-8 text-center text-gray-500"
                                    >
                                        در حال بارگذاری مواد اولیه...
                                    </div>
                                </div>
                            ) : ingredientData &&
                                ingredientData.length > 0 ? (
                                ingredientData.map((ingredient) => (
                                    <IngredientOfFoodItem key={ingredient.id} data={ingredient}/>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={3}
                                        className="px-6 py-10 text-center text-gray-500"
                                    >
                                        هیچ ماده اولیه‌ای برای این غذا
                                        ثبت نشده است.
                                    </td>
                                </tr>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}