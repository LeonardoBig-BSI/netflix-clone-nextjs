import { z } from "zod";

export const createRegisterSchema = z.object({
    name: z
        .string()
        .nonempty("Informe um email válido.")
        .min(3, "O nome deve ter, no mínimo, 3 letras."),
    password: z
        .string()
        .min(4, { error: "A senha deve ter entre 4 a 60 caracteres." })
        .max(60, { error: "A senha deve ter entre 4 a 60 caracteres." }),
    date: z
        .string()
        .nonempty("Informe uma data válida."),
    address: z
        .string()
        .nonempty("Informe um endereço válido."),
});

export type CreateRegisterSchema = z.infer<typeof createRegisterSchema>