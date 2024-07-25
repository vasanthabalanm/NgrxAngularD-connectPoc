import { createAction, props } from "@ngrx/store";

export const GetLoginData = createAction(
    '[GET LOGIN DATA] Get login data',
    props<{payload:any}>()
);

export const GetLoginSuccessData = createAction(
    '[GET LOGIN SUCCESS DATA] Get login sucess data',
    props<{getuserdetails:any}>()
);

export const GetLoginFailureData = createAction(
    '[GET LOGIN ERROR DATA] Get login error data',
    props<{error:any}>()
);