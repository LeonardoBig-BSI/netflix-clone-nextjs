import Image from "next/image"

import profileRed from '../images/profile-red.png';
import profileGray from '../images/profile-gray.png';
import profileBlue from '../images/profile-blue.jpeg';
import profileGreen from '../images/profile-green.jpeg';
import profileYellow from '../images/profile-yellow.jpeg';

export const MainProfileImage = () => {
    return(
        <div className="mt-8 flex flex-row justify-center items-center gap-8">
                <Image
                    src={profileRed}
                    alt="Perfil Vermelho"
                    width={150}
                    height={150}
                    className="border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                />
                <Image
                    src={profileBlue}
                    alt="Perfil Azul"
                    width={150}
                    height={150}
                    className="border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                />
                <Image
                    src={profileGray}
                    alt="Perfil Cinza"
                    width={150}
                    height={150}
                    className="border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                />
                <Image
                    src={profileGreen}
                    alt="Perfil Verde"
                    width={150}
                    height={150}
                    className="border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                />
                <Image
                    src={profileYellow}
                    alt="Perfil Amarelo"
                    width={150}
                    height={150}
                    className="border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                />
        </div>
    )
}