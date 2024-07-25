import { createReducer, on } from "@ngrx/store"
import { PostHotel, PostHotelErrorData, PostHotelSuccess } from "./addhotel.action"

export const intialstate:any ={
    addhoteldetails:null,
    error:false
}

export const AddHotelReducer = createReducer(
    intialstate,
    on(PostHotel,(state)=>({
        error:true
    })),
    on(PostHotelSuccess,(state,{getAddedHotelDetails})=>({
        ...state,
        addhoteldetails:getAddedHotelDetails,
        error:false
    })),
    on(PostHotelErrorData,(state,{error})=>({
        error:error
    }))
)