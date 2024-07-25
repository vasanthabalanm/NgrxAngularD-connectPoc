import { createAction, props } from "@ngrx/store";

export const PostHotel = createAction(
    '[POST HOTEL DATA] Add Hotel Data',
    props<{payload:any}>()
);

export const PostHotelSuccess = createAction(
    '[POST HOTEL SUCCESS DATA] Add Hotel Success Data',
    props<{getAddedHotelDetails:any}>()
);

export const PostHotelErrorData = createAction(
    '[POST HOTEL ERROR DATA] Add otel Error Data',
    props<{error:any}>()
);