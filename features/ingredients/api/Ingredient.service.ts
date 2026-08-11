import { ICreateIngredient, IIngredientItem, IngredientQueryParams, IUpdateIngredient } from "@/features/ingredients/types/Ingredient";
import api from "@/lib/api";

export async function GetAllIngredients(params?: IngredientQueryParams): Promise<IIngredientItem[]> {

    const { data } = await api.get<IIngredientItem[]>("/Ingredient", {
        params
    })

    return data;

}

export async function CreateIngredient(dto: ICreateIngredient): Promise<IIngredientItem> {

    const { data } = await api.post<IIngredientItem>("/Ingredient", dto);

    return data;

}

export async function UpdateIngredient(dto: IUpdateIngredient): Promise<void> {

    await api.put(`/Ingredient/${dto.id}`, dto);

}

export async function DeleteIngredient(id: string): Promise<void> {

    await api.delete(`/Ingredient/${id}`);

}