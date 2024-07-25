import { createAction, props } from "@ngrx/store";

// pending request
export const GetPendingUserTotalCount = createAction(
    '[GET TOTAL PENDING USER COUNTS]'
);

export const GetTotalPendingUserCountSuccess = createAction(
    '[GET TOTAL PENDING USER COUNTS SUCCESS] Get Pending User Success Data',
    props<{getCountsOfPendingUser:any}>()
);

export const GetTotalPendingUserCountError = createAction(
    '[GET TOTAL PENDING USER COUNTS ERROR] Get Pending User Error Data',
    props<{error:any}>()
)