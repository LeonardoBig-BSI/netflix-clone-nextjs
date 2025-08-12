
export type ErrorsCredentialsLogin = {
    email?: {
        status: boolean;
        message: string;
    },
    password?: {
        status: boolean;
        message: string;
    }
}