import { createReducer, on } from "@ngrx/store";
import { TotalBranchAllCounts } from "../../interface/brachcounts.interface";
import { GetBranchTotalCount, GetTotalBranchCountError, GetTotalBranchCountSuccess } from "../actions/branchCounts.action";

export const intialState : TotalBranchAllCounts = {
    datas:{
        count: 0,
    },
    loaded:false,
    error:false
}
// branch
export const TotalBranchCountsReducer = createReducer(
    intialState,
    on(GetBranchTotalCount,(state)=>({ ...state,error:false})),
    on(GetTotalBranchCountSuccess,(state,{getCountsOfBranch})=>({ ...state,datas:getCountsOfBranch,error:false})),
    on(GetTotalBranchCountError,(state,{error})=>({...state,error:error}))
)