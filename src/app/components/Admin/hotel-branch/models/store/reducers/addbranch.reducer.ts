import { createReducer, on } from "@ngrx/store";
import { PostNewBranch, PostNewBranchErrorData, PostNewBranchSuccessData } from "../actions/addbranch.action";

export const intialstate:any = {
    hotelBranchData:null,
    error:null
}

export const AddBranchReducer = createReducer(
    intialstate,
    on(PostNewBranch,(state)=>({error:false})),
    on(PostNewBranchSuccessData,(state,{postedData})=>({hotelBranchData:postedData,error:true})),
    on(PostNewBranchErrorData,(state,{error})=>({error:error}))
)