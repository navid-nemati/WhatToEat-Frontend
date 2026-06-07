import { z } from "zod"

export const CreateCategorySchema = z.object({
    name: z.
        string()
        .min(2, "نام حداقل باید 2 کاراکتر باشد")
        .max(50, "نام نمی تواند بیشتر از 50 حرف باشد"),
})

export type CreateCategoryFormData = z.infer<typeof CreateCategorySchema>;