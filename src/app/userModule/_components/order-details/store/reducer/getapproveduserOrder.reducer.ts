import { createReducer, on } from "@ngrx/store"
import { getapprovedUserOrder, getapprovedUserOrderError, getapprovedUserOrderSuccess } from "../actions/getapproveduserOrder.action"

export const intialState:any = {
    responseData:null,
    error:null
}

export const GetApprovedUserOrderReducer = createReducer(
    intialState,
    on(getapprovedUserOrder,(state)=>({error:null})),
    on(getapprovedUserOrderSuccess,(state,{getApprovedSuccessdata})=>({responseData : getApprovedSuccessdata,error:false})),
    on(getapprovedUserOrderError,(state,{error})=>({error:error}))
)