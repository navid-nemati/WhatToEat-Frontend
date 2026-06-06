import useUpdateIngredient from "@/features/ingredients/hooks/useUpdateIngredient";
import { UpdateIngredientItemFormData, UpdateIngredientItemSchema } from "@/features/ingredients/schemas/UpdateIngredientItem.schema";
import { parseApiError } from "@/utils/apiError";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

interface props {
    id: string
}

export default function UpdateIngredientComponent({ id }: props) {

    const { mutate, isPending, isError, error } = useUpdateIngredient()
    const parsedError = isError ? parseApiError(error) : null;

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<UpdateIngredientItemFormData>({
        resolver: zodResolver(UpdateIngredientItemSchema)
    })

    // const onSubmit = (data: UpdateIngredientFormData) => {
    //     console.log("Form submitted:", data);
    //     mutate({ id, name: data.name }, {
    //         onSuccess: () => {
    //             reset();
    //         },
    //         onError: (err: any) => {
    //             console.error("Mutation Erroraaaaaaaa:", err);
    //             console.log("errrrrrrroor", error)
    //         }
    //     });
    // }

    const onSubmit = (data: UpdateIngredientItemFormData) => {
    console.log("Form submitted:", data);
    console.log("ID:", id);
    
    if (!id) {
        console.error("ID is undefined!");
        return;
    }
    
    mutate({ id, name: data.name }, {
        onSuccess: () => {
            reset();
        },
        onError: (err: any) => {
            console.error("Mutation Error:", err);
        }
    });
}


    return (
        <div className="p-5 border border-gray-400 rounded-lg">
            <div className="mb-3">
                <span className="text-lg">ویرایش</span>
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
                    onClick={() => console.log(errors)}
                    className="bg-amber-300 px-3 py-2 rounded-md text-white
                    text-shadow-sm transition-all duration-200 hover:scale-105
                    hover:shadow-md">
                    {isPending || isSubmitting ? "اندکی تأمل" : "ویرایش"}
                </button>
            </form>
        </div>
    )
}