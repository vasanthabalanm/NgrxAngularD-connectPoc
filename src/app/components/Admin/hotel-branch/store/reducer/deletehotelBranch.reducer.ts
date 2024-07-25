import { createReducer, on } from "@ngrx/store"
import { DeleteHotebranch, DeleteHotelBranchError, DeleteHotelBranchsuccess } from "../action/deletehotelBranch.action"

export const initialState:any ={
    responseDatas : null,
    error:null
}

export const DeleteHotelBranchReducer = createReducer(
    initialState,
    on(DeleteHotebranch,(sate)=>({error:false})),
    on(DeleteHotelBranchsuccess,(state,{responseData})=>({responseDatas:responseData,error:true})),
    on(DeleteHotelBranchError,(state,{error})=>({error:error}))
)