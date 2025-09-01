"use client"

import { useSelector } from "react-redux";

import { RootState } from "@/redux/types";
import { CreateLoginSchema } from "@/schemas/createLoginSchema";

export const useLogin = () => {
    const { user } = useSelector((rootReducer: RootState) => rootReducer.user);

    function handleValidation(data: CreateLoginSchema) {
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        if (data.email !== user.email) {
            return {
                errorStatus: true,
                message: "Não encontramos nenhuma conta com o email informado. Tente novamente ou crie uma conta."
            };
        }

        if (data.password !== user.password) {
            return {
                errorStatus: true,
                message: `Senha incorreta para ${user.email} Você pode usar um código de acesso, redefinir sua senha ou tentar novamente.`
            };
        }

        return {
            errorStatus: false,
            message: "",
        };
    }

    return {
        handleValidation,
    }
}