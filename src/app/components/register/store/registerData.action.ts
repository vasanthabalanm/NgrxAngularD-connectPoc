import { createAction, props } from "@ngrx/store";

export const RegisterUser = createAction(
    '[POST USER DATA] Register User data',props<{payload:any}>()
);

export const RegisterUserSucess = createAction(
    '[POST USER SUCCESS DATA] Register User Success Data',props<{getRegisteredData:any}>()
);

export const RegisterUserFailure = createAction(
    '[POST USER ERROR DATA] Register User Error Data',props<{error:any}>()
);