import { z } from "zod"

export const LoginUserSchema = z.object({
    username: z.string().min(3, "نام کاربری حداقل باید 3 کاراکتر باشد"),
    password: z.string().min(5, "رمز عبور حداقل باید 5 کاراکتر باشد")
})

export type LoginUserFormData = z.infer<typeof LoginUserSchema>