import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AddBranchReducer } from "./reducers/addbranch.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AddBranchEffects } from "./effects/addbranch.effects";
import { UpdateHotelBranchReducer } from "./reducers/updatebranch.reducer";
import { UpdateHotelBranchEffects } from "./effects/updatebranch.effects";

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('PostHotelBranchData',AddBranchReducer),
        StoreModule.forFeature('UpdateHotelBranchResponse',UpdateHotelBranchReducer),
        EffectsModule.forFeature([AddBranchEffects,UpdateHotelBranchEffects])
    ]
})

export class PostHotelBranchStoreModule {}