import { createReducer, on } from "@ngrx/store";
import { TotalApprovedUserAllCounts } from "../../interface/approvedUser.interface";
import { GetApprovedUserTotalCount, GetTotalApprovedUserCountError, GetTotalApprovedUserCountSuccess } from "../actions/approvedUser.action";

export const intialState : TotalApprovedUserAllCounts ={
    datas:{
        count: 0,
    },
    loaded:false,
    error:false
}

// approvedRequest
export const TotalApprovedUserReducer = createReducer(
    intialState,
    on(GetApprovedUserTotalCount,(state)=>({ ...state,error:false})),
    on(GetTotalApprovedUserCountSuccess,(state,{getCountsOfApprovedUser})=>({ ...state,datas:getCountsOfApprovedUser,error:false})),
    on(GetTotalApprovedUserCountError,(state,{error})=>({...state,error:error}))
)