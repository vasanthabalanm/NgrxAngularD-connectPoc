import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { GetHotelDataReducer } from "./reducer/hotel.reducer";
import { EffectsModule } from "@ngrx/effects";
import { GetAllHotelDetailEffects } from "./effects/hotel.effects";
import { HotelDeleteReducer } from "./reducer/hoteldelete.reducer";
import { DeleteHotelEffects } from "./effects/hoteldelete.effects";

@NgModule({
    declarations:[],
    imports:[
        StoreModule.forFeature('getallHotelResponse',GetHotelDataReducer),
        StoreModule.forFeature('deleteHotelData',HotelDeleteReducer),
        EffectsModule.forFeature([GetAllHotelDetailEffects,DeleteHotelEffects])
    ]
})

export class GetGotelStoreModule{}