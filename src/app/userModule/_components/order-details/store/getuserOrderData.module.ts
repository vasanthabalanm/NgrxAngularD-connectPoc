import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetPendingOrderUserReducer } from "./reducer/getpendinguserOrder.reducer";
import { EffectsModule } from "@ngrx/effects";
import { GetPendingOrderUserEffects } from "./effects/getpendinguserOrder.effects";
import { GetApprovedUserOrderReducer } from "./reducer/getapproveduserOrder.reducer";
import { GetApprovedUserOrderEffects } from "./effects/getapproveduserOrder.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('getPendingUserOrder',GetPendingOrderUserReducer),
        StoreModule.forFeature('getApprovedUserOrder',GetApprovedUserOrderReducer),
        EffectsModule.forFeature([GetPendingOrderUserEffects,GetApprovedUserOrderEffects])
    ]
})

export class GetUserOrderDataStoreModule {}