import { ApiError } from "@/types/api-error";
import { VerifyCodeInputDto, VerifyCodeOutputDto } from "@/types/verifyCode";

const Base_URL = "https://localhost:7069/api/auth"
export async function SendCode(phoneNumber: string): Promise<string> {

    const res = await fetch(Base_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(phoneNumber),
    });

    console.log(res)

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData;
    }

    return res.json();
}

export async function VerifyCode(dto: VerifyCodeInputDto): Promise<VerifyCodeOutputDto | void> {
    const res = await fetch(Base_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dto),
    });

    if (!res.ok) {
        const errorData: ApiError = await res.json();
        throw errorData;
    }

    return res.json();
}

export async function GetTest(test: string): Promise<any> {
    const res = await fetch(Base_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: test,
    });

    // if (!res.ok) {
    //     const errorData: ApiError = await res.json();
    //     throw errorData;
    // }

    return res;
}