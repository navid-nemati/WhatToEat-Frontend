import { ApiError } from "@/types/api-error";
import { ICreateIngredient, IIngredientItem, IngredientQueryParams, IUpdateIngredient } from "@/features/ingredients/types/Ingredient";

const BaseUrl = "https://localhost:7232/api/Ingredient"

// export async function GetAllIngredients(): Promise<IIngredientItem[]> {

//     const res = await fetch(BaseUrl)

//     if (!res.ok) {
//         const errorData: ApiError = await res.json();
//         throw errorData
//     }

//     return res.json()

// }

export async function GetAllIngredients(params?: IngredientQueryParams): Promise<IIngredientItem[]> {

    let url = new URL(BaseUrl);

    if (params) {
        // اضافه کردن هر پارامتر به URL
        Object.keys(params).forEach((key) => {
            const value = params[key as keyof typeof params];
            if (value !== undefined && value !== null && value !== '') {
                url.searchParams.append(key, String(value))
            }
        })
    }

    const res = await fetch(url.toString())

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json()

}

export async function CreateIngredient(dto: ICreateIngredient): Promise<IIngredientItem> {

    const res = await fetch(BaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json()

}

//export async function CreateIngredient(dto: ICreateIngredient): Promise<IIngredientItem> {
//     try {
//         const res = await fetch(BaseUrl, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(dto)
//         })

//         if (!res.ok) {
//             const errorData: ApiError = await res.json();
//             throw errorData;
//         }

//         return await res.json();
//     } catch (error) {
//         // مدیریت خطاهای شبکه یا JSON parsing
//         console.error("Error in CreateIngredient:", error);
//         throw error;
//     }
// }


export async function UpdateIngredient(dto: IUpdateIngredient): Promise<void> {

    const res = await fetch(`${BaseUrl}/${dto.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

}

export async function DeleteIngredient(id: string): Promise<void> {

    const res = await fetch(`${BaseUrl}/${id}`, {
        method: "DELETE"
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

}