"use client"

import { ChevronRight, CircleX } from "lucide-react"

import { Button } from "../Button"
import { Input } from "../Input"
import { redirect } from "next/navigation"
import { useForm } from "react-hook-form"
import { createIntroSchema, CreateIntroSchema } from "@/schemas/createIntroSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/types"
import { createEmailUser } from "@/redux/user/slice"

export const Intro = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateIntroSchema>({
    resolver: zodResolver(createIntroSchema),
    defaultValues: {
      email: "",
    },
  });


  function onSubmit(data: CreateIntroSchema) {
    dispatch(createEmailUser({
      email: data.email,
    }));

    redirect('/register');
  }

  return (
    <>
      <h1 className="text-4xl md:text-6xl text-white font-extrabold text-center leading-snug">
        Filmes, séries e muito <br className="hidden sm:block" />
        mais, sem limites
      </h1>

      <p className="mt-4 md:mt-2 text-lg text-white font-bold">
        A partir de R$ 20,90. Cancele quando quiser.
      </p>

      <label className="my-8 text-base md:text-md text-white">
        Quer assistir? Informe seu e-mail para criar sua assinatura.
      </label>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row justify-center gap-2">

        <div className="flex flex-col items-center">
          <Input
            type="text"
            label="Email"
            xs="90vw"
            sm="400px"
            md="500px"
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

        <div>
          <Button.Root>
            <Button.Content type="submit" className="mt-2 md:mt-0 px-4 py-4 md:px-8 md:py-3 rounded-md bg-colorButton hover:bg-colorButtonHover duration-300">
              <div className="flex flex-row justify-center items-center gap-2">
                <Button.Text text="Vamos lá" className="text-xl md:text-2xl text-white font-bold" />

                <ChevronRight color="#fff" size={30} />
              </div>
            </Button.Content>
          </Button.Root>
        </div>

      </form>
    </>
  )
}