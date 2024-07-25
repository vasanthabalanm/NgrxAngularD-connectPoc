import { createReducer, on } from "@ngrx/store";
import { TotalHotelCounts } from "../../interface/counts.interface";
import { GetTotalHotels, GetTotalHotelsError, GetTotalHotelssuccess } from "../actions/counts.action";

export const intialState : TotalHotelCounts = {
    datas:{
        count: 0,
    },
    loaded:false,
    error:false
}

// hotels
export const GetTotalCounts = createReducer(

    intialState,
    on(GetTotalHotels,(state)=>({
        ...state,
        loaded:false,
        error:true
    })),
    on(GetTotalHotelssuccess,(state,{getCountofHotels})=>({
        ...state,
        datas:getCountofHotels,
        loaded:true,
        error:false

    })),
    on(GetTotalHotelsError,(state,{error})=>({
        ...state,
        error:error
    }))
)