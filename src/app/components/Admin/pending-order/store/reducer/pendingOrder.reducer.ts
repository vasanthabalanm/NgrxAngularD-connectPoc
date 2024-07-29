import { createReducer, on } from "@ngrx/store"
import { GetPendingOrder, GetPendingOrderError, GetPendingOrderSuccess } from "../actions/pendingOrder.action"

export const intialState:any = {
    getorderStatus:null,
    error:null
}

export const GetPendingOrderReducer = createReducer(
    intialState,
    on(GetPendingOrder,(state)=>({error:null})),
    on(GetPendingOrderSuccess,(state,{getOrderdata})=>({
        getorderStatus:getOrderdata,
        error:false
    })),
    on(GetPendingOrderError,(state,{error})=>({
        error:error
    }))
)