import { createAction, props } from "@ngrx/store";

export const getpendingUserOrder = createAction(
    '[GET PENDING USER ORDER] Get UserPending Order',
    props<{payload:any}>()
);

export const getpendingUserOrderSuccess = createAction(
    '[GET PENDING USER ORDER SUCCESS] Get Pending User Order Success Data',
    props<{getResponseData:any}>()
);

export const getpendingUserOrderError = createAction(
    '[GET PENDING USER ORDER ERROR] Get Pending User Order Error Data',
    props<{error:any}>()
);