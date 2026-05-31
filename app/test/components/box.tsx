interface ButtonProps {
    children: React.ReactNode
    variant?: "style1" | "style2"
}

export default function BoxTest({
    children,
    variant = "style1"
}
    : ButtonProps) {

        const styles = {
            style1:"bg-emerald-500 rounded-2xl",
            style2:"bg-violet-500 rounded-sm"
        }

    return (
        <div className={`m-10 p-10 max-w-1/2 transition-all duration-500 ${styles[variant]}`}>
            {children}
        </div>
    )
}