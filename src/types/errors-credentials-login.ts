
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

export type ErrorsCredentials = {
    errorStatus?: boolean;
    message?: string;
}