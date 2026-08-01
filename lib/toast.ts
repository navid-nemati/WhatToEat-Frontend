import { parseApiError } from "@/utils/apiError";
import { toast } from "react-hot-toast";

const AppToast = {
    success(message: string) {
        toast.success(message);
    },

    error(message: string) {
        toast.error(message);
    },

    // warning(message: string) {
    //     toast.warning(message);
    // },

    // info(message: string) {
    //     toast.info(message);
    // },

    apiError(error: unknown) {
        const { message } = parseApiError(error);

        toast.error(message ?? "مشکلی پیش آمد. 💔");
    },

    promise: toast.promise,
};

export default AppToast;