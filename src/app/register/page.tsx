"use client"

import { redirect, useSearchParams } from "next/navigation";
import { Button } from "../_components/Button";
import { Input } from "../_components/Input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { createRegisterSchema, CreateRegisterSchema } from "@/schemas/createRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";


export default function Register() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRegisterSchema>({
        resolver: zodResolver(createRegisterSchema),
        defaultValues: {
            name: "",
            password: "",
            date: "",
            address: "",
        },
    });


    function onSubmit(data: CreateRegisterSchema) {
        const result = {
            email: email,
            name: data.name,
            password: data.password,
            date: data.date,
            address: data.address
        }

        console.log(result);
        redirect('/profile');
    }

    return (
        <div className="mt-8 flex justify-center items-center">
            <div className="mb-8 w-full max-w-lg p-2 bg-black/70 rounded-md">
                <h1 className="m-8 text-xl md:text-3xl text-white font-bold">
                    Cadastre-se
                </h1>

                <div className="flex flex-col justify-center items-center gap-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="max-w-lg flex flex-col justify-center items-center gap-4">

                            <div className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    label="Nome Completo"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                    error={!!errors.name}
                                    {...register("name")}
                                />

                                {errors.name && (
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.name?.message}
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
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.password?.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    label="Data de Nascimento"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                    error={!!errors.date}
                                    {...register("date")}
                                />

                                {errors.date && (
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.date?.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <Input
                                    type="text"
                                    label="Endereço"
                                    md="425px"
                                    sm="280px"
                                    xs="280px"
                                    error={!!errors.address}
                                    {...register("address")}
                                />

                                {errors.address && (
                                    <div className="flex items-center self-start gap-2">
                                        <CircleX size={20} color="#e50914" />
                                        <p className="text-colorButton text-xs">
                                            {errors.address?.message}
                                        </p>
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="mt-4 flex flex-col justify-center items-center gap-4">
                            <Button.Root>
                                <Button.Content className="w-[275px] md:w-[425px] py-2 bg-colorButton rounded-md hover:bg-colorButtonHover duration-300">
                                    <Button.Text text="Cadastrar" className="text-white text-lg font-bold" />
                                </Button.Content>
                            </Button.Root>
                        </div>
                    </form>
                </div>

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