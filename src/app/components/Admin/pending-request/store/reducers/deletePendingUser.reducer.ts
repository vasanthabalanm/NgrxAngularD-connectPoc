import { createReducer, on } from "@ngrx/store"
import { deletePendingUser, deletePendingUserError, deletPendingUserSuccess } from "../actions/deletePendingUser.actions"

export const intialState :any ={
    responseData :{
        message:null
    },
    error:null,
    loading:null
}

export const DeletePendingUserReducer = createReducer(
    intialState,
    on(deletePendingUser,(state)=>({error:false,loading:true})),
    on(deletPendingUserSuccess,(state,{getDeleteData})=>({responseData:getDeleteData,error:true,loading:false})),
    on(deletePendingUserError,(state,{error})=>({error:error,loading:false}))
)