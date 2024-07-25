import { createAction, props } from "@ngrx/store";

export const postNewUser = createAction(
    '[POST NEW USER] Post New User Data',
    props<{payload:any}>()
);

export const postNewUserSuccess = createAction(
    '[POST NEW USER DATA SUCCESS] Post New User Data Success',
    props<{getPostUserData:any}>()
);

export const postNewUserDataError = createAction(
    '[POST NEW USER DATA ERROR] Post New user Data Error',
    props<{error:any}>()
);