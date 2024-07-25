import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetPendingUserDataReducer } from "./reducers/getPendingUserData.reducer";
import { EffectsModule } from "@ngrx/effects";
import { GetPendingUserDataEffects } from "./effects/getPendingUserData.effects";
import { PostnewUserReducer } from "./reducers/postnewUser.reducer";
import { PostNewUserDataEffects } from "./effects/postnewUser.effects";
import { DeletePendingUserReducer } from "./reducers/deletePendingUser.reducer";
import { DeletePendingUserEffects } from "./effects/deletePendingUser.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('getPendingUserResponse',GetPendingUserDataReducer),
        StoreModule.forFeature('PostnewUserData',PostnewUserReducer),
        StoreModule.forFeature('DeletePendingUserData',DeletePendingUserReducer),
        EffectsModule.forFeature([GetPendingUserDataEffects,PostNewUserDataEffects,DeletePendingUserEffects])
    ]
})

export class GetPendingUserStoreModule {}