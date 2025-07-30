import { ReactNode } from "react"

interface MainProfileContentProps {
    text: string;
    children: ReactNode
}

export const MainProfileContent = ({text, children}: MainProfileContentProps) => {
    return(
        <>
            <h1 className="text-white text-2xl md:text-4xl">{text}</h1>

            {children}
        </>
    )
}