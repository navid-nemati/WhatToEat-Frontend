import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface ModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children: React.ReactNode;
}

export default function Modal({
    open,
    onOpenChange,
    title,
    description,
    size = "md",
    children,
}: ModalProps) {

    const sizes = {
        xs: "sm:max-w-sm",
        sm: "sm:max-w-md",
        md: "sm:max-w-lg",
        lg: "sm:max-w-2xl",
        xl: "sm:max-w-4xl",
    };

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent className={`${sizes[size ?? "md"]} max-h-[90vh] overflow-y-auto p-5`}>
                {(title || description) && (
                    <DialogHeader className="flex items-center justify-center">
                        {title && <span className="text-lg">{title}</span>}
                        {description && (
                            <DialogDescription>
                                {description}
                            </DialogDescription>
                        )}
                    </DialogHeader>
                )}

                {children}
            </DialogContent>
        </Dialog>
    )
}