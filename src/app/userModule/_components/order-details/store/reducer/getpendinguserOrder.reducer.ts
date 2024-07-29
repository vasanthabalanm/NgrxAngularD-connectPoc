import { createReducer, on } from "@ngrx/store"
import { getpendingUserOrder, getpendingUserOrderError, getpendingUserOrderSuccess } from "../actions/getpendinguserOrder.actions"

export const intialState :any = {
    responseOrderData: null,
    error:null
}


export const GetPendingOrderUserReducer = createReducer(
    intialState,
    on(getpendingUserOrder,(state)=>({error:null})),
    on(getpendingUserOrderSuccess,(state,{getResponseData})=>({responseOrderData:getResponseData,error:false})),
    on(getpendingUserOrderError,(state,{error})=>({error:error}))
)