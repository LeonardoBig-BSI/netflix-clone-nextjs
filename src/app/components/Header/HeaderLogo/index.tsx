"use client"
import Image from "next/image"
import { redirect } from "next/navigation";
import { Button } from "../../Button";

export const HeaderLogo = () => {

    function handleHome() {
        redirect("/");
    }

    return (
        <Button.Root>
            <Button.Content onClick={handleHome}>
                <Image
                src="/netflix-logo.svg.png"
                alt="Logo Netflix"
                width={160}
                height={160}
                className="p-2 ml-4 sm:ml-20 w-28 sm:w-40"
            />
            </Button.Content>
        </Button.Root>
    )
}