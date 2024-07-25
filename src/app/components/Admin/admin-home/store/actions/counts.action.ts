import { createAction, props } from "@ngrx/store";


// hotel
export const GetTotalHotels = createAction(
    '[GET TOTAL COUNT OF HOTEL] Get Total Count Hotel'
);

export const GetTotalHotelssuccess = createAction(
    '[GET TOTAL COUNT OF HOTEL SUCCESS] Get Total Count Hotel Success',
    props<{getCountofHotels:any}>()
);

export const GetTotalHotelsError = createAction(
    '[GET TOTAL COUNT OF HOTEL ERROR] Get Total Count Hotel Error',
    props<{error:any}>()
);
