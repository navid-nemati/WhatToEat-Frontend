import { ApiError } from "@/types/api-error";
import {
    ICreateFoodDto,
    IFoodDetailDto,
    IFoodDto,
    IUpdateFoodDto
} from "@/features/foods/types/Food";

const BaseUrl = "https://localhost:7232/api/Food"

async function getApiError(res: Response): Promise<ApiError> {
    try {
        return await res.json();
    } catch {
        return {
            message: "خطایی در ارتباط با سرور رخ داد"
        } as ApiError;
    }
}

export async function GetAllFoods(): Promise<IFoodDto[]> {

    const res = await fetch(BaseUrl);

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     //throw new Error(errorData.message);
    //     throw errorData
    // }

    if (!res.ok) {
        throw await getApiError(res);
    }

    return res.json();

}

export async function GetFoodDetail(id: string): Promise<IFoodDetailDto> {

    const res = await fetch(`${BaseUrl}/${id}`)

    if (!res.ok) {
        throw await getApiError(res);
    }

    return res.json();

}

export async function CreateFood(dto: ICreateFoodDto): Promise<IFoodDto> {

    const formData = new FormData();

    formData.append("Name", dto.name)
    formData.append("CategoryId", dto.categoryId);
    formData.append("Recipe", dto.recipe ?? "");

    if (dto.image) {
        formData.append("Image", dto.image);
    }

    // const res = await fetch(BaseUrl, {
    //     method: "POST",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(dto),
    // });

    const res = await fetch(BaseUrl, {
        method: "POST",
        body: formData
    });

    if (!res.ok) {
        throw await getApiError(res);
    }

    return res.json();

}

export async function UpdateFood(dto: IUpdateFoodDto): Promise<void> {

    const formData = new FormData();

    formData.append("Name", dto.name);
    formData.append("CategoryId", dto.categoryId);
    formData.append("Recipe", dto.recipe ?? "");

    formData.append(
        "RemoveImage",
        String(dto.removeImage ?? false)
    );

    if (dto.image) {
        formData.append("Image", dto.image);
    }

    // const res = await fetch(`${BaseUrl}/${dto.id}`, {
    //     method: "PUT",
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(dto),
    // })

    const res = await fetch(`${BaseUrl}/${dto.id}`, {
        method: "PUT",
        body: formData
    });

    if (!res.ok) {
        throw await getApiError(res);
    }
}

export async function DeleteFood(Id: string): Promise<void> {

    const res = await fetch(`${BaseUrl}/${Id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw await getApiError(res);
    }
}