import Image from "next/image"

import profileRed from '../images/profile-red.png';
import profileGray from '../images/profile-gray.png';
import profileBlue from '../images/profile-blue.jpeg';
import profileGreen from '../images/profile-green.jpeg';
import profileYellow from '../images/profile-yellow.jpeg';
import { Button } from "../../Button";

export const ProfileImage = () => {

    function handleBrowse() {
        
    }

    return (
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
            
            <div className="flex flex-col items-center mb-8 md:mb-0 gap-2">
                <Button.Root>
                    <Button.Content onClick={handleBrowse} className="text-zinc-500 text-xl hover:text-white">
                        <Image
                            src={profileRed}
                            alt="Perfil Vermelho"
                            width={150}
                            height={150}
                            className="mb-2 border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                        />

                        <Button.Text text="VERMELHO" />
                    </Button.Content>
                </Button.Root>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button.Root>
                    <Button.Content className="text-zinc-500 text-xl hover:text-white">
                        <Image
                            src={profileBlue}
                            alt="Perfil Azul"
                            width={150}
                            height={150}
                            className="mb-2 border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                        />

                        <Button.Text text="AZUL" />
                    </Button.Content>
                </Button.Root>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button.Root>
                    <Button.Content className="text-zinc-500 text-xl hover:text-white">
                        <Image
                            src={profileGray}
                            alt="Perfil Cinza"
                            width={150}
                            height={150}
                            className="mb-2 border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                        />

                        <Button.Text text="CINZA" />
                    </Button.Content>
                </Button.Root>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button.Root>
                    <Button.Content className="text-zinc-500 text-xl hover:text-white">
                        <Image
                            src={profileGreen}
                            alt="Perfil Verde"
                            width={150}
                            height={150}
                            className="mb-2 border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                        />

                        <Button.Text text="VERDE" />
                    </Button.Content>
                </Button.Root>
            </div>

            <div className="flex flex-col items-center gap-2">
                <Button.Root>
                    <Button.Content className="text-zinc-500 text-xl hover:text-white">
                        <Image
                            src={profileYellow}
                            alt="Perfil Amarelo"
                            width={150}
                            height={150}
                            className="mb-2 border-0 hover:border-4 hover:border-white rounded-md cursor-pointer"
                        />

                        <Button.Text text="AMARELO" />
                    </Button.Content>
                </Button.Root>
            </div>
        </div>
    )
}