import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { RegisterReducer } from "./registerData.reducer";
import { EffectsModule } from "@ngrx/effects";
import { RegisterUserEffects } from "./registerData.effects";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        StoreModule.forFeature('postUserDataResponse',RegisterReducer),
        EffectsModule.forFeature([RegisterUserEffects])
    ]
})

export class RegisterUserStoreModule{}