'use client'

import { useAuth } from "@/context/AuthContext";
import AppToast from "@/lib/toast";
import { RegisterUserFormData, RegisterUserSchema } from "@/features/auth/schemas/RegisterUser.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Register() {

    const { register: registerUser } = useAuth()
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterUserFormData>({
        resolver: zodResolver(RegisterUserSchema)
    })

    const onSubmit = async (data: RegisterUserFormData) => {
        setApiError(null)
        try {
            await registerUser(data.username, data.email, data.password)
            AppToast.success("سلااااام چطوری 😍")
        }
        catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const message = err.response?.data?.message || "خطا در ثبت نام";

                setApiError(message);
                AppToast.apiError(message);
            } else {
                setApiError("خطا در ثبت نام");
                AppToast.apiError("خطا در ثبت نام 💔");
            }
        }
        // catch (err: any) {
        //     setApiError(err.response?.data?.message || "خطا در ورود")
        //     AppToast.apiError(err.response?.data?.message || "خطا در ورود 💔")
        // }
    }

    //const parsedError = updateFoodIsError ? parseApiError(updateFoodError) : null;

    return (
        <div className="flex items-center justify-center h-dvh">
            <div className="w-70 md:w-80 px-8 py-7 bg-emerald-50 rounded-xl
            border-2 border-emerald-100 flex flex-col items-center gap-5">
                <span className="text-xl text-emerald-900 estedad-bold">ثبت نام</span>

                {apiError && <div className="text-sm text-rose-500 bg-rose-50 p-2 rounded w-full text-center">{apiError}</div>}

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