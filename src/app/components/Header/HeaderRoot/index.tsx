import { ReactNode } from "react"

export const HeaderRoot = ({ children }: { children: ReactNode }) => {
    return(
        <header>{children}</header>
    )
}