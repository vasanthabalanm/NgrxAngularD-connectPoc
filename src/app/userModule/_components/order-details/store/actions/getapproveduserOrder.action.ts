import { createAction, props } from "@ngrx/store";

export const getapprovedUserOrder = createAction(
    '[GET APPROVED USER ORDER] Get Approved User Order',
    props<{payload:any}>()
);

export const getapprovedUserOrderSuccess = createAction(
    '[GET APPROVED USER ORDER SUCCESS DATA] Get Approved User Order Success',
    props<{getApprovedSuccessdata:any}>()
);

export const getapprovedUserOrderError = createAction(
    '[GET APPROVED USER ORDER ERROR DATA] Get Approved User Order Error',
    props<{error:any}>()
);