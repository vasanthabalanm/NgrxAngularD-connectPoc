import { createAction, props } from "@ngrx/store";

// approved request
export const GetApprovedUserTotalCount = createAction(
    '[GET TOTAL Approved USER COUNTS]'
);

export const GetTotalApprovedUserCountSuccess = createAction(
    '[GET TOTAL APPROVED USER COUNTS SUCCESS] Get Approved User Success Data',
    props<{getCountsOfApprovedUser:any}>()
);

export const GetTotalApprovedUserCountError = createAction(
    '[GET TOTAL APPROVED USER COUNTS ERROR] Get Approved User Error Data',
    props<{error:any}>()
)