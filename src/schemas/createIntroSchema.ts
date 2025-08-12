import { email, z } from 'zod';
import { isEmail } from 'validator';

export const createIntroSchema = z.object({
    email: z
        .string()
        .nonempty("Informe um email válido.")
        .refine((data) => isEmail(data), { error: "Informe um email válido." })
});

export type CreateIntroSchema = z.infer<typeof createIntroSchema>