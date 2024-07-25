import { createAction, props } from "@ngrx/store";

export const deletePendingUser = createAction(
    '[DELETE PENDING USER] Delete Pending User',
    props<{payload:any}>()
);

export const deletPendingUserSuccess = createAction(
    '[DELETE PENDING USER SUCCESS] Delete Pending User Success',
    props<{getDeleteData:any}>()
);

export const deletePendingUserError = createAction(
    '[DELETE PENDING USER ERROR] Delete Pending User Error',
    props<{error:any}>()
);