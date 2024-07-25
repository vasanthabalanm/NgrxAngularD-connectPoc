import { createReducer, on } from "@ngrx/store"
import { DeleteHotel, DeleteHotelErrorData, DeleteHotelSuccessData } from "../actions/hoteldelete.action"

export const initialState:any = {
    responseData:null,
    error:null
}

export const HotelDeleteReducer = createReducer(
    initialState,
    on(DeleteHotel,(state)=>({error:false})),
    on(DeleteHotelSuccessData,(state,{deletedhotelDetails})=>({responseData:deletedhotelDetails,error:true})),
    on(DeleteHotelErrorData,(state,{error})=>({error:error}))
) 