import { TextField } from "@mui/material"

export const Input = () => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{
                    width: {
                        xs: "90vw",  // aumenta bastante no mobile (quase a largura da tela)
                        sm: "400px",
                        md: "500px",
                    },
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#d1d5db", // texto cinza claro (Tailwind gray-300)
                        "& fieldset": {
                            borderColor: "#9ca3af", // borda cinza (Tailwind gray-400)
                        },
                        "&:hover fieldset": {
                            borderColor: "#a1a1aa", // hover mais forte
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#d4d4d8", // quando está focado
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "#9ca3af", // label
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#d4d4d8", // label quando focado
                    },
                }}
            />
        </>
    )
}