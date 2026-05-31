import { z } from "zod"

export const RegisterUserSchema = z.object({
    username: z.string().min(3, "نام کاربری حداقل باید 3 کاراکتر باشد"),
    email: z.email("فرمت ایمیل صحیح نمی باشد "),
    password: z.string().min(5, "رمز عبور حداقل باید 5 کاراکتر باشد")
    //password: z.string().min(5, "لطفا یه رمزعبور درست حسابی بزار")
})

export type RegisterUserFormData = z.infer<typeof RegisterUserSchema>