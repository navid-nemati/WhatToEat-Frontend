import { ApiError } from "@/types/api-error";
import { ICreateIngredientsOfFood, IIngredientsOfFoodDto, IUpdateIngredientsOfFood } from "@/types/Ingredient/IngredientOfFood";

const BaseUrl = "https://localhost:7232/api/IngredientsOfFood"

export async function GetAllIngredientByFoodId(foodId: string): Promise<IIngredientsOfFoodDto[]> {

    const res = await fetch(`${BaseUrl}/${foodId}`)

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json();
}

export async function CreateIngredientOfFood(dto: ICreateIngredientsOfFood): Promise<IIngredientsOfFoodDto> {

    const res = await fetch(BaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json();
}

export async function UpdateIngredientOfFood(dto: IUpdateIngredientsOfFood): Promise<void> {

    const res = await fetch(`${BaseUrl}/${dto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })

    if (!res.ok) {
        console.log("ressssssss",res)
        console.log("dtoooooooo",dto)
        const errorData: ApiError = await res.json();
        throw errorData
    }
}

export async function DeleteIngredientOfFood(id: string): Promise<void> {

    const res = await fetch(`${BaseUrl}/${id}`, {
        method: "DELETE"
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }
}  