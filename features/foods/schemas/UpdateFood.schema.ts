import { z } from "zod"

export const UpdateFoodSchema = z.object({
    // id: z.string(),

    name: z.
        string()
        .min(2, "نام حداقل باید 2 کاراکتر باشد")
        .max(50, "نام نمی تواند بیشتر از 50 حرف باشد"),

    recipe: z.string(),

    categoryId: z.string(),
})

export type UpdateFoodFormData = z.infer<typeof UpdateFoodSchema>;