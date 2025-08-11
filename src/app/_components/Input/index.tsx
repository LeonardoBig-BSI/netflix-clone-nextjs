import { TextField } from "@mui/material"
import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithRef<typeof TextField>{
    type: string;
    label: string;
    xs?: string;
    sm?: string;
    md?: string;
    error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, label, xs, sm, md, error, ...rest }, ref) => {
        return (
            <TextField
                label={label}
                variant="outlined"
                type={type}
                inputRef={ref}
                sx={{
                    width: { xs, sm, md },
                    marginBottom: "16px",
                    "& .MuiOutlinedInput-root": {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "#d1d5db",
                        "& fieldset": {
                            borderColor: !error ? "#9ca3af" : "#e50914",
                        },
                        "&:hover fieldset": {
                            borderColor: !error ? "#a1a1aa" : "#e50914",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: !error ? "#d4d4d8" : "#e50914",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "#9ca3af",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#d4d4d8",
                    },
                }}
                {...rest} // repassa onChange, onBlur, etc. do register
            />
        );
    }
);