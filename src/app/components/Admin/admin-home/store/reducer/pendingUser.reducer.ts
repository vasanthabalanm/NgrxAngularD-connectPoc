import { createReducer, on } from "@ngrx/store";
import { TotalPendingUserAllCounts } from "../../interface/pendingUserCounts.interface";
import { GetPendingUserTotalCount, GetTotalPendingUserCountError, GetTotalPendingUserCountSuccess } from "../actions/pendinguser.action";

export const intialState : TotalPendingUserAllCounts = {
    datas:{
        count: 0,
    },
    loaded:false,
    error:false
}

// pendingRequest
export const PendingUserReducer = createReducer(
    intialState,
    on(GetPendingUserTotalCount,(state)=>({ ...state,error:false})),
    on(GetTotalPendingUserCountSuccess,(state,{getCountsOfPendingUser})=>({ ...state,datas:getCountsOfPendingUser,error:false})),
    on(GetTotalPendingUserCountError,(state,{error})=>({...state,error:error}))
)