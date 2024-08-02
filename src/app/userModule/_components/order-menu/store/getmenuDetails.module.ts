import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetMenuDataReducer } from "./reducers/getMenuData.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetmenuDataEffects } from "./effects/getMenuData.effects";
import { CartItemReducer } from "./reducers/getcartDetails.reducers";
import { AddCartDataReducer } from "./reducers/addcart.reducers";
import { AddCartDataEffects } from "./effects/addcart.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('getmenuResponseData',GetMenuDataReducer),
        StoreModule.forFeature('getcartItemsResponse',CartItemReducer),
        StoreModule.forFeature('addCartData',AddCartDataReducer),
        EffectsModule.forFeature([GetmenuDataEffects,AddCartDataEffects])
    ]
})

export class GetMenuDetailsStoreModule{}