import { createReducer, on } from "@ngrx/store"
import { UpdateBranchData, UpdateBranchDataError, UpdateBranchDataSuccess } from "../actions/updatebracnh.action"

export const intialState:any ={
    responseDatas :null,
    error:null
}

export const UpdateHotelBranchReducer = createReducer(
    intialState,
    on(UpdateBranchData,(state)=>({error:false})),
    on(UpdateBranchDataSuccess,(state,{responseData})=>({responseDatas:responseData,error:true})),
    on(UpdateBranchDataError,(store,{error})=>({error:error}))
)