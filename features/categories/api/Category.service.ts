import { ApiError } from "@/types/api-error";
import { ICategoryItem, ICategoryQueryParams, ICreateCategory, IUpdateCategory } from "@/features/Category/types/Category";

const BaseUrl = "https://localhost:7232/api/Category"

export async function GetAllCategories(params?: ICategoryQueryParams): Promise<ICategoryItem[]> {

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

export async function CreateCategory(dto: ICreateCategory): Promise<ICategoryItem> {

    const res = await fetch(BaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    });

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json()
}

export async function UpdateCategory(dto: IUpdateCategory): Promise<void> {

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

export async function DeleteCategory(id: string): Promise<void> {
    const res = await fetch(`${BaseUrl}/${id}`, {
        method: "DELETE"
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }
}