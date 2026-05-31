export type ValidationErrors = Record<string, string[]>;

export function parseApiError(error: unknown): {
  fieldErrors?: ValidationErrors;
  message?: string;
} {
  if (!error || typeof error !== "object") {
    return { message: "خطای ناشناخته" };
  }

  // validation error (ModelState)
  if ("errors" in error) {
    return {
      fieldErrors: (error as any).errors,
    };
  }

  // custom middleware error
  if ("message" in error) {
    return {
      message: (error as any).message,
    };
  }

  return { message: "خطای ناشناخته" };
}
