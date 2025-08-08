"use client"

import Link from "next/link";
import { redirect } from "next/navigation";

import { useLogin } from "@/hooks/useLogin";
import { Button } from "../_components/Button";
import { Input } from "../_components/Input";
import { useState } from "react";
import { CircleX } from "lucide-react";

export default function Login() {
    const { handleValidationEmail, handleValidationPassword } = useLogin();
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    function handleProfile(formData: FormData) {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const validationEmail = handleValidationEmail(email);
        const validationPassword = handleValidationPassword(password);

        const newErrors: { email?: string, password?: string } = {}

        if (!validationEmail.status) {
            newErrors.email = validationEmail.error!;
        }

        if (!validationPassword.status) {
            newErrors.password = validationPassword.error!;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        redirect('/profile');
    }

    return (
        <div className="mt-8 flex justify-center items-center">
            <div className="mb-8 w-full max-w-lg p-2 bg-black/70 rounded-md">
                <h1 className="m-8 text-xl md:text-3xl text-white font-bold">
                    Entrar
                </h1>

                <div className="flex flex-col justify-center items-center gap-4">
                    <form action={handleProfile}>
                        <div className="max-w-lg flex flex-col justify-center items-center gap-4">

                            <div className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    label="Email"
                                    name="email"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                />

                                {errors.email && (
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#ef4444" />
                                        <p className="text-red-500 text-xs">
                                            {errors.email}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <Input
                                    type="password"
                                    label="Senha"
                                    name="password"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                />

                                {errors.password && (
                                    <div className="flex items-center self-start gap-2 ">
                                        <CircleX size={20} color="#ef4444" />
                                        <p className="text-red-500 text-xs">
                                            {errors.password}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>


                        <div className="mt-4 flex flex-col justify-center items-center gap-4">
                            <Button.Root>
                                <Button.Content type="submit" className="w-[275px] md:w-[425px] py-2 bg-colorButton rounded-md hover:bg-colorButtonHover duration-300">
                                    <Button.Text text="Entrar" className="text-white text-lg font-bold" />
                                </Button.Content>
                            </Button.Root>
                        </div>


                    </form>

                    <span className="text-zinc-400 font-bold">OU</span>

                    <Button.Root>
                        <Button.Content type="button" className="w-[275px] md:w-[425px] py-2 bg-colorButtonCodeAccess rounded-md hover:bg-colorButtonCodeAccessHover duration-300">
                            <Button.Text text="Usar um código de acesso" className="text-white text-base" />
                        </Button.Content>
                    </Button.Root>

                    <p className="mt-0">
                        <Link href="#" className="text-white text-base underline">
                            Esqueceu a senha?
                        </Link>
                    </p>
                </div>

                <p className="m-8 text-zinc-400 text-base">
                    Primeira vez aqui?
                    <Link href="/register" className="text-white text-base font-bold hover:underline">
                        Assine agora.
                    </Link>
                </p>
            </div>
        </div>
    )
}