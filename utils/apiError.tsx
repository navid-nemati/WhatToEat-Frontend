// export type ValidationErrors = Record<string, string[]>;

// export function parseApiError(error: unknown): {
//   fieldErrors?: ValidationErrors;
//   message?: string;
// } {
//   if (!error || typeof error !== "object") {
//     return { message: "خطای ناشناخته" };
//   }

//   // validation error (ModelState)
//   if ("errors" in error) {
//     return {
//       fieldErrors: (error as any).errors,
//     };
//   }

//   // custom middleware error
//   if ("message" in error) {
//     return {
//       message: (error as any).message,
//     };
//   }

//   return { message: "خطای ناشناخته" };
// }

import axios from "axios";

export type ValidationErrors = Record<string, string[]>;

export function parseApiError(error: unknown): {
    fieldErrors?: ValidationErrors;
    message?: string;
} {
    if (axios.isAxiosError(error)) {

        const data = error.response?.data;

        if (data?.errors) {
            return {
                fieldErrors: data.errors,
                message: data.message
            };
        }

        if (data?.message) {
            return {
                message: data.message
            };
        }

        return {
            message: "خطایی در ارتباط با سرور رخ داد"
        };
    }

    if (error instanceof Error) {
        return {
            message: error.message
        };
    }

    return {
        message: "خطای ناشناخته"
    };
}