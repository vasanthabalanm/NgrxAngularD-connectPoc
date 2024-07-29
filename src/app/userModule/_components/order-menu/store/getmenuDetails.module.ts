import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetMenuDataReducer } from "./reducers/getMenuData.reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetmenuDataEffects } from "./effects/getMenuData.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('getmenuResponseData',GetMenuDataReducer),
        EffectsModule.forFeature([GetmenuDataEffects])
    ]
})

export class GetMenuDetailsStoreModule{}