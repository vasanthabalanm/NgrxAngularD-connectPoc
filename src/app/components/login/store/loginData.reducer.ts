import { createReducer, on } from "@ngrx/store";
import { GetLoginData, GetLoginFailureData, GetLoginSuccessData } from "./loginData.action";



export const initialState:any = {
    userData:null,
    error: false
};

export const loginReducer = createReducer(
    initialState,
    on(GetLoginData, (state) => ({
        ...state,
        error: false 
    })),
    on(GetLoginSuccessData, (state, { getuserdetails }) => ({
        ...state,
        userData:getuserdetails,
        error: false 
    })),
    on(GetLoginFailureData, (state, { error }) => ({
        ...state,
        error: error 
    }))
);
