import { ReactNode } from "react";

interface ButtonProps {
    type?: 'submit' | 'button';
    className?: string;
    onClick?: () => void;
    children: ReactNode;
}

export const ButtonContent = ({ type, className, children, onClick }: ButtonProps) => {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}