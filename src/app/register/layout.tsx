import { ReactNode } from "react";
import { Header } from "../components/Header";

export default function RegisterLayout({ children }: { children: ReactNode }) {
    return(
        <div className="relative w-full min-h-screen bg-[url('/netflix-banner.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/60 z-0" />

            <div className="relative z-10 w-full">
                <Header.Root>
                    <Header.Content>
                        <Header.Logo />
                    </Header.Content>
                </Header.Root>

                {children}
            </div>            
        </div>
    )
}