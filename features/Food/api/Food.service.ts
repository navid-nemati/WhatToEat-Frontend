import { ApiError } from "@/types/api-error";
import { ICreateFoodDto, IFoodDetailDto, IFoodDto, IUpdateFoodDto } from "@/features/Food/types/Food";

const BaseUrl = "https://localhost:7232/api/Food"

export async function GetAllFoods(): Promise<IFoodDto[]> {

    const res = await fetch(BaseUrl);

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        //throw new Error(errorData.message);
        throw errorData
    }

    return res.json();

}

export async function GetFoodDetail(id: string): Promise<IFoodDetailDto> {

    const res = await fetch(`${BaseUrl}/${id}`)

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json();

}

export async function CreateFood(dto: ICreateFoodDto): Promise<IFoodDto> {

    const res = await fetch(BaseUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
    });

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }

    return res.json();

}

export async function UpdateFood(dto: IUpdateFoodDto): Promise<void> {

    const res = await fetch(`${BaseUrl}/${dto.id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
    })

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }
}

export async function DeleteFood(Id: string): Promise<void> {

    const res = await fetch(`${BaseUrl}/${Id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData
    }
}