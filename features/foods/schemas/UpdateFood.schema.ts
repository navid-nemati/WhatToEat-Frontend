import { z } from "zod"

export const UpdateFoodSchema = z.object({
    // id: z.string(),

    name: z.
        string()
        .min(2, "نام حداقل باید 2 کاراکتر باشد")
        .max(50, "نام نمی تواند بیشتر از 50 حرف باشد"),

    recipe: z.string(),

    categoryId: z.string(),

    image: z
        .custom<FileList>()
        .optional(),

    removeImage: z.boolean().optional(),

    cookingTimeMinutes: z.number()
        .min(1, "زمان پخت نمی تواند کمتر از 1 دقیقه باشد.")
        .max(1440, "زمان پخت نمی تواند بیشتر از 1440 دقیقه(24 ساعت) باشد.").optional(),
    servings: z.number()
        .min(1, "تعداد نفرات نمی تواند کمتر از 1 باشد.")
        .max(20, "تعداد نفرات نمی تواند بیشتر از 20 باید ").optional()
})

export type UpdateFoodFormData = z.infer<typeof UpdateFoodSchema>;