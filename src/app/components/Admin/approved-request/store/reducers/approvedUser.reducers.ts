import { createReducer, on } from "@ngrx/store"
import { GetApprovedUser, GetApprovedUserError, GetApprovedUserSuccess } from "../action/approvedUser.action"

export const intialState :any = {
    responseData:null,
    error:null,
    loaded:null
}


export const ApprovedUserReducer = createReducer(
    intialState,
    on(GetApprovedUser,(state)=>({error:true})),
    on(GetApprovedUserSuccess,(state,{getuserData})=>({responseData:getuserData,error:true,loaded:false})),
    on(GetApprovedUserError,(state,{error})=>({error:error,loaded:false}))
)