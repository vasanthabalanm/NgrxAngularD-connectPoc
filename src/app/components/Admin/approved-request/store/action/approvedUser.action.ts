import { createAction, props } from "@ngrx/store";

export const GetApprovedUser = createAction(
    '[GET APPROVED USER DATA] Get Approved User Data'
);

export const GetApprovedUserSuccess = createAction(
    '[GET APPROVED USER DATA SUCCESS] Get Approved User Data Success',
    props<{getuserData:any}>()
);

export const GetApprovedUserError = createAction(
    '[GET APPROVED USER DATA ERROR] Get Approved User Data Error',
    props<{error:any}>()
);