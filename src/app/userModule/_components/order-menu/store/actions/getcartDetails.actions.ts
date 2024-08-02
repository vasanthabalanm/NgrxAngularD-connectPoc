import { createAction, props } from "@ngrx/store";

export const addcartData = createAction(
    '[POST CART DATA] Post Cart Item',
    props<{payload:any}>()
);

export const removeCart = createAction(
    '[REMOVE CART DATA] Remove Cart Item'
);

export const removeCartwithpayload = createAction(
    '[REMOVE CART DATA] Remove Cart Item payload',
    props<{payload:any}>()
);