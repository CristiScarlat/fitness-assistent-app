import { createSlice } from '@reduxjs/toolkit';

let user = "";
let token = "";

if(typeof window !== 'undefined'){
    user = localStorage.getItem("user");
    token = localStorage.getItem("authToken");
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user,
        token: token
    },
    reducers: {
        addUser: (state, action) => {
            localStorage.setItem('authToken', action.payload.accessToken);
            localStorage.setItem('user', action.payload.user);
            return { ...state, user: action.payload.user, token: action.payload.accessToken };
        },
        removeUser: (state, action) => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            return { ...state, user: "", token: "" };
        }
    }
})

export const { addUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;