import { createAction, props } from "@ngrx/store";

export const GetPendingUserData = createAction(
    '[GET PENDING USER DATA] Get Pending User Data'
);

export const GetPendingUserDataSuccess =  createAction(
    'GET PENDING USER DATA SUCCESS] Get Pending User Data Success',
    props<{getResponseUserData:any}>()
);

export const GetPendingUserDataError = createAction(
    '[GET PENDING USER DATA ERROR] Get Pending User Data Error',
    props<{error:any}>()
);