import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetTotalCounts } from "./reducer/counts.reducer";
import { EffectsModule } from "@ngrx/effects";
import { TotalCountsList } from "./effects/counts.effects";
import { TotalBranchCountsReducer } from "./reducer/branchCounts.reducer";
import { BrachTotalCountsEffects } from "./effects/branchCounts.effects";
import { PendingUserReducer } from "./reducer/pendingUser.reducer";
import { PendingUserEffects } from "./effects/pendinguser.effects";
import { ApprovedUserEffects } from "./effects/approvedUser.effects";
import { TotalApprovedUserReducer } from "./reducer/approvedUser.reducer";

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('getTotalCounts',GetTotalCounts),
        StoreModule.forFeature('getBranchTotalCounts',TotalBranchCountsReducer),
        StoreModule.forFeature('getPendingUserTotalCounts',PendingUserReducer),
        StoreModule.forFeature('getApprovedUserTotalCounts',TotalApprovedUserReducer),
        EffectsModule.forFeature([TotalCountsList,BrachTotalCountsEffects,PendingUserEffects,ApprovedUserEffects])
    ]
})

export class TotalCountsStoreModule {}