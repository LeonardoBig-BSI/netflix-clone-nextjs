import Image from "next/image"

export const HeaderLogo = () => {
    return (
        <>
            <Image
                src="/netflix-logo.svg.png"
                alt="Logo Netflix"
                width={160}
                height={160}
                className="p-2 ml-20"
            />
        </>
    )
}