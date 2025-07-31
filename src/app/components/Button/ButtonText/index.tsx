
interface ButtonTextProps {
    text: string;
    className?: string;
}

export const ButtonText = ({ text, className }: ButtonTextProps) => {
    return (
        <>
            <span className={className}>
                {text}
            </span>
        </>
    )
}