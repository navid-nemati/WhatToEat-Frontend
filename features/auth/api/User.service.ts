import api from "@/lib/api";
import { UpdateUserDto, User } from "../types/user";

export async function UpdateProfile(dto: UpdateUserDto): Promise<void> {
    
    await api.put("Account/update-profile", dto)

}

export async function GetAllUsers(): Promise<User[]> {

    const response = await api.get<User[]>("Account/all-users")

    return response.data
}