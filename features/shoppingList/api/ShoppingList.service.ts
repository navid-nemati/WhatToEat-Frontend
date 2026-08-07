import { ApiError } from "@/types/api-error";
import { ShoppingListDto } from "../types/ShoppingList";
import { AddShoppingList } from "../types/AddShoppingList";
import { UpdateShoppingList } from "../types/UpdateShoppingList";
import api from "@/lib/api";

// const BaseUrl = "https://localhost:7232/api/ShoppingList"

// async function getApiError(res: Response): Promise<ApiError> {
//     try {
//         return await res.json();
//     } catch {
//         return {
//             message: "خطایی در ارتباط با سرور رخ داد"
//         } as ApiError;
//     }
// }

export async function getAllShoppingListItems(): Promise<ShoppingListDto[]> {

    const res = await api.get("/ShoppingList")

    // const res = await fetch(BaseUrl)

    // if (!res.ok) {
    //     throw await getApiError(res);
    // }

    return await res.data;

}

export async function addShoppingListItem(dto: AddShoppingList): Promise<void> {

    const res = await api.post("/ShoppingList", dto)

    // const res = await fetch(BaseUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(dto)
    // })

    // if (!res.ok) {
    //     throw await getApiError(res);
    // }

    //return (await res).data;

    return res.data;

}

export async function updateShoppingListItem(dto: UpdateShoppingList): Promise<void> {

    await api.put(`/ShoppingList/${dto.id}`, dto);

    // const res = await fetch(`${BaseUrl}/${id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(dto)
    // })

    // if (!res.ok) {
    //     throw await getApiError(res);
    // }

}

export async function deleteShoppingListItem(id: string): Promise<void> {

    await api.delete(`/ShoppingList/${id}`);

    // const res = await fetch(`${BaseUrl}/${id}`, {
    //     method: "DELETE"
    // })

    // if (!res.ok) {
    //     throw await getApiError(res);
    // }

}

export async function deleteAllShoppingListItems() {
  await api.delete("/ShoppingList/all");
}

export async function deletePurchasedShoppingListItems() {
  await api.delete("/ShoppingList/purchased");
}