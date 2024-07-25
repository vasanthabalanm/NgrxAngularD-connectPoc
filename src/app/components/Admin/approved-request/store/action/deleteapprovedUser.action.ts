import { createAction, props } from "@ngrx/store";

export const deleteapproveUser = createAction(
    '[DELETE APPROVED USER] Delete Approved User',
    props<{payload:any}>()
);

export const deleteapprovedUserSuccess = createAction(
    '[DELETE APPROVED USER SUCCESS] Delete Approved User Success',
    props<{getapprovedUserdata:any}>()
);

export const deleteApprovedUserError = createAction(
    '[DELTE APPROVED USER ERROR] Delete ApprovedUSer Error',
    props<{error:any}>()
);