import { z } from "zod"

export const UpdateShoppingListItemSchema = z.object({
    // id: z.string(),
    
    value: z.
        string()
        .min(2, "مقدار حداقل باید 2 کاراکتر باشد")
        .max(50, "مقدار نمی تواند بیشتر از 50 حرف باشد"),
})

export type UpdateShoppingListItemFormData = z.infer<typeof UpdateShoppingListItemSchema>;