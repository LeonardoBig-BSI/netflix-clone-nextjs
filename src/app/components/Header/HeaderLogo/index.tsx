import Image from "next/image"

export const HeaderLogo = () => {
    return (
        <>
            <Image
                src="/netflix-logo.svg.png"
                alt="Logo Netflix"
                width={160}
                height={160}
                className="p-2 ml-4 sm:ml-20 w-28 sm:w-40 cursor-pointer"
            />
        </>
    )
}