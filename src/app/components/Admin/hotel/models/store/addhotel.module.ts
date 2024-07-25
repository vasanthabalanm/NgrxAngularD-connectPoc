import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AddHotelReducer } from "./addhotel.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AddHotelEffects } from "./addhotel.effects";

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('PostHotel',AddHotelReducer),
        EffectsModule.forFeature([AddHotelEffects])
    ]
}
)




export class AddHotelStoreModule{}