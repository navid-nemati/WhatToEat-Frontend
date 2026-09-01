import api from "@/lib/api";
import { FavoriteDto } from "../types/favorite";
import { AddFavoriteDto } from "../types/addFavorite";

export async function GetAllFavoriteListItems(): Promise<FavoriteDto[]> {
    
    const res = await api.get("/FavoriteList")

    return await res.data;

}

export async function AddToFavoriteList(dto: AddFavoriteDto): Promise<void> {

    const res = await api.post("/FavoriteList", dto)

    return res.data

}

export async function DeleteFavoriteListItem(id: string): Promise<void> {

    await api.delete(`/FavoriteList/${id}`)

}

export async function DeleteAllDeleteFavoriteListItem(): Promise<void> {

    await api.delete("/FavoriteList/all")

}