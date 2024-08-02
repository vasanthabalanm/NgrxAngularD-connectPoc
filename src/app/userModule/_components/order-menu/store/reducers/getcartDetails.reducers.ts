import { createReducer, on } from "@ngrx/store"
import { addcartData, removeCart, removeCartwithpayload } from "../actions/getcartDetails.actions"

export const intialState :any ={
    cartDatas:[],
    error:null
}

export const CartItemReducer = createReducer(
    intialState,
    on(addcartData,(state,{payload})=>({cartDatas:[...state.cartDatas,payload]})),
    on(removeCartwithpayload,(state,{payload})=>({
        ...state,
        cartDatas:state.cartDatas.filter((item:any) => item !== payload)
    })),
    on(removeCart,(state)=>({cartDatas:[]}))
)
