import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HotelBranchReducer } from "./reducer/hotelbranch.reducer";
import { HotelBranchEffects } from "./effects/hotelbranch.effects";
import { DeleteHotelBranchReducer } from "./reducer/deletehotelBranch.reducer";
import { DeleteHotelBranchDataEffects } from "./effects/deletehotelBranch.effects";

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('getBranchdatas',HotelBranchReducer),
        StoreModule.forFeature('deleteHotelBranchData',DeleteHotelBranchReducer),
        EffectsModule.forFeature([HotelBranchEffects,DeleteHotelBranchDataEffects])
    ]
})

export class HotelBranchStoreModule{}