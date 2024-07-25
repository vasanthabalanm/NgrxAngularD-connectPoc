import { createAction, props } from "@ngrx/store";

// get all hotel
export const GetAllHotel = createAction(
    '[GET ALL HOTEL DATA] Get Hotels Data'
);

export const GetAllHotelSuccessData = createAction(
    '[GET ALL HOTEL SUCCESS DATA] Get Hotel Success Data',
    props<{getallhotelDetails:any}>()
);

export const GetAllHotelErrorData = createAction(
    '[GET ALL HOTEL ERROR DATA] Get Hotel Error Data',
    props<{error:any}>()
);

// update the hotel
export const UpdateHotel = createAction(
    '[UPDATE HOTEL DATA] Update Hotels Data',
    props<{payload:any}>()
);

export const UpdateHotelSuccessData = createAction(
    '[UPDATE HOTEL SUCCESS DATA] Update Hotel Success Data',
    props<{getupdatedhotelDetails:any}>()
);

export const UpdateHotelErrorData = createAction(
    '[UPDATE HOTEL ERROR DATA] Update Hotel Error Data',
    props<{error:any}>()
);

