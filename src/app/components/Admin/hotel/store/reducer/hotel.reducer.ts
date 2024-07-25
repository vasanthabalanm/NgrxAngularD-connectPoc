import { createReducer, on } from "@ngrx/store"
import { GetAllHotel, GetAllHotelErrorData, GetAllHotelSuccessData } from "../actions/hotel.actions"

export const intialState:any = {
    datas:[],
    error:false,
    loaded:false
}

export const GetHotelDataReducer = createReducer(
    intialState,
    on(GetAllHotel,(state:any)=>({
        error:false,
        loaded:false
    })),
    on(GetAllHotelSuccessData,(state,{getallhotelDetails})=>({
        ...state,
        datas:getallhotelDetails,
        error:false,
        loaded:true
    })),
    on(GetAllHotelErrorData,(state,{error})=>({
        error:error,
        loaded:false
    }))
)