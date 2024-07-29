import { createAction, props } from "@ngrx/store";

export const ApproveOrder = createAction(
    '[POST ORDER DATA] Post Order Data',
    props<{payload:any}>()
);

export const ApproveOrderSuccess = createAction(
    '[POST ORDER DATA SUCCESS] Post Order Success Data',
    props<{approvedData:any}>()
);

export const ApproveOrderError = createAction(
    '[POST ORDER DATA ERROR] Post Order Error Data',
    props<{error:any}>()
);