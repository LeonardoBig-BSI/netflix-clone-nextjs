import { z } from "zod";
import { isEmail } from "validator";

export const createLoginSchema = z.object({
    email: z
        .string()
        .nonempty("Informe um email válido.")
        .refine((data) => isEmail(data), {error: "Informe um email válido."}),

    password: z
        .string()
        .min(4, { error: "A senha deve ter entre 4 a 60 caracteres." })
        .max(60, { error: "A senha deve ter entre 4 a 60 caracteres." })
});

export type CreateLoginSchema = z.infer<typeof createLoginSchema>;