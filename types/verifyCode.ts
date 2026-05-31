export interface VerifyCodeInputDto {
    phoneNumber: string
    code: string
}

export interface VerifyCodeOutputDto {
    AccessToken?: string
    RefreshToken?: string
}