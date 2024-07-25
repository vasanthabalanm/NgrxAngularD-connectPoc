import { createAction, props } from "@ngrx/store";

// delete hotel
export const DeleteHotel = createAction(
    '[DELETE HOTEL DATA] Update Hotels Data',
    props<{payload:any}>()
);

export const DeleteHotelSuccessData = createAction(
    '[DELETE HOTEL SUCCESS DATA] Delete Hotel Success Data',
    props<{deletedhotelDetails:any}>()
);

export const DeleteHotelErrorData = createAction(
    '[DELETE HOTEL ERROR DATA] Delete Hotel Error Data',
    props<{error:any}>()
);