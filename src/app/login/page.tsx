"use client"

import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { CircleX } from "lucide-react";

import { CreateLoginSchema, createLoginSchema } from "@/schemas/createLoginSchema";
import { AppDispatch, RootState } from "@/redux/types";
import { Button } from "../_components/Button";
import { Input } from "../_components/Input";
import { loginUser } from "@/redux/user/slice";
import { ErrorsCredentialsLogin } from "@/types/errors-credentials-login";


export default function Login() {
    const { user } = useSelector((rootReducer: RootState) => rootReducer.user);
    const dispatch = useDispatch<AppDispatch>();

    const [errorsCredentials, setErrorsCredentials] = useState<ErrorsCredentialsLogin>({
        email: {
            status: false,
            message: "",
        },
        password: {
            status: false,
            message: "",
        }
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateLoginSchema>({
        resolver: zodResolver(createLoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data: CreateLoginSchema) {

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        if (user.email !== data.email) {
            setErrorsCredentials({
                email: {
                    status: true,
                    message: "Não encontramos nenhuma conta com o email informado. Tente novamente ou crie uma conta."
                }
            });
            
            return;
        }

        if (user.password !== data.password) {
            setErrorsCredentials({
                email: {
                    status: true,
                    message: `Senha incorreta para ${user.email} Você pode usar um código de acesso, redefinir sua senha ou tentar novamente.`
                }
            });

            return;
        }

        dispatch(loginUser({
            email: data.email,
            password: data.password
        }))

        redirect('/profile');
    }

    return (
        <div className="mt-8 flex justify-center items-center">
            <div className="mb-8 w-full max-w-lg p-2 bg-black/70 rounded-md">
                <h1 className="m-8 text-xl md:text-3xl text-white font-bold">
                    Entrar
                </h1>

                <div className="flex flex-col justify-center items-center gap-4">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="max-w-lg flex flex-col justify-center items-center gap-4">
                            {errorsCredentials.email?.status && (
                                <div className="mt-2 mb-8 max-w-[425px] h-24 px-8 bg-yellow-600 rounded-md">
                                    <p className="mt-4 text-black text-base text-left">
                                        {errorsCredentials.email.message}
                                    </p>
                                </div>
                            )}
                            <div className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    label="Email"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                    error={!!errors.email}
                                    {...register("email")}
                                />

                                {errors.email && (
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.email?.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <Input
                                    type="password"
                                    label="Senha"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                    error={!!errors.password}
                                    {...register("password")}
                                />

                                {errors.password && (
                                    <div className="flex items-center self-start gap-2 ">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.password?.message}
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