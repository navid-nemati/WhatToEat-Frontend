import { z } from "zod"

export const UpdateIngredientSchema = z.object({
    // id: z.string(),
    
    // ingredientName: z.
    //     string()
    //     .min(2, "نام222 ماده اولیه حداقل باید 2 کاراکتر باشد")
    //     .max(50, "نام ماده اولیه نمی تواند بیشتر از 50 حرف باشد"),
    
    value: z.string()
    .min(2, "مقدار ماده اولیه را وارد کنید"),

    ingredientId: z.string(),
})

export type UpdateIngredientFormData = z.infer<typeof UpdateIngredientSchema>;