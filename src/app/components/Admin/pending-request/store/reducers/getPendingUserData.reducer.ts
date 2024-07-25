import { createReducer, on } from "@ngrx/store"
import { GetPendingUserData, GetPendingUserDataError, GetPendingUserDataSuccess } from "../actions/getPendinguserData.actions"

export const intialState:any = {
    responseData:null,
    error:null,
    loader:null
}

export const GetPendingUserDataReducer = createReducer(
    intialState,
    on(GetPendingUserData,(state)=>({error:false,loader:true})),
    on(GetPendingUserDataSuccess,(state,{getResponseUserData})=>({responseData:getResponseUserData,error:true,loader:false})),
    on(GetPendingUserDataError,(state,{error})=>({error:error,loader:false}))
)