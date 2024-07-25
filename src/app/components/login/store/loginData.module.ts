import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./loginData.reducer";
import { LoginDataEffects } from "./loginData.effects";

@NgModule({
    declarations: [],
    imports:[
        CommonModule,
        StoreModule.forFeature('getUserDataResponse',loginReducer),
        EffectsModule.forFeature([LoginDataEffects]),
    ],
})

export class  LoginStoreModule {}