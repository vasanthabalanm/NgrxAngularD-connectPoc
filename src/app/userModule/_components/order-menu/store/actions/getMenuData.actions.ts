import { createAction, props } from "@ngrx/store";

export const getMenuData = createAction(
'[GET MENU DATA] Get Menu Data'
);


export const getMenuDataSuccess = createAction(
'[GET MENU DATA SUCCESS] Get Menu Data Success',
props<{getMenuData:any}>()
);


export const getMenuDataError = createAction(
    '[GET MENU DATA ERROR] Get Menu Data Error',
    props<{error:any}>() 
); 