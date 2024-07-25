import { createAction, props } from "@ngrx/store";

export const UpdateBranchData = createAction(
    '[UPDATE HOTEL BRANCH DATA] Update Hotel Branch Data',
    props<{payload:any}>()
);

export const UpdateBranchDataSuccess = createAction(
    '[UPDATE HOTEL BRANCH DATA SUCCESS] Update Hotel Branch Data Success',
    props<{responseData:any}>()
);

export const UpdateBranchDataError = createAction(
    '[UPDATE HOTEL BRANCH DATA ERROR] Update Hotel Branch Data Error',
    props<{error:any}>()
);

