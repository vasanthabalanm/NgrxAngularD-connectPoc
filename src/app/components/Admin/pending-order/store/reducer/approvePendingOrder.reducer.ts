import { createReducer, on } from "@ngrx/store"
import { ApproveOrder, ApproveOrderError, ApproveOrderSuccess } from "../actions/approvePendingOrder.actions"

export const intialState:any = {
    responseData:null,
    error:null
}

export const PostApporveOrderReducer = createReducer(
    intialState,
    on(ApproveOrder,(state)=>({error:null})),
    on(ApproveOrderSuccess,(state,{approvedData})=>({responseData:approvedData,error:false})),
    on(ApproveOrderError,(state,{error})=>({error:error}))

) 