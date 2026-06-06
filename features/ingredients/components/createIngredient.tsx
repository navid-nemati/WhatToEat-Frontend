import useCreateIngredient from "@/features/ingredients/hooks/useCreateIngredient";
import { CreateIngredientFormData, CreateIngredientSchema } from "@/features/ingredients/schemas/CreateIngredient.schemas";
import { parseApiError } from "@/utils/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast"

export default function CreateIngredientComponent() {

    const { mutate, isPending, isError, error } = useCreateIngredient()
    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<CreateIngredientFormData>({
        resolver: zodResolver(CreateIngredientSchema)
    })

    const onSubmit = (data: CreateIngredientFormData) => {
        mutate(data, {
            onSuccess: () => {
                reset();
            },
            onError: (err: any) => {
                console.error("Mutation Erroraaaaaaaa:", err);
                console.log("errrrrrrroor", error)
                toast.error(err.message || "خطا")
            }
        });
    }

    return (
        <div className="p-5 bg-emerald-100 border border-emerald-200 rounded-lg">
            <div className="mb-3">
                <span className="text-lg">افزودن ماده اولیه</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-2">
                <div className="flex flex-col">
                    <TextField size="small"
                        placeholder="نام ماده اولیه"
                        variant="outlined"
                        {...register("name")}
                        error={!!error?.message}
                        helperText={errors.name?.message || parsedError?.fieldErrors?.Name?.[0]}
                    />

                    {isError && (
                        <p className="text-sm text-red-500 text-center">
                            {(error as Error).message}
                        </p>
                    )}
                </div>



                <button
                    type="submit"
                    disabled={isPending || isSubmitting}
                    className="bg-sky-300 px-3 py-2 rounded-md text-white
                    text-shadow-sm transition-all duration-200 hover:scale-105
                    hover:shadow-md">
                    {isPending || isSubmitting ? "اندکی تأمل" : "افزودن"}
                </button>



            </form>
        </div>
    )
}