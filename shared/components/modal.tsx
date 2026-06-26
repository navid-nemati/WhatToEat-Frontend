import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ModalProps {
    isOpen: boolean
    children: React.ReactNode
}

export default function Modal({ isOpen, children }: ModalProps) {

    if (!isOpen) return null;

    return (
        // <div className="absolute flex items-center justify-center inset-0 
        //                 z-40 bg-black/50">
        //     <div className="bg-white rounded-lg w-96 z-50
        //                 border border-gray-400 shadow-md
        //                 py-8 px-10">
        //         {children}
        //     </div>

        // </div>

        <Dialog open={isOpen}>
            <DialogContent>
                {/* <DialogHeader>
                    <DialogTitle>
                        ویرایش
                    </DialogTitle>
                </DialogHeader> */}
                {children}
            </DialogContent>
        </Dialog>
    )
}