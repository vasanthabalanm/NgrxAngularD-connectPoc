import { createAction, props } from "@ngrx/store";

export const DeleteHotebranch = createAction(
    '[DELETE HOTEL BRANCH] Delete Hotel Branch',
    props<{payload:any}>()
);

export const DeleteHotelBranchsuccess = createAction(
    '[DELETE HOTEL BRANCH SUCCESS] Delete Hotel Branch Success',
    props<{responseData:any}>()
);

export const DeleteHotelBranchError = createAction(
    '[DELETE HOTEL BRANCH ERROR] Delete Hotel Branch Error',
    props<{error:any}>()
);