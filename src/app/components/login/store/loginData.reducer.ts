import { createReducer, on } from "@ngrx/store";
import { GetLoginData, GetLoginFailureData, GetLoginSuccessData } from "./loginData.action";



export const initialState:any = {
    userData:null,
    error: null
};

export const loginReducer = createReducer(
    initialState,
    on(GetLoginData, (state) => ({
        error: null 
    })),
    on(GetLoginSuccessData, (state, { getuserdetails }) => ({
        userData:getuserdetails,
        error: false 
    })),
    on(GetLoginFailureData, (state, { error }) => ({
        error: error 
    }))
);
