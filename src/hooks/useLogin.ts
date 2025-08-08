import { isEmail } from 'validator'

export const useLogin = () => {

    function handleValidationEmail(email: string) {
        if (!email) {
            return {
                error: "Campo email é obrigatório.",
                status: false,
            }
        }

        if (!isEmail(email)) {
            return {
                error: "Informe um email válido.",
                status: false,
            }
        }

        return {
            error: null,
            status: true,
        }
    }

    function handleValidationPassword(password: string) {
        if(!password) {
            return {
                error: "Campo senha é obrigatório.",
                status: false,
            }
        }

        if (password.length < 4 || password.length > 60) {
            return {
                error: "A senha deve ter entre 4 a 60 caracteres.",
                status: false,
            }
        }

        return {
            error: null,
            status: true,
        }
    }

    return {
        handleValidationEmail,
        handleValidationPassword,
    }
}