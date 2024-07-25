import { createAction, props } from "@ngrx/store";

// branch
export const GetBranchTotalCount = createAction(
    '[GET TOTAL BRANCH COUNTS]'
);

export const GetTotalBranchCountSuccess = createAction(
    '[GET TOTAL BRANCH COUNTS SUCCESS] Get Branch Success Data',
    props<{getCountsOfBranch:any}>()
);

export const GetTotalBranchCountError = createAction(
    '[GET TOTAL BRANCH COUNTS ERROR] Get Branch Error Data',
    props<{error:any}>()
)