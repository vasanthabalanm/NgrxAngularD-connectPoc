import { createReducer, on } from "@ngrx/store"
import { deleteApprovedUserError, deleteapprovedUserSuccess, deleteapproveUser } from "../action/deleteapprovedUser.action"

export const intialState :any = {
    responsedata:null,
    loaded:null,
    error:null
}

export const DeleteApprovedUserReducer = createReducer(
    intialState,
    on(deleteapproveUser,(state)=>({error:false,loaded:true})),
    on(deleteapprovedUserSuccess,(state,{getapprovedUserdata})=>({responsedata:getapprovedUserdata,loaded:false})),
    on(deleteApprovedUserError,(state,{error})=>({error:error,loaded:false}))
)