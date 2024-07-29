import { createReducer, on } from "@ngrx/store"
import { getMenuData, getMenuDataError, getMenuDataSuccess } from "../actions/getMenuData.actions"

export const intialState:any = {
    responseData:null,
    error:null
}

export const GetMenuDataReducer = createReducer(
    intialState,
    on(getMenuData,(state)=>({error:null})),
    on(getMenuDataSuccess,(state,{getMenuData})=>({responseData:getMenuData,error:false})),
    on(getMenuDataError,(state,{error})=>({error:error}))
)