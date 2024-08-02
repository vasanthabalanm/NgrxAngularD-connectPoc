import { createAction, props } from "@ngrx/store";

export const AddCartItem = createAction(
    '[POST CART DATAS] Post Cart Datas',
    props<{payload:any}>()
);

export const AddCartItemSuccess = createAction(
    '[POST CART DATA SUCCESS] Post Cart Data Success',
    props<{responseData:any}>()
);

export const AddCartItemError = createAction(
    '[POST CART ITEM ERROR] Post Cart Item Error',
    props<{error:any}>()
);