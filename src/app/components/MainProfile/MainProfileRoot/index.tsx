import { ReactNode } from "react"

export const MainProfileRoot = ({children}: {children: ReactNode}) => {
    return(
        <div className="mt-44 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}