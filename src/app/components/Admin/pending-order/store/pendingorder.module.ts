import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetPendingOrderReducer } from "./reducer/pendingOrder.reducer";
import { EffectsModule } from "@ngrx/effects";
import { GetPendingOrderEffects } from "./effects/pendingOrder.effects";
import { PostApporveOrderReducer } from "./reducer/approvePendingOrder.reducer";
import { PostApproveDataEffects } from "./effects/approvePendingOrder.effects";

@NgModule({
    imports:[
        StoreModule.forFeature('GetPendingDataSelector',GetPendingOrderReducer),
        StoreModule.forFeature('PostApproveOrderData',PostApporveOrderReducer),
        EffectsModule.forFeature([GetPendingOrderEffects,PostApproveDataEffects])
    ]
})

export class PendingOrderStoreModule{}