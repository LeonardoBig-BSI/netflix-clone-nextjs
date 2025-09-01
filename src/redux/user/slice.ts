import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from '@/interfaces/User';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createEmailUser: (state, action: PayloadAction<{ email: string }>) => {
            return {
                ...state,
                user: {
                    email: action.payload.email,
                }
            }
        },

        createUser: (state, action: PayloadAction<{
            email: string,
            name: string, 
            password: string, 
            date: string, 
            address: string 
        }>) => {

            return {
                ...state,
                user: {
                    email: action.payload.email,
                    name: action.payload.name,
                    password: action.payload.password,
                    date: action.payload.date,
                    address: action.payload.address,
                }
            };
        },
        loginUser: (state, action: PayloadAction<{ email: string, password: string }>) => {
            return {
                ...state,
                user: {
                    email: action.payload.email,
                    password: action.payload.password,
                }
            }
        },

        logoutUser: (state) => {
            return {
                ...state,
                user: null,
            }
        },
    }
});

export const { createEmailUser, createUser, loginUser } = userSlice.actions;

export default userSlice.reducer;