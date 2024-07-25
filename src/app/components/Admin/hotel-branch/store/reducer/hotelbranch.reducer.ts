import { createReducer, on } from "@ngrx/store"
import { GetBranchData, GetBranchDataError, GetBranchDataSuccess } from "../action/hotelbranch.action"

export const intialState = {
}

export const HotelBranchReducer = createReducer(
    intialState,
    on(GetBranchData,(state)=>({error:false})),
    on(GetBranchDataSuccess,(state,{branchdata})=>({data:branchdata,error:false})),
    on(GetBranchDataError,(state,{error})=>({error:error}))
)