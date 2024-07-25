import { createAction, props } from "@ngrx/store";

export const GetBranchData = createAction(
    '[GET HOTEL BRANCH DATA] Get Hotel Branch '
);

export const GetBranchDataSuccess = createAction(
    '[GET HOTEL BRANCH DATA SUCCESS] Get Hotel Branch Success',
    props<{branchdata:any}>()
);

export const GetBranchDataError = createAction(
    '[GET HOTEL BRANCH DATA ERROR] Get Hotel Branch Error',
    props<{error:any}>()
);