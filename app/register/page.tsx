'use client'

import { RegisterUserFormData, RegisterUserSchema } from "@/schemas/RegisterUser.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, FormLabel, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterUserFormData>({
        resolver: zodResolver(RegisterUserSchema)
    })

    const onSubmit = (data: RegisterUserFormData) => {

    }

    //const parsedError = updateFoodIsError ? parseApiError(updateFoodError) : null;

    return (
        <div className="flex items-center justify-center h-dvh">
            <div className="w-70 md:w-80 px-8 py-7 bg-emerald-50 rounded-xl
            border-2 border-emerald-100 flex flex-col items-center gap-5">
                <span className="text-xl text-emerald-900 estedad-bold">ثبت نام</span>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 w-full"
                >
                    {/* <FormLabel>
                        نام کاربری
                    </FormLabel> */}
                    <div className="flex flex-col gap-2">
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            type="text"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                            {...register("username")}
                        //error={!!parsedError?.fieldErrors?.Name}
                        //helperText={!!parsedError?.fieldErrors?.Name?.[0]}
                        />

                        <div className="text-sm text-rose-500">{errors.username?.message}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <TextField
                            label="ایمیل"
                            variant="outlined"
                            type="email"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                            {...register("email")}
                        />
                        <div className="text-sm text-rose-500">{errors.email?.message}</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            type="password"
                            autoSave="false"
                            size="small"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                },
                            }}
                            {...register("password")}
                        />

                        <div className="text-sm text-rose-500">{errors.password?.message}</div>
                    </div>
                    <Button variant="contained" type="submit">
                        ثبت نام
                    </Button>
                </form>
            </div>
        </div>
    )
}