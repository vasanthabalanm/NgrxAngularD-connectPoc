import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { DeleteApprovedUserReducer } from "./reducers/deleteapprovedUser.reducer";
import { EffectsModule } from "@ngrx/effects";
import { DeleteApprovedUserEffects } from "./effects/deleteapprovedUser.effects";
import { ApprovedUserReducer } from "./reducers/approvedUser.reducers";
import { ApprovedUserEffects } from "./effects/approvedUser.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('deleteApprovedUser',DeleteApprovedUserReducer),
        StoreModule.forFeature('GetApproveduserDataResponse',ApprovedUserReducer),
        EffectsModule.forFeature([DeleteApprovedUserEffects,ApprovedUserEffects])
    ]
})

export class DeleteApprovedStoreModule{}