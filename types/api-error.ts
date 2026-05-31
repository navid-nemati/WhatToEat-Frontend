export type ApiError = {
    success: boolean;
    message: string;
};

export type ValidationErrorResponse = {
  [key: string]: string[];
};