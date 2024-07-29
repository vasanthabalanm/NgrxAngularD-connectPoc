import { createAction, props } from "@ngrx/store";

export const GetPendingOrder = createAction(
    '[GET PENDING ORDER] Get Pending Order Data'
);
export const GetPendingOrderSuccess = createAction(
    '[GET PENDING ORDER SUCCESS] Get Pending Order Success Data',
    props<{getOrderdata:any}>()
);

export const GetPendingOrderError = createAction(
    '[GET PENDING ORDER ERROR] Get Pending Order Error Data',
    props<{error:any}>()
);