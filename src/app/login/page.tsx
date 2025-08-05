import Link from "next/link";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function Login() {
    return (
        <div className="mt-8 flex justify-center items-center">
            <div className="mb-8 w-full max-w-lg p-2 bg-black/70 rounded-md">
                <h1 className="m-8 text-xl md:text-3xl text-white font-bold">
                    Entrar
                </h1>

                <div className="flex flex-col justify-center items-center gap-4">
                    <form className="max-w-lg flex flex-col justify-center items-center gap-4">
                        <Input
                            type="email"
                            label="Email"
                            md="425px"
                            sm="280px"
                            xs="280px"
                        />

                        <Input
                            type="password"
                            label="Senha"
                            md="425px"
                            sm="280px"
                            xs="280px"
                        />

                        <div className="flex flex-col justify-center items-center gap-4">
                            <Button.Root>
                                <Button.Content className="w-[275px] md:w-[425px] py-2 bg-colorButton rounded-md hover:bg-colorButtonHover duration-300">
                                    <Button.Text text="Entrar" className="text-white text-lg font-bold" />
                                </Button.Content>
                            </Button.Root>

                            <span className="text-zinc-400 font-bold">OU</span>

                            <Button.Root>
                                <Button.Content className="w-[275px] md:w-[425px] py-2 bg-colorButtonCodeAccess rounded-md hover:bg-colorButtonCodeAccessHover duration-300">
                                    <Button.Text text="Usar um código de acesso" className="text-white text-base" />
                                </Button.Content>
                            </Button.Root>
                        </div>
                    </form>

                    <p className="mt-0">
                        <Link href="/" className="text-white text-base underline">
                            Esqueceu a senha?
                        </Link>
                    </p>
                </div>

                <p className="m-8 text-zinc-400 text-base">
                    Primeira vez aqui?
                    <Link href="/" className="text-white text-base font-bold hover:underline">
                        Assine agora.
                    </Link>
                </p>
            </div>
        </div>
    )
}