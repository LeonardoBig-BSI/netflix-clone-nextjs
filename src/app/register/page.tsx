"use client"

import { redirect } from "next/navigation";
import { Button } from "../_components/Button";
import { Input } from "../_components/Input";
import Link from "next/link";


export default function Register() {

    function handleProfile() {
        redirect('/profile');
    }

    return (
        <div className="mt-8 flex justify-center items-center">
            <div className="mb-8 w-full max-w-lg p-2 bg-black/70 rounded-md">
                <h1 className="m-8 text-xl md:text-3xl text-white font-bold">
                    Cadastre-se
                </h1>

                <form action={handleProfile} className="max-w-lg flex flex-col justify-center items-center gap-4">
                    <Input
                        type="text"
                        label="Nome Completo"
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

                    <Input
                        type="text"
                        label="Data de Nascimento"
                        md="425px"
                        sm="280px"
                        xs="280px"
                    />

                    <Input
                        type="address"
                        label="Endereço"
                        md="425px"
                        sm="280px"
                        xs="280px"
                    />

                    <div className="flex flex-col justify-center items-center gap-4">
                        <Button.Root>
                            <Button.Content className="w-[275px] md:w-[425px] py-2 bg-colorButton rounded-md hover:bg-colorButtonHover duration-300">
                                <Button.Text text="Cadastrar" className="text-white text-lg font-bold" />
                            </Button.Content>
                        </Button.Root>
                    </div>
                </form>

                <p className="m-8 text-zinc-400 text-base">
                    Já possui uma conta?
                    <Link href="/login" className="text-white text-base font-bold hover:underline">
                        Entrar.
                    </Link>
                </p>
            </div>
        </div>
    )
}