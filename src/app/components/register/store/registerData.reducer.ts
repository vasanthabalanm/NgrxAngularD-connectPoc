import { createReducer, on } from "@ngrx/store"
import { RegisterUser, RegisterUserFailure, RegisterUserSucess } from "./registerData.action"

export const initialState:any = {
    registerUserData:null,
    error:false
}

export const RegisterReducer = createReducer(
    initialState,
    on(RegisterUser,(state)=>({
        error:true
    })),
    on(RegisterUserSucess,(state,{getRegisteredData})=>({
        registerUserData:getRegisteredData,
        error:false
    })),
    on(RegisterUserFailure,(state,{error})=>({
        error:error
    }))
);