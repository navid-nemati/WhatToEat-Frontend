import { z } from "zod"

export const CreateIngredientSchema = z.object({
    name: z.
        string()
        .min(2, "نام حداقل باید 2 کاراکتر باشد")
        .max(50, "نام نمی تواند بیشتر از 50 حرف باشد"),
})

export type CreateIngredientFormData = z.infer<typeof CreateIngredientSchema>;