import { createAction, props } from "@ngrx/store";

export const PostNewBranch = createAction(
    '[POST NEW BRANCH] Post New Branch',
    props<{payload:any}>()
);

export const PostNewBranchSuccessData = createAction(
    '[POST NEW BRANCH SUCCESS DATA] Post New Branch Success',
    props<{postedData:any}>()
);

export const PostNewBranchErrorData = createAction(
    '[POST NEW BRANCH ERROR DATA] Post New Branch Error',
    props<{error:any}>()
);