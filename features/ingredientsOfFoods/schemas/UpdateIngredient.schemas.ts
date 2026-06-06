import { z } from "zod"

export const UpdateIngredientSchema = z.object({
    // id: z.string(),
    
    name: z.
        string()
        .min(2, "مقدار اولیه حداقل باید 2 کاراکتر باشد")
        .max(50, "مقدار اولیه نمی تواند بیشتر از 50 حرف باشد"),
})

export type UpdateIngredientFormData = z.infer<typeof UpdateIngredientSchema>;