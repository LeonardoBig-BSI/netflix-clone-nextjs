
interface ButtonProps {
    type?: 'submit' | 'button';
    className?: string;
    text: string;
    onClick?: () => void;
}

export const ButtonContent = ({ type, className, text, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    )
}