import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { parseApiError } from "@/utils/apiError";
import { UpdateIngredientItemFormData, UpdateIngredientItemSchema } from "../schemas/UpdateIngredientItem.schema";
import useUpdateIngredient from "../hooks/useUpdateIngredient";

interface UpdateIngredientModalProps {
    ingredientName: string
    ingredientId: string
    onSuccess: () => void
}

export default function UpdateIngredientForm({ ingredientName, ingredientId, onSuccess }: UpdateIngredientModalProps) {

    const { mutate, isPending, isError, error } = useUpdateIngredient()

    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<UpdateIngredientItemFormData>({
        resolver: zodResolver(UpdateIngredientItemSchema),
        defaultValues: {
            name: ingredientName
        }
    })

    const onSubmit = (data: UpdateIngredientItemFormData) => {

        if (!ingredientId) {
            console.error("ID is undefined!");
            return;
        }

        mutate({ id: ingredientId, name: data.name }, {
            onSuccess: () => {
                reset();
                onSuccess()
            },
            onError: (err: any) => {
                console.error("Mutation Error:", err);
            }
        });


    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3">
            <TextField size="small"
                placeholder="نام ماده اولیه"
                {...register("name")}
                error={!!parsedError?.fieldErrors?.Name}
                helperText={!!parsedError?.fieldErrors?.Name?.[0]}
            />

            {errors.name && (
                <p className="text-red-500">
                    {errors.name.message}
                </p>
            )}

            <button
                type="submit"
                disabled={isSubmitting || isPending}
                className="bg-emerald-500 text-white rounded-md py-2 transition-all duration-200 ease-out hover:shadow-xl hover:bg-emerald-600"
            >
                {isPending
                    ? "در حال ذخیره..."
                    : "ثبت"}
            </button>

            {/* {isError && (
                <p className="text-sm text-red-500 text-center">
                    {(error as Error).message}
                </p>
            )}

            {parsedError?.message && (
                <p className="text-sm text-red-500 text-center">
                    {parsedError.message}
                </p>
            )} */}
        </form>
    );
}