import { createReducer, on } from "@ngrx/store"
import { AddCartItem, AddCartItemError, AddCartItemSuccess } from "../actions/addcart.actions"

export const intialStates:any = {
    resposeItem:null,
    error:null
}

export const AddCartDataReducer = createReducer(
    intialStates,
    on(AddCartItem,(state)=>({error:null})),
    on(AddCartItemSuccess,(state,{responseData})=>({resposeItem:responseData,error:false})),
    on(AddCartItemError,(state,{error})=>({error:error}))
)