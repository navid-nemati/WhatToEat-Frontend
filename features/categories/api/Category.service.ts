import { ApiError } from "@/types/api-error";
import { ICategoryItem, ICategoryQueryParams, ICreateCategory, IUpdateCategory } from "@/features/categories/types/Category";
import api from "@/lib/api";

const BaseUrl = "https://localhost:7232/api/Category"

export async function GetAllCategories(
    params?: ICategoryQueryParams
): Promise<ICategoryItem[]> {

    const { data } = await api.get<ICategoryItem[]>("/Category", {
        params
    })

    return data;

    // let url = new URL(BaseUrl);

    // if (params) {
    //     // اضافه کردن هر پارامتر به URL
    //     Object.keys(params).forEach((key) => {
    //         const value = params[key as keyof typeof params];
    //         if (value !== undefined && value !== null && value !== '') {
    //             url.searchParams.append(key, String(value))
    //         }
    //     })
    // }

    // const res = await fetch(url.toString())

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     throw errorData
    // }

    // return res.json()
}

export async function CreateCategory(dto: ICreateCategory): Promise<ICategoryItem> {

    const { data } = await api.post<ICategoryItem>("/Category", dto);

    return data;

    // const res = await fetch(BaseUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(dto)
    // });

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     throw errorData
    // }

    // return res.json()
}

export async function UpdateCategory(dto: IUpdateCategory): Promise<void> {

    await api.put(`/Category/${dto.id}`, dto);

    // const res = await fetch(`${BaseUrl}/${dto.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(dto)
    // })

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     throw errorData
    // }
}

export async function DeleteCategory(id: string): Promise<void> {

    await api.delete(`/Category/${id}`);

    // const res = await fetch(`${BaseUrl}/${id}`, {
    //     method: "DELETE"
    // })

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     throw errorData
    // }
}